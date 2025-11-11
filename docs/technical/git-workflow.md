# Git Workflow & Branching Strategy

**Project:** RKPi5 Marketing Website  
**Date:** November 11, 2025  
**For:** Scott E. Townsend

---

## Branching Strategy

### Branch Hierarchy

```
main (production)
├── epic/1-foundation
│   ├── story/1.1-initialize-nextjs
│   ├── story/1.2-install-shadcn
│   └── story/1.3-configure-services
├── epic/2-design-system
│   ├── story/2.1-configure-tailwind
│   └── story/2.2-create-utilities
├── epic/3-layout
│   ├── story/3.1-create-header
│   │   ├── prototype/header-v1 (multi-agent)
│   │   ├── prototype/header-v2 (multi-agent)
│   │   └── prototype/header-v3 (multi-agent)
│   ├── story/3.2-create-mobile-menu
│   ├── story/3.3-create-footer
│   └── story/3.4-integrate-layout
└── ... (more epics)
```

---

## Branch Naming Conventions

### EPIC Branches
**Format:** `epic/{number}-{name}`

**Examples:**
- `epic/1-foundation`
- `epic/2-design-system`
- `epic/4-homepage`
- `epic/10-auth`

**Purpose:** Group all stories for a major feature area

---

### Story Branches
**Format:** `story/{epic}.{story}-{name}`

**Examples:**
- `story/1.1-initialize-nextjs`
- `story/1.2-install-shadcn`
- `story/4.1-create-hero`
- `story/10.2-sync-clerk-users`

**Purpose:** Implement a single user story with all its tasks

---

### Prototype Branches (Multi-Agent UI)
**Format:** `prototype/{component}-v{number}`

**Examples:**
- `prototype/hero-v1`
- `prototype/hero-v2`
- `prototype/pricing-cards-v1`
- `prototype/header-v3`

**Purpose:** Parallel UI prototyping with multiple agent variations

**Created from:** Story branch  
**Merged to:** Story branch (after selecting best variant)

---

## Development Workflow

### Standard Story Development

#### 1. Start New Story

```bash
# Checkout the epic branch
git checkout epic/1-foundation

# Create story branch
git checkout -b story/1.1-initialize-nextjs

# Work on tasks...
```

#### 2. Commit Frequently

```bash
# Commit after completing each task
git add .
git commit -m "Task 1.1.1: Run create-next-app CLI command"

git add .
git commit -m "Task 1.1.2: Verify project structure"
```

#### 3. Test Story

```bash
# Run all checks
npm run lint
npm run build
npm test

# Manual testing
npm run dev
```

#### 4. Merge Story to Epic

```bash
# Switch to epic branch
git checkout epic/1-foundation

# Merge story (no fast-forward to preserve history)
git merge --no-ff story/1.1-initialize-nextjs

# Push epic branch
git push origin epic/1-foundation
```

#### 5. Clean Up (Optional)

```bash
# Delete story branch locally after merge
git branch -d story/1.1-initialize-nextjs

# Delete remote branch
git push origin --delete story/1.1-initialize-nextjs
```

---

### Multi-Agent UI Prototyping Workflow

#### 1. Start Story

```bash
git checkout epic/3-layout
git checkout -b story/3.1-create-header
```

#### 2. Create Prototype Branches

```bash
# Create 3 prototype branches for parallel agent work
git checkout -b prototype/header-v1
git checkout story/3.1-create-header
git checkout -b prototype/header-v2
git checkout story/3.1-create-header
git checkout -b prototype/header-v3
```

#### 3. Run Parallel Agents (Cursor 2.0)

- Open 3 instances of Cursor
- Each works on different prototype branch
- Agents create different variations of the component

#### 4. Review Prototypes

```bash
# Switch between prototypes to review
git checkout prototype/header-v1
npm run dev  # Review in browser

git checkout prototype/header-v2
npm run dev  # Review in browser

git checkout prototype/header-v3
npm run dev  # Review in browser
```

