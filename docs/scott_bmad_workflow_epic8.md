### Pre-Epic Setup (Do Once)

**Step 1: Create Epic Branch**
```bash
git checkout main
git pull origin main
git checkout -b epic/8-use-cases
```

**Step 2: Generate Sprint Status**
```
@sm.md *sprint-planning
```

**Output:** `.bmad-ephemeral/sprint-status.yaml` created with all 56 stories  
**Verify:** Epic 8 shows as "backlog", stories 8.1 and 8.2 show as "backlog"

---

### Story 8.1: Create Use Case Layout

#### Phase 1: Story Preparation

**Command 1:**
```
@sm.md *create-story
```

**Wait for:** Story file created at `.bmad-ephemeral/stories/8-1-create-use-case-layout.md`  
**Verify:** File contains ACs from epic-story-task-breakdown.md  
**Status Change:** sprint-status shows `8-1-create-use-case-layout: drafted`

---

**Command 2:**
```
@sm.md *story-context
```

**Wait for:** Context XML created at `.bmad-ephemeral/stories/8-1-create-use-case-layout-context.xml`  
**Verify:** Story file "Context Reference" section now has XML path  
**Status Change:** sprint-status shows `8-1-create-use-case-layout: ready-for-dev`

---

#### Phase 2: Implementation

**Command 3:**
```
@dev.md *develop-story
```

**Dev Agent Will:**
1. Load story file
2. **Run gate checks:**
   - Status = "ready-for-dev"? ✓
   - Context Reference populated? ✓
3. Load context XML
4. Implement per ACs
5. Build after first component
6. Test on multiple breakpoints
7. Complete Dev Agent Record section
8. Update sprint-status to "review"

**Wait for:** Dev reports completion  
**You Test:** Visit `/use-cases`, verify functionality  
**Status Change:** sprint-status shows `8-1-create-use-case-layout: review`

---

#### Phase 3: Review & Document

**Command 4 (Optional):**
```
@sm.md *code-review
```

**SM Will:**
- Review against ACs
- Check architecture compliance
- Validate no violations
- Mark done if passing

**Status Change:** sprint-status shows `8-1-create-use-case-layout: done`

---

**Command 5 (Manual):**

Create `docs/EPIC-8-STORY-8.1-SUMMARY.md` manually:
- Copy template from `docs/EPIC-7-STORY-7.1-SUMMARY.md`
- Document what was built
- List files created
- Note patterns established
- Any lessons learned

---

#### Phase 4: Commit

**Git Commands:**
```bash
git add .
git commit -m "feat(epic-8): Story 8.1 - Create use case layout

Implemented use cases page with 4 use case sections following
Problem → Solution → Results format.

Components:
- Use cases page at /use-cases
- UseCaseCard component with animations
- 4 placeholder use cases (Home Study, Family Prep, Churches, Mission Fields)

All ACs satisfied. Architecture compliant.
Story 8.1 complete."

git push origin epic/8-use-cases
```

**Verify CI/CD passes before continuing to Story 8.2**

---

### Story 8.2: Add Beta Tester Placeholder Sections

**Repeat the EXACT same workflow:**

1. `@sm.md *create-story`
2. `@sm.md *story-context`
3. `@dev.md *develop-story`
4. `@sm.md *code-review` (optional)
5. Create story summary doc
6. Commit and push

---

### Epic 8 Completion

After both stories done:

**Step 1: Create Epic Summary**

Create `docs/technical/EPIC-8-SUMMARY.md`:
```markdown
# EPIC 8: Use Cases - COMPLETE ✅

**Date Completed:** [date]
**Branch:** `epic/8-use-cases` → merged to `main`
**Stories Completed:** 2/2

## Summary
[Overview of what was built]

## Story 8.1: Create Use Case Layout
- Page created at /use-cases
- 4 use case sections
- [Reference: docs/EPIC-8-STORY-8.1-SUMMARY.md]

## Story 8.2: Add Beta Tester Placeholder Sections
- 3 beta tester placeholders
- [Reference: docs/EPIC-8-STORY-8.2-SUMMARY.md]

## Files Created
[List all files]

## Patterns Established
[Document any new patterns]

## Lessons Learned
[Capture insights]
```

**Step 2: Optional Retrospective**
```
@sm.md *epic-retrospective
```

**Step 3: Merge to Main**
```bash
git checkout main
git pull origin main
git merge epic/8-use-cases
git push origin main
git branch -D epic/8-use-cases
git push origin --delete epic/8-use-cases
```

---

## What Prevents Violations

### The Story Context Workflow

**When you run `@sm.md *story-context`, it generates XML that includes:**

1. **Architecture Review**
   - Checks architecture-decisions.md
   - Reviews React server/client patterns
   - Identifies global scope risks
   - Validates component boundaries

2. **Previous Story Learnings**
   - Loads Story 7.1 (or previous) completion summary
   - Extracts: files created, patterns established, lessons learned
   - Ensures: reuse not recreate, maintain consistency

3. **Implementation Guidance**
   - Component hierarchy plan
   - Server vs client decisions
   - Props serialization validation
   - Build checkpoint reminders

**Result:** Dev Agent has architectural guidance BEFORE coding, preventing:
- Global overrides (like MDX issue)
- React serialization errors (like use-cases issue)
- Pattern inconsistencies
- Duplicate implementations

**Without Story Context:** Dev codes blind, relies on training data, violations occur.

---

## Gate Checks Explained

### Gate 1: Story Status

**Before Dev starts coding:**
```
Required: status = "ready-for-dev" or "Approved"
Blocked: status = "drafted" or "backlog"
```

**Why:** "drafted" means story exists but hasn't been architecturally reviewed. Story context workflow must run first.

**If Gate Fails:**
```
❌ Story not ready for development

Current status: drafted
Required status: ready-for-dev

Action: Run @sm.md *story-context

BMAD Workflow: drafted → [story-context] → ready-for-dev → [dev]
```

---

### Gate 2: Context Reference

**Before Dev starts coding:**
```
Required: Context Reference section contains file path(s)
Blocked: Empty or contains "<!-- comment -->"
```

**Why:** Context Reference proves story-context workflow ran and generated technical guidance.

**If Gate Fails:**
```
❌ Story Context Reference is EMPTY

Story context XML not generated.

Action: Run @sm.md *story-context

Context XML provides architectural guidance and prevents violations.
```

---

### Gate 3: React Server/Client Boundary (In Context)

**During implementation (from context guidance):**

**Check:** Are you using `'use client'` directive?
- If YES → Verify parent is server component
- If YES → Verify props are serializable (strings, numbers, objects)
- If NO → Use icon names as strings, resolve on client

**Common Violation:**
```typescript
// page.tsx (server component)
const items = [{ icon: SomeComponent }]; // ❌ Component not serializable
<ClientComponent icon={item.icon} />

// CORRECT:
const items = [{ iconName: 'SomeName' }]; // ✅ String is serializable
<ClientComponent iconName={item.iconName} />
```

---

### Gate 4: Global Scope Check (In Context)

**Before modifying root-level files:**

**Files requiring extra scrutiny:**
- `next.config.js`
- `middleware.ts`
- `mdx-components.tsx`
- `tailwind.config.ts`

**Check:** Will this affect routes outside current story?
- If YES → Document all affected routes
- If YES → Test ALL pages after change
- Consider scoped alternative

---

## Troubleshooting Common Issues

### Problem: Agent Doesn't Follow Workflow

**Symptom:** You say `@sm.md *create-story` but agent just talks instead of creating file

**Cause:** Agent context confused or menu system not loaded

**Fix:**
1. Start fresh message
2. Just type: `@sm.md`
3. Wait for menu to appear
4. Select number for *create-story OR type `*create-story`

---

### Problem: Dev Agent Starts Without Context

**Symptom:** Dev begins coding but story status is "drafted"

**Cause:** Gate checks not enforcing (old agent file)

**Fix:**
1. Verify `.bmad/bmm/agents/dev.md` has updated gate check steps
2. Dev agent should HALT if context missing
3. If agent proceeds anyway → STOP AGENT, run `@sm.md *story-context` first