#### 5. Select Best Variant

```bash
# Choose the best prototype (e.g., v2)
git checkout story/3.1-create-header
git merge prototype/header-v2

# Clean up unused prototypes
git branch -D prototype/header-v1
git branch -D prototype/header-v3
```

#### 6. Complete Story & Merge to Epic

```bash
# Merge story to epic
git checkout epic/3-layout
git merge --no-ff story/3.1-create-header
git push origin epic/3-layout
```

---

### Epic Completion Workflow

#### 1. Verify All Stories Complete

```bash
# Check epic branch
git checkout epic/1-foundation

# Run full test suite
npm run lint
npm run build
npm test

# Manual verification of acceptance criteria
```

#### 2. Merge Epic to Main

```bash
# Update main branch
git checkout main
git pull origin main

# Merge epic (no fast-forward)
git merge --no-ff epic/1-foundation

# Push to production
git push origin main
```

#### 3. Tag Release (Optional)

```bash
# Tag after epic merge
git tag -a v0.1.0 -m "EPIC 1: Foundation complete"
git push origin v0.1.0
```

---

## CI/CD Pipeline Integration

### Automated Checks

**On Story Branch Push:**
- ✅ Branch name validation
- ✅ Lint check
- ✅ Type check
- ✅ Build check
- ✅ Merge conflict detection with epic branch

**On Epic Branch Push:**
- ✅ Full lint & type check
- ✅ Build application
- ✅ Run tests
- ✅ Security audit

**On Pull Request to Main:**
- ✅ All epic branch checks
- ✅ Lighthouse performance check
- ✅ Deploy preview notification

**On Push to Main:**
- ✅ All checks pass
- ✅ Deploy to production (Replit)
- ✅ Create deployment notification

---

## GitHub Actions Workflows

### 1. CI/CD Pipeline (`.github/workflows/ci.yml`)
- Runs on: `main`, `epic/**` branches and PRs
- Jobs: lint, build, test, lighthouse, security, deploy

### 2. Story Validation (`.github/workflows/story-validation.yml`)
- Runs on: `story/**` branches
- Jobs: validate branch name, quick checks, merge conflict detection

---

## Best Practices

### Do's ✅

- **Commit frequently** - Small, atomic commits
- **Write clear commit messages** - Format: "Task X.X.X: Description"
- **Test before merging** - Always run `npm run build` and `npm test`
- **Keep stories focused** - One story = one feature/fix
- **Merge to epic often** - Don't let story branches get stale
- **Use `--no-ff`** - Preserve merge history for epics
- **Tag releases** - Mark epic completions with version tags

### Don'ts ❌

- **Don't commit to main directly** - Always use epic → main workflow
- **Don't skip tests** - CI/CD will catch it anyway
- **Don't let story branches live long** - Merge to epic within 1-2 days
- **Don't merge broken code** - Fix linting/build errors first
- **Don't rewrite published history** - No force pushes to shared branches

---

## Common Commands

### Create Story Branch
```bash
git checkout epic/{number}-{name}
git checkout -b story/{epic}.{story}-{name}
```

### Merge Story to Epic
```bash
git checkout epic/{number}-{name}
git merge --no-ff story/{epic}.{story}-{name}
git push origin epic/{number}-{name}
```

### Merge Epic to Main
```bash
git checkout main
git pull origin main
git merge --no-ff epic/{number}-{name}
git push origin main
```

### Create Prototype Branch
```bash
git checkout story/{epic}.{story}-{name}
git checkout -b prototype/{component}-v{n}
```

### View Branch Tree
```bash
git log --oneline --graph --all --decorate
```

### Check Branch Status
```bash
# List all branches
git branch -a

# Show current branch
git branch --show-current

# Show branches merged to current
git branch --merged

# Show branches not merged
git branch --no-merged
```

---

## Merge Conflict Resolution

### If Conflicts Occur

1. **Identify conflicting files:**
```bash
git status
```