---

### Problem: "Continue" Causes Drift

**Symptom:** You say "continue" and agent loses structure

**Cause:** "Continue" is ambiguous, triggers regular Cursor AI

**Fix:**
- Never use "continue" alone
- Always use: `@agent *workflow-command`
- Be explicit about what to continue

---

### Problem: Story Context Seems Unnecessary

**Symptom:** "Why generate XML for simple story?"

**Reality:** Story 7.1 and 8.1 both seemed "simple"
- 7.1: Just add MDX support → Created global overrides
- 8.1: Just add use cases page → Violated React rules

**Fix:** Trust the process. Context catches non-obvious issues.

---

## Workflow State Machine

### Story Status Flow

```
backlog
   ↓ (@sm.md *create-story)
drafted
   ↓ (@sm.md *story-context)
ready-for-dev
   ↓ (@dev.md *develop-story)
in-progress
   ↓ (Dev completes all ACs)
review
   ↓ (@sm.md *code-review OR manual approval)
done
```

**Cannot Skip States:**
- ❌ backlog → ready-for-dev (missing drafted + context)
- ❌ drafted → in-progress (missing story-context)
- ❌ ready-for-dev → done (missing implementation + review)

**Each transition requires specific workflow command.**

---

## Epic 8 Execution Timeline

**Assuming 2 stories, proper workflow:**

| Day | Activity | Time | Commands |
|-----|----------|------|----------|
| **Day 1** | Sprint planning | 15min | `@sm.md *sprint-planning` |
| | Story 8.1 prep | 30min | `@sm.md *create-story`, `@sm.md *story-context` |
| | Story 8.1 dev | 2-3hrs | `@dev.md *develop-story` |
| | Story 8.1 doc | 30min | Create summary doc |
| | Commit & test | 15min | Git commit, CI/CD verify |
| **Day 2** | Story 8.2 prep | 30min | `@sm.md *create-story`, `@sm.md *story-context` |
| | Story 8.2 dev | 1-2hrs | `@dev.md *develop-story` |
| | Story 8.2 doc | 30min | Create summary doc |
| | Epic complete | 1hr | Epic summary, retrospective, merge |

**Total Epic 8 Time:** 6-8 hours (matches epic breakdown estimate)

---

## Success Metrics

**For Epic 8, measure:**

- ✅ All stories went through story-context workflow: 2/2 = 100%
- ✅ Dev agent never started without context: 0 violations
- ✅ Zero reverts: 0 (down from 8)
- ✅ All artifacts created: Story files, context XML, summaries
- ✅ Sprint status accurately reflects state
- ✅ First-time build success: 100%

**If any metric fails → workflow discipline broke somewhere.**

---

## For Future Epics (9, 10, 11...)

**This exact workflow repeats:**

1. Create epic branch
2. Run sprint-planning
3. For each story:
   - *create-story
   - *story-context
   - *develop-story
   - *code-review (optional)
   - Create summary doc
   - Commit
4. Epic summary
5. Merge to main

**No shortcuts. No drift. Strict discipline.**

---

## Your Commitment

**You said:** "I want strict discipline. That's the point of adopting BMAD."

**This workflow delivers strict discipline.**

**The cost:**
- More prompts (3 per story minimum)
- More waiting (each workflow completes separately)
- More reviews (verify outputs at each step)

**The benefit:**
- No reverts
- No architectural violations
- Complete audit trail
- Learning captured
- Quality code

**Worth it? Absolutely. 8 reverts in 5 days is expensive. This prevents them.**

---

## Starting Point for Epic 8

**Your next command should be:**

```
@sm.md *sprint-planning
```

**This will:**
1. Generate sprint-status.yaml
2. Show all Epic 8 stories
3. Set baseline for tracking
4. Confirm Epic 8 stories are "backlog"

**Then we proceed with:**
```
@sm.md *create-story
```

**One step at a time. Full discipline. No drift.**

---

**Ready to begin Epic 8 with proper BMAD workflow, Scott?**

---

*Bob (Scrum Master) - November 17, 2025*  
*"Process prevents problems. Discipline delivers quality."*