2. **Open conflicting files and resolve:**
```
<<<<<<< HEAD
Your changes
=======
Incoming changes
>>>>>>> story/1.1-initialize-nextjs
```

3. **Stage resolved files:**
```bash
git add path/to/resolved/file
```

4. **Complete merge:**
```bash
git commit
```

---

## GitHub Integration

### Pull Requests (Optional)

While the workflow supports direct branch merges, you can use PRs for:

**Story → Epic PRs:**
- Request code review before merging story
- Run CI checks automatically
- Document changes

**Epic → Main PRs:**
- Final review before production
- Verify all acceptance criteria
- Run full test suite

### Creating a PR

```bash
# Push your branch
git push origin story/1.1-initialize-nextjs

# Then create PR on GitHub:
# From: story/1.1-initialize-nextjs
# To: epic/1-foundation
```

---

## Troubleshooting

### Story Branch Out of Sync with Epic

```bash
# Update story with latest epic changes
git checkout story/1.1-initialize-nextjs
git fetch origin
git merge origin/epic/1-foundation
```

### Epic Branch Out of Sync with Main

```bash
# Update epic with latest main changes
git checkout epic/1-foundation
git fetch origin
git merge origin/main
```

### Accidentally Committed to Wrong Branch

```bash
# Move commit to correct branch
git log  # Find commit SHA

git checkout correct-branch
git cherry-pick {commit-sha}

git checkout wrong-branch
git reset --hard HEAD~1
```

---

## Visual Workflow Diagram

```
Story Development:
┌─────────────────────────────────────────────────────────┐
│ 1. Checkout epic branch                                 │
│    git checkout epic/1-foundation                       │
│                                                          │
│ 2. Create story branch                                  │
│    git checkout -b story/1.1-initialize-nextjs          │
│                                                          │
│ 3. Complete tasks (commit each)                         │
│    git commit -m "Task 1.1.1: ..."                      │
│    git commit -m "Task 1.1.2: ..."                      │
│                                                          │
│ 4. Test thoroughly                                      │
│    npm run lint && npm run build                        │
│                                                          │
│ 5. Merge to epic                                        │
│    git checkout epic/1-foundation                       │
│    git merge --no-ff story/1.1-initialize-nextjs        │
│    git push origin epic/1-foundation                    │
└─────────────────────────────────────────────────────────┘

Epic Completion:
┌─────────────────────────────────────────────────────────┐
│ 1. All stories merged to epic                           │
│                                                          │
│ 2. Verify epic acceptance criteria                      │
│    npm run lint && npm run build && npm test            │
│                                                          │
│ 3. Merge to main                                        │
│    git checkout main                                    │
│    git merge --no-ff epic/1-foundation                  │
│    git push origin main                                 │
│                                                          │
│ 4. Tag release (optional)                               │
│    git tag -a v0.1.0 -m "EPIC 1 complete"               │
│    git push origin v0.1.0                               │
└─────────────────────────────────────────────────────────┘
```

---

## Quick Reference Card

| Action | Command |
|--------|---------|
| **Start story** | `git checkout epic/X-name && git checkout -b story/X.Y-name` |
| **Commit task** | `git add . && git commit -m "Task X.Y.Z: description"` |
| **Test story** | `npm run lint && npm run build && npm test` |
| **Merge story** | `git checkout epic/X-name && git merge --no-ff story/X.Y-name` |
| **Merge epic** | `git checkout main && git merge --no-ff epic/X-name` |
| **Create prototype** | `git checkout -b prototype/component-vN` |
| **Push branch** | `git push origin branch-name` |
| **Update from remote** | `git fetch origin && git merge origin/branch-name` |
| **View history** | `git log --oneline --graph --all` |

---

**Status:** ✅ Complete  
**Next Step:** Begin EPIC 1 development

---

_Git workflow documentation for RKPi5 Marketing Website_  
_Created: November 11, 2025_  
_For: Scott E. Townsend_

