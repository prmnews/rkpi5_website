# Documentation Alignment Analysis
**Date:** November 25, 2025  
**Analyst:** Dev Agent (Amelia)  
**User:** Scott

## Executive Summary

Comprehensive point-by-point analysis comparing `docs/QUICK-START-GUIDE.md` with website pages (`/product`, `/support`, `/pricing`). Identified **37 discrepancies** across network configuration, hardware specs, setup procedures, and messaging.

**Critical Finding:** QUICK-START-GUIDE describes DIY installation process while website now positions as informational configuration guide. Fundamental misalignment in purpose and audience.

---

## 1. Network Configuration Discrepancies

### SSID Name Mismatch

| Source | SSID Value | Location |
|--------|-----------|----------|
| **QUICK-START-GUIDE.md** | `rapture_kit` | Line 218, 294 |
| **Website (system-requirements.mdx)** | Not specified | N/A |
| **Website (first-time-setup.mdx)** | `RKPi5-XXXX` | Line 32 |
| **Website (quick-start.mdx)** | `RKPi5-XXXX` | Line 33 |

**Impact:** Users following quick-start guide will look for wrong SSID  
**Recommendation:** Standardize on single SSID format

### IP Address Mismatch

| Source | IP Address | Location |
|--------|-----------|----------|
| **QUICK-START-GUIDE.md** | `10.42.0.1` | Lines 235, 307, 387-395 |
| **Website (first-time-setup.mdx)** | `rkpi5.local` or `192.168.4.1` | Lines 42, 72 |

**Impact:** Network troubleshooting commands won't work  
**Recommendation:** Align on actual deployment IP scheme

### WiFi Security Mismatch

| Source | Security | Location |
|--------|----------|----------|
| **QUICK-START-GUIDE.md** | Open network (no password) | Line 219 |
| **Website (first-time-setup.mdx)** | Password protected | Lines 33-34, 47 |
| **Website (quick-start.mdx)** | Password on quick start card | Line 34 |

**Impact:** Security posture unclear to users  
**Recommendation:** Define actual security policy

---

## 2. Hardware Specifications Discrepancies

### Battery Capacity Mismatch

| Source | Battery Spec | Location |
|--------|-------------|----------|
| **QUICK-START-GUIDE.md** | Not specified (only runtime) | N/A |
| **Product Page** | 25,000 mAh | Line 80 |
| **system-requirements.mdx** | 20,000 mAh | Line 14 |

**Impact:** Conflicting specs reduce credibility  
**Recommendation:** Verify actual battery spec and standardize

### Storage Mismatch

| Source | Storage Spec | Location |
|--------|-------------|----------|
| **QUICK-START-GUIDE.md** | 2x 128GB microSD | Line 77 |
| **Product Page** | 2x 128GB microSD (SanDisk Extreme) | Line 77 |
| **system-requirements.mdx** | 256GB microSD (single card) | Line 13 |

**Impact:** Unclear if 1 or 2 cards used  
**Recommendation:** Clarify: 2x 128GB cards or 1x 256GB card?

### Solar Panel Wattage Mismatch

| Source | Solar Panel | Location |
|--------|-------------|----------|
| **QUICK-START-GUIDE.md** | 60W foldable solar panel | Line 229 |
| **Product Page** | Not specified | N/A |
| **Pricing Page (Field tier)** | 50W foldable solar panel | Line 85 |

**Impact:** Component sourcing confusion  
**Recommendation:** Verify actual wattage (50W or 60W?)

---

## 3. Setup Time Discrepancies

### Installation Duration Mismatch

| Source | Setup Time | Context | Location |
|--------|-----------|---------|----------|
| **QUICK-START-GUIDE.md** | ~30 minutes | Total installation time | Line 195 |
| **QUICK-START-GUIDE.md** | ~45 minutes | Hobbyist self-guided setup | N/A (implied) |
| **Product Page** | < 5 minutes | Hero stat bar | Line 39 |
| **Product Page** | < 5 minutes | Instant Setup feature | Line 175 |
| **Pricing Page (Hobbyist)** | ~45-minute setup | Feature list | Line 35 |
| **Pricing Page (Bare Bones)** | < 5 minutes | Feature list | Line 52 |

**Analysis:**
- QUICK-START-GUIDE: 30-45 min (DIY installation process)
- Product Page: < 5 min (pre-configured usage, not DIY build)
- Pricing Page: Mixed messaging (45 min for Hobbyist, 5 min for others)

**Impact:** Confusing expectations for users  
**Recommendation:** Clarify distinction between:
- DIY Build Time (for Hobbyist tier using install scripts)
- Setup Time (for pre-configured units - insert card & boot)

---

## 4. Content Library Discrepancies

### Content Size Consistency

| Source | Content Size | Location |
|--------|-------------|----------|
| **QUICK-START-GUIDE.md** | Not specified (references "Rapture Kit v3.1") | Line 22 |
| **Product Page** | 26GB+ | Lines 29, 36, 151 |
| **system-requirements.mdx** | 26GB+ | Line 23 |
| **Pricing Page** | 26GB+ | Multiple features |

**Status:** ✅ Generally aligned (26GB+)

### Content Details Consistency

| Source | Audio | Video | Location |
|--------|-------|-------|----------|
| **Product Page** | 130+ hours | 39+ hours | Lines 96, 99 |
| **system-requirements.mdx** | 130+ hours | 39+ hours | Lines 26-27 |

**Status:** ✅ Aligned

---

## 5. User Capacity Discrepancies

### Concurrent Users Mismatch

| Source | User Capacity | Location |
|--------|--------------|----------|
| **QUICK-START-GUIDE.md** | 5 to 15 concurrent (tested up to 8+) | Line 413 |
| **Product Page** | 15+ users simultaneously | Lines 30, 118, 157 |
| **system-requirements.mdx** | Up to 15 simultaneous | Line 17 |

**Impact:** Conservative estimate (5-15) vs. marketing claim (15+)  
**Recommendation:** Align on tested capacity with honest range

---

## 6. Target Audience & Purpose Misalignment

### Fundamental Purpose Mismatch

| Source | Target Audience | Purpose |
|--------|----------------|---------|
| **QUICK-START-GUIDE.md** | "Instructors and System Administrators" | DIY installation guide for building RKPi5 from scratch |
| **Website /product** | General consumers | Product overview and benefits |
| **Website /pricing** | DIY builders | Configuration options and cost estimates |
| **Website /support** | End users | Troubleshooting and usage help |

**Critical Issue:** QUICK-START-GUIDE is a **BUILD guide** (install scripts, OS flashing, terminal commands) while website support docs are **USAGE guides** (how to use a pre-built unit).

**Impact:** Two completely different workflows:
1. **Build Workflow (QUICK-START-GUIDE):** Flash OS → Run install scripts → Configure → Test
2. **Usage Workflow (Website):** Power on → Connect WiFi → Access portal

---

## 7. Page-by-Page Alignment Analysis

### 7.1 Product Page (`/product`) Alignment

**Website Claims:**
- 26GB+ content ✅ Aligned with QUICK-START-GUIDE
- 15+ concurrent users ⚠️ Guide says "5 to 15, tested up to 8+"
- 6-hour battery ✅ Aligned with QUICK-START-GUIDE (implied)
- < 5 min setup time ❌ Guide shows 30-45 min installation

**Hardware Specs:**
- Processor: Pi 5 (8GB) ✅ Aligned
- Storage: 2x 128GB microSD ⚠️ system-requirements.mdx says 256GB single
- Battery: 25,000 mAh ❌ system-requirements.mdx says 20,000 mAh
- Display: Optional 5" touchscreen ✅ Aligned (Field Kit)

**Network Specs:**
- Concurrent Users: 15+ ⚠️ Guide more conservative (5-15)
- Range: 50-100ft ⚠️ Guide says ~100ft, system-requirements says ~100ft (aligned)
- Portal: Auto-popup ✅ Aligned
- Platforms: iOS, Android, Windows, macOS ✅ Aligned

**Discrepancies on Product Page:** 5 issues
1. Setup time claim (< 5 min vs 30-45 min)
2. User capacity overclaim (15+ vs tested 8+)
3. Battery spec inconsistency (25k vs 20k mAh)
4. Storage format (2x 128GB vs 1x 256GB)
5. Missing SSID specification

**Recommendation:** Update product page stats to match tested reality

---

### 7.2 Pricing Page (`/pricing`) Alignment

**Current State:** Shows 4 tiers with fixed prices as estimates

**Alignment Issues:**

#### Hobbyist Tier
| Website Claims | QUICK-START-GUIDE Reality | Aligned? |
|----------------|---------------------------|----------|
| FREE | FREE (download scripts) | ✅ Yes |
| ~45-minute setup | 30-45 min installation | ✅ Yes |
| Requires Pi 5 (8GB+) | Requires Pi 5 (8GB recommended, 4GB min) | ⚠️ Partial |
| Complete Rapture Kit content | Rapture Kit v3.1 on USB | ✅ Yes |

**Issue:** Website says "8GB+" required but QUICK-START-GUIDE allows 4GB minimum

#### Bare Bones Tier
| Website Claims | QUICK-START-GUIDE Reality | Aligned? |
|----------------|---------------------------|----------|
| Price: $99 | Not addressed in guide | N/A |
| 2× 128GB microSD | Matches guide | ✅ Yes |
| < 5 minutes setup | Installation takes 30 min | ❌ No |

**Issue:** Setup time confusion - guide shows full install process, not "insert card and boot"

#### Solo Tier
| Website Claims | Component Match? |
|----------------|------------------|
| Pi 5 (8GB) | ✅ Matches guide requirement |
| 25,000 mAh battery | ❌ Conflicts with system-requirements (20k) |
| 2× 128GB microSD | ✅ Matches guide |

#### Field Tier
| Website Claims | Component Match? |
|----------------|------------------|
| 50W solar panel | ❌ QUICK-START-GUIDE about page says 60W |
| 5" display | ✅ Matches |
| 25,000 mAh battery | ❌ Conflicts with system-requirements (20k) |

**Discrepancies on Pricing Page:** 7 issues
1. RAM requirement (8GB+ vs 4GB min acceptable)
2. Setup time clarity (DIY install vs pre-built usage)
3. Battery capacity (25k vs 20k mAh)
4. Solar panel wattage (50W vs 60W)
5. Missing price ranges (shows fixed prices, not ranges)
6. No BOM details (per refactor plan requirement)
7. No build difficulty indicators (per refactor plan)

**Recommendation:** Update pricing page to show:
- Price ranges instead of fixed prices
- Separate "Build Time" vs "Setup Time"
- Correct battery/solar specs
- Add BOM expandable sections (per refactor plan)

---

### 7.3 Support Pages (`/support/*`) Alignment

#### Quick Start Guide Mismatch

| QUICK-START-GUIDE.md | Website quick-start.mdx | Aligned? |
|----------------------|-------------------------|----------|
| **Audience:** System administrators | **Audience:** End users | ❌ No |
| **Process:** DIY installation from scratch | **Process:** Using pre-built unit | ❌ No |
| **Steps:** Flash OS → Run scripts → Configure | **Steps:** Power on → Connect WiFi → Access portal | ❌ No |
| **Duration:** 30-45 minutes | **Duration:** < 5 minutes | ❌ No |
| **Technical:** Terminal commands, sudo access | **Technical:** No IT skills needed | ❌ No |

**Critical Issue:** These are **two completely different guides** for two different workflows.

**QUICK-START-GUIDE.md covers:**
- Step 1: Obtain Rapture Kit USB
- Step 2: Prepare Raspberry Pi (flash OS with Raspberry Pi Imager)
- Step 3: Prepare USB Drive (folder structure)
- Step 4: Run Installation (terminal commands, chmod, sudo)
- Step 5: Reboot
- Step 6: Test Connection

**Website quick-start.mdx covers:**
- Power on pre-built device
- Connect to WiFi
- Access web portal
- Basic usage

**Recommendation:** Rename QUICK-START-GUIDE.md to `DIY-BUILD-GUIDE.md` and create separate true quick-start for pre-built units

#### System Requirements Mismatch

| QUICK-START-GUIDE.md | Website system-requirements.mdx | Aligned? |
|----------------------|--------------------------------|----------|
| Pi 5 (8GB recommended, 4GB min) | Pi 5 (8GB LPDDR4X) | ⚠️ Partial |
| 128GB+ microSD (Class 10 A2) | 256GB microSD | ❌ No |
| 20,000mAh battery | 20,000mAh battery | ✅ Yes |
| No display mentioned | 5" touchscreen optional | ⚠️ Missing |

**Issue:** Storage format conflict (128GB+ vs 256GB single card)

#### First Time Setup Mismatch

**QUICK-START-GUIDE.md Process:**
1. Flash OS with Raspberry Pi Imager (15 min)
2. Boot Pi (5 min)
3. Prepare USB drive (10 min)
4. Run installation scripts (5 min)
5. Reboot (1 min)
6. Test connection (2 min)

**Website first-time-setup.mdx Process:**
1. Power on device (30-45 sec)
2. Connect to WiFi (2 min)
3. Access admin portal (1 min)
4. Initial configuration (2 min)

**Gap:** 38-minute difference in setup time  
**Root Cause:** One is BUILD process, other is USE process

---

## 8. Technical Specification Conflicts

### Network Specifications

| Spec | QUICK-START-GUIDE | Product Page | system-requirements.mdx |
|------|-------------------|--------------|-------------------------|
| **SSID** | `rapture_kit` | Not specified | `RKPi5-XXXX` |
| **Security** | Open | Not specified | Password protected |
| **IP Address** | 10.42.0.1 | Not specified | 192.168.4.1 or rkpi5.local |
| **DHCP Range** | 10.42.0.10 - 10.42.0.250 | Not specified | Not specified |
| **DNS** | All domains → 10.42.0.1 | Not specified | Not specified |
| **WiFi Standard** | Not specified | Not specified | 802.11ac dual-band |
| **Range** | Not specified | 50-100ft | ~100 feet |

**Issues:** 8 network spec conflicts

### Hardware Specifications

| Component | QUICK-START-GUIDE | Product Page | system-requirements.mdx |
|-----------|-------------------|--------------|-------------------------|
| **Processor** | Pi 5 | Pi 5 (8GB RAM) | Pi 5 (Quad-core ARM Cortex-A76) |
| **RAM** | 8GB recommended, 4GB min | 8GB | 8GB LPDDR4X |
| **Storage** | 128GB+ Class 10 A2 | 2× 128GB SanDisk Extreme | 256GB microSD |
| **Battery** | Not specified | 25,000 mAh | 20,000 mAh |
| **Display** | Optional 5" (Field) | Optional 5" (Field) | Not mentioned |
| **Solar** | 60W | Not specified | Not mentioned |

**Issues:** 6 hardware spec conflicts

---

## 9. Content Access URL Misalignment

### Access URLs

| Source | URL Pattern | Location |
|--------|------------|----------|
| **QUICK-START-GUIDE.md** | `http://10.42.0.1/rapture_kit/` | Line 235 |
| **QUICK-START-GUIDE.md** | `http://10.42.0.1/` | Line 308 |
| **Website first-time-setup** | `http://rkpi5.local` | Line 42 |
| **Website first-time-setup** | `http://192.168.4.1` | Line 72 |
| **Website quick-start** | `http://rkpi5.local` | Line 28 |

**Impact:** Users won't know correct URL  
**Recommendation:** Document all valid access methods

---

## 10. Installation Scripts Reference Mismatch

### Script References

**QUICK-START-GUIDE.md lists 8 installation scripts:**
1. `install-rkpi5.sh` (main installer)
2. `0-check-system.sh`
3. `1-install-core.sh`
4. `2-configure-hotspot.sh`
5. `3-configure-web.sh`
6. `4-finalize-golden-master.sh`
7. `5-validate-deployment.sh`
8. `common.sh`

**Website References:**
- `/pricing` page: "Build scripts are FREE to download"
- No specific script names mentioned
- No download links provided
- No script documentation

**Gap:** Scripts referenced but not documented on website  
**Recommendation:** Create `/downloads` page or link to GitHub repo

---

## 11. Configuration Variants Clarity

### BOM Variants (from Refactor Plan)

**Per refactor plan discussion:**
- **Variant A:** Hobbyist, Bare Bones, Solo (same basic Pi build config)
- **Variant B:** Field (different case design + solar panel)

**Documentation Status:**
- ❌ Not documented in QUICK-START-GUIDE
- ❌ Not documented on website
- ❌ No BOM details provided
- ❌ No build difficulty indicators

**Recommendation:** Create dedicated build guide pages for each variant

---

## 12. Terminology Consistency

### Inconsistent Terms Across Docs

| Concept | QUICK-START-GUIDE | Website | Recommendation |
|---------|-------------------|---------|----------------|
| WiFi Network | "rapture_kit" | "RKPi5-XXXX" | Standardize SSID |
| Access Method | IP address | .local domain | Document both |
| Setup Process | Installation | Setup | Distinguish Build vs Use |
| Target User | System Admin | End User | Create separate docs |
| Content Source | USB Drive | Pre-loaded | Clarify distribution |
| Price Point | Not mentioned | $99-$499 estimates | Add to build guides |

---

## 13. Missing Alignment Points

### Website Has, Guide Doesn't:

1. **Pricing information** - No cost estimates in QUICK-START-GUIDE
2. **4-tier structure** - Guide doesn't explain Hobbyist/Bare Bones/Solo/Field
3. **Marketing messaging** - Guide is purely technical
4. **Comparison tables** - RKPi5 vs USB vs DIY
5. **Use case scenarios** - Not in guide
6. **Feature benefits** - Guide focuses on "how", not "why"
7. **Enterprise/Church solutions** - Not mentioned in guide
8. **Waitlist concept** - Not in guide (pre-built vs DIY)

### Guide Has, Website Doesn't:

1. **Installation script details** - 8 scripts with specific phases
2. **OS preparation** - Raspberry Pi Imager instructions
3. **Terminal commands** - Actual commands to run
4. **Troubleshooting commands** - `systemctl`, `nmcli`, `curl` diagnostics
5. **Folder structure** - USB drive organization
6. **Log file locations** - `~/Desktop/rkpi5-setup.log`
7. **Service management** - NetworkManager, nginx status checks
8. **Golden master duplication** - Creating multiple identical units
9. **Performance metrics** - Specific timing benchmarks
10. **Download source** - https://rkpi5.com/download, https://keychainrapturekit.org

---

## 14. Critical Discrepancies Summary

### HIGH PRIORITY (User-Facing Conflicts)

| # | Issue | Impact | Files Affected |
|---|-------|--------|----------------|
| 1 | SSID mismatch (`rapture_kit` vs `RKPi5-XXXX`) | Users can't find network | 3 files |
| 2 | Setup time (30-45 min vs < 5 min) | Wrong expectations | 4 files |
| 3 | IP address (10.42.0.1 vs 192.168.4.1) | Can't access portal | 3 files |
| 4 | WiFi security (open vs password) | Security confusion | 2 files |
| 5 | User capacity (5-15 vs 15+) | Overpromise risk | 3 files |
| 6 | Battery capacity (25k vs 20k mAh) | Wrong specs | 2 files |
| 7 | Storage format (2x128GB vs 1x256GB) | Hardware confusion | 3 files |
| 8 | Solar panel (50W vs 60W) | Component mismatch | 2 files |

### MEDIUM PRIORITY (Messaging Conflicts)

| # | Issue | Impact | Files Affected |
|---|-------|--------|----------------|
| 9 | Build vs Use workflow confusion | Wrong documentation | All support docs |
| 10 | Target audience (admin vs consumer) | Documentation gaps | 2 files |
| 11 | No download links on website | Can't get scripts | Pricing page |
| 12 | No BOM details provided | Can't build DIY | Pricing page |
| 13 | RAM requirement (8GB+ vs 4GB min) | Hardware overclaim | 2 files |

### LOW PRIORITY (Enhancement Opportunities)

| # | Issue | Impact | Recommendation |
|---|-------|--------|----------------|
| 14 | No build difficulty indicators | User uncertainty | Add to pricing cards |
| 15 | No price ranges shown | Fixed vs variable costs | Show $80-$120 format |
| 16 | Missing script documentation | Developer confusion | Create /developers page |
| 17 | No golden master guide | Can't duplicate units | Add to advanced docs |

---

## 15. Recommended Actions

### Immediate (Critical Path)

1. **Standardize Network Config**
   - Choose: `rapture_kit` or `RKPi5-XXXX` (recommend `rapture_kit`)
   - Update all website references
   - Document alternate access methods

2. **Clarify Setup Time**
   - Product page: "< 5 min setup (pre-built)" vs "30-45 min build (DIY)"
   - Add tooltip or expandable section explaining difference
   - Update hero stats to reflect actual tested times

3. **Fix Hardware Specs**
   - Battery: Verify actual spec (20k or 25k mAh)
   - Storage: Clarify 2× 128GB vs 1× 256GB
   - Solar: Confirm 50W or 60W
   - Update ALL pages with consistent specs

4. **Align User Capacity**
   - Use conservative claim: "5-15 concurrent users (tested up to 8+)"
   - Remove "15+" overpromise
   - Add caveat about video streaming vs browsing

### Short-Term (Align Documentation)

5. **Rename QUICK-START-GUIDE.md**
   - Current: Confusing (it's actually a BUILD guide)
   - Rename to: `DIY-BUILD-GUIDE.md`
   - Create new true `QUICK-START-GUIDE.md` for pre-built units

6. **Create Missing Documentation**
   - `/downloads` page with links to build scripts
   - BOM details for each tier (Variant A and B)
   - Build difficulty and time estimates
   - Component sourcing links (Amazon, Adafruit)

7. **Update Website Support Docs**
   - Align quick-start.mdx with actual pre-built workflow
   - Align first-time-setup.mdx with reality
   - Fix system-requirements.mdx conflicts
   - Update network troubleshooting with correct IPs

### Long-Term (Strategic Alignment)

8. **Create Dual Documentation Tracks**
   - **Track 1: DIY Builders** → Link to build guides, scripts, BOMs
   - **Track 2: Pre-Built Users** → Quick start, usage, troubleshooting

9. **Add Downloads Section**
   - Build scripts (.sh files)
   - Documentation PDFs
   - BOM spreadsheets
   - Golden master creation guide

10. **Pricing Page Enhancements** (per refactor plan)
    - Convert prices to ranges ($80-$120, $280-$320, $450-$550)
    - Add "Software: FREE" callout
    - Add expandable BOM sections
    - Add build difficulty badges
    - Add setup time estimates

---

## 16. Detailed Change Requirements by Page

### Product Page Changes Required

**File:** `src/app/(public)/product/page.tsx`

**Line 30:** "Setup in less than 5 minutes"  
→ Change to: "Pre-configured units: < 5 min | DIY builds: 30-45 min"

**Line 39:** Setup Time stat: "<5min"  
→ Add tooltip: "Pre-built units. DIY installation: 30-45 min"

**Line 80:** Battery: "25,000 mAh (6-hour runtime)"  
→ Verify spec, likely should be: "20,000 mAh (6-hour runtime)"

**Line 77:** Storage: "2x 128GB microSD (SanDisk Extreme)"  
→ Verify: Is this 2 cards or should be 1x 256GB?

**Line 118:** "15+ simultaneous"  
→ Change to: "5-15 concurrent users (tested up to 8 streaming)"

**Missing:** SSID specification in Network Capabilities section  
→ Add: "SSID: rapture_kit (open network)"

**Missing:** Access URL information  
→ Add: "Access URL: http://10.42.0.1/rapture_kit/"

---

### Pricing Page Changes Required

**File:** `src/app/(public)/pricing/page.tsx`

**Line 30:** "FREE"  
→ Keep as-is ✅

**Line 34:** "Requires Raspberry Pi 5 (8GB+)"  
→ Change to: "Requires Raspberry Pi 5 (4GB min, 8GB recommended)"

**Lines 46, 62, 81:** Fixed prices ($99, $299, $499)  
→ Change to price ranges per refactor plan:
  - Bare Bones: "~$80-$120"
  - Solo: "~$280-$320"
  - Field: "~$450-$550"

**Line 52:** "Insert card, boot in < 5 minutes"  
→ Clarify: "Pre-configured card: < 5 min | DIY build: 30 min"

**Line 85:** "50W foldable solar panel"  
→ Verify: Should be 60W per QUICK-START-GUIDE about section?

**Missing:** Software cost callout  
→ Add to ALL cards: "Software: FREE | Build scripts: FREE"

**Missing:** BOM expandable sections (per refactor plan)  
→ Add `<details>` with component breakdown

**Missing:** Build difficulty indicators  
→ Add badges: Hobbyist (Intermediate), Bare Bones (Beginner), Solo (Beginner), Field (Intermediate)

**Missing:** Setup time estimates  
→ Add: Hobbyist (45 min), Bare Bones (30 min), Solo (2-3 hrs), Field (3-4 hrs)

---

### Support Pages Changes Required

#### File: `content/support/quick-start.mdx`

**Entire file needs rewrite** - Currently shows placeholder/wrong workflow

Should describe:
1. Power on pre-built device
2. Wait for green LED (30-45 sec boot)
3. Connect to WiFi SSID `rapture_kit` (open network)
4. Access portal (auto-popup or manual http://10.42.0.1/)
5. Browse content

**References to align:**
- Remove: `RKPi5-XXXX` SSID
- Remove: Password references
- Remove: Admin portal references
- Add: Actual network name `rapture_kit`
- Add: Actual IP `10.42.0.1`
- Add: Alternative access via `/rapture_kit/` path

#### File: `content/support/first-time-setup.mdx`

**Major rewrite required** - Wrong workflow described

Current issues:
- Line 32: Wrong SSID (`RKPi5-XXXX` vs `rapture_kit`)
- Lines 33-34: References password (should be open network)
- Line 42: Wrong URL (`rkpi5.local/admin` vs `10.42.0.1/rapture_kit/`)
- Lines 52-56: Admin configuration not applicable
- Line 72: Wrong fallback IP (192.168.4.1 vs 10.42.0.1)

Should describe:
1. Unbox and charge device
2. Power on and wait for boot
3. Connect to `rapture_kit` WiFi (open, no password)
4. Wait for captive portal popup OR manually navigate to `http://10.42.0.1/`
5. Browse content sections
6. Test video/audio playback

#### File: `content/support/system-requirements.mdx`

**Specifications to fix:**

- Line 13: "256GB microSD" → Should be "2× 128GB microSD cards"
- Line 14: "20,000mAh" → Verify vs Product page claim of 25,000mAh
- Line 17: "Up to 15 simultaneous" → Should be "5-15 concurrent (tested up to 8 streaming)"

**Missing specifications to add:**
- SSID: `rapture_kit`
- IP Address: 10.42.0.1
- DHCP Range: 10.42.0.10 - 10.42.0.250
- DNS: All domains resolve to 10.42.0.1 (captive portal)
- Access URL: http://10.42.0.1/rapture_kit/

---

## 17. Refactor Plan Alignment Gaps

**Per your refactor plan, these items are still pending:**

### Not Yet Implemented:

1. ✅ Feature flag `SHOW_WAITLIST` - DONE
2. ❌ **Price ranges** (still showing fixed prices: $99, $299, $499)
3. ❌ **Build difficulty indicators** (Beginner/Intermediate/Advanced)
4. ❌ **Setup time estimates** (30 min, 2-3 hrs, 3-4 hrs)
5. ❌ **BOM expandable sections** with component details
6. ❌ **Software: FREE callout** on pricing cards
7. ❌ **BOM Variant badges** (A vs B)
8. ❌ **Component cost breakdown** in expandable sections
9. ❌ **Build guide links** to .sh scripts
10. ❌ **New build-config.ts** file (replacement for product-config.ts)

**Gap Analysis:** Pricing page updates were only partially completed. The refactor plan specified extensive changes to pricing cards that haven't been implemented yet.

---

## 18. Data Integrity Issues

### Inconsistent Data Across Sources

**Battery Capacity:**
- Product page: 25,000 mAh
- system-requirements.mdx: 20,000 mAh
- QUICK-START-GUIDE: Not specified
- **Truth Source?** Unknown

**Storage Configuration:**
- Product page: 2× 128GB
- system-requirements.mdx: 1× 256GB
- QUICK-START-GUIDE: 128GB+ (implies at least one card)
- **Truth Source?** Unknown

**Solar Panel Wattage:**
- Pricing page Field tier: 50W
- QUICK-START-GUIDE about section: 60W
- **Truth Source?** Unknown

**User Capacity:**
- Marketing claim: 15+ simultaneous
- Technical reality: 5-15 concurrent, tested up to 8+
- **Truth Source?** QUICK-START-GUIDE (line 413)

**RAM Requirement:**
- Product/Pricing pages: 8GB+
- QUICK-START-GUIDE: 4GB minimum, 8GB recommended
- **Truth Source?** QUICK-START-GUIDE (line 12)

---

## 19. Action Plan Summary

### Phase 1: Establish Truth Sources (User Input Required)

**Scott, please confirm actual specifications:**

1. **SSID:** `rapture_kit` or `RKPi5-XXXX`?
2. **WiFi Security:** Open network or password protected?
3. **IP Address:** 10.42.0.1 or 192.168.4.1?
4. **Battery:** 20,000 mAh or 25,000 mAh?
5. **Storage:** 2× 128GB cards or 1× 256GB card?
6. **Solar Panel:** 50W or 60W?
7. **User Capacity:** Conservative (5-15) or optimistic (15+)?
8. **RAM Requirement:** 4GB minimum or 8GB minimum?

### Phase 2: Website Updates (After Truth Established)

#### Product Page Updates:
- [ ] Fix setup time messaging (distinguish DIY vs pre-built)
- [ ] Update user capacity to tested reality
- [ ] Correct battery specification
- [ ] Clarify storage configuration
- [ ] Add SSID and IP address to Network Capabilities
- [ ] Add tooltip/note explaining build vs usage time

#### Pricing Page Updates:
- [ ] Convert fixed prices to ranges ($80-$120, $280-$320, $450-$550)
- [ ] Add "Software: FREE" prominent callout
- [ ] Add build difficulty badges (Beginner/Intermediate/Advanced)
- [ ] Add setup time estimates (30 min, 2-3 hrs, 3-4 hrs)
- [ ] Add expandable BOM sections with component lists
- [ ] Add BOM variant indicators (A or B)
- [ ] Add links to build scripts
- [ ] Update RAM requirement to "4GB min, 8GB recommended"
- [ ] Correct solar panel wattage
- [ ] Fix "Estimate FAQs" title

#### Support Pages Updates:
- [ ] Rewrite `quick-start.mdx` for pre-built user workflow
- [ ] Rewrite `first-time-setup.mdx` with correct network info
- [ ] Update `system-requirements.mdx` with correct specs
- [ ] Fix all SSID references
- [ ] Fix all IP address references
- [ ] Fix all battery/storage specs
- [ ] Add network troubleshooting with correct commands

#### New Pages Required:
- [ ] Create `/downloads` page with links to build scripts
- [ ] Create DIY build guide (rename QUICK-START-GUIDE.md)
- [ ] Create BOM detail pages (Variant A and B)
- [ ] Create golden master duplication guide

### Phase 3: QUICK-START-GUIDE.md Updates

- [ ] Rename to `DIY-BUILD-GUIDE.md` or `INSTALLATION-GUIDE.md`
- [ ] Add cost estimates from pricing page
- [ ] Add tier information (Hobbyist/Bare Bones/Solo/Field)
- [ ] Reference website for detailed BOM and pricing
- [ ] Add links to /downloads page

### Phase 4: Create New Quick Start for End Users

- [ ] Create simplified quick-start for pre-built units
- [ ] 5-minute workflow (power on → connect → use)
- [ ] Match website support docs
- [ ] Reference DIY build guide for advanced users

---

## 20. Files Requiring Updates

### Website Files (10 files):

1. `src/app/(public)/product/page.tsx` - Fix specs and setup time
2. `src/app/(public)/pricing/page.tsx` - Price ranges, BOM, difficulty
3. `content/support/quick-start.mdx` - Complete rewrite
4. `content/support/first-time-setup.mdx` - Network config fixes
5. `content/support/system-requirements.mdx` - Spec corrections
6. `content/support/connection-issues.mdx` - IP address fixes
7. `content/support/pricing-faqs.mdx` - Update title to "Estimate FAQs"
8. `src/components/pricing/pricing-card.tsx` - Add BOM expansion, difficulty badges
9. `src/components/pricing/feature-matrix.tsx` - Verify specs
10. `src/app/(public)/sitemap/page.tsx` - Update doc links

### Documentation Files (2 files):

1. `docs/QUICK-START-GUIDE.md` - Rename to DIY-BUILD-GUIDE.md
2. Create new `docs/QUICK-START-GUIDE.md` for pre-built users

### New Files Required (4+ files):

1. `src/app/(public)/downloads/page.tsx` - Build scripts download page
2. `src/lib/build-config.ts` - New config structure (per refactor plan)
3. `content/support/diy-build-guide.mdx` - Web version of build guide
4. `content/support/bom-details.mdx` - Bill of materials details

---

## 21. Estimated Effort

**Analysis Complete:** ✅  
**Truth Source Verification:** Pending user input  
**Implementation Effort:**

- **Phase 1 (Spec Verification):** 15 minutes (user input)
- **Phase 2 (Website Updates):** 2-3 hours
  - Product page: 30 min
  - Pricing page: 60 min (BOM sections, ranges, badges)
  - Support pages: 45 min (rewrites)
  - New pages: 30 min
- **Phase 3 (Doc Updates):** 30 minutes
- **Phase 4 (New Quick Start):** 30 minutes

**Total:** ~4 hours after specs confirmed

---

## 22. Risk Assessment

### High Risk:
- **Spec conflicts reduce credibility** - Users see inconsistent info
- **Wrong network config wastes support time** - Users can't connect
- **Setup time mismatch creates frustration** - Wrong expectations

### Medium Risk:
- **Missing BOM details blocks DIY builders** - Can't execute
- **No download links blocks access** - Can't get scripts
- **Dual workflow confusion** - Users don't know which guide to follow

### Low Risk:
- **Terminology variations** - Minor confusion
- **Missing advanced features** - Power users affected

---

## 23. Next Steps

**IMMEDIATE:** Scott, please review this analysis and provide:

1. Confirmed specifications for all conflicts listed in Section 19
2. Decision on SSID naming convention
3. Decision on security posture (open vs password-protected)
4. Approval to proceed with website alignment updates

**AFTER CONFIRMATION:**

1. Update all website pages with correct specs
2. Implement pending refactor plan items (price ranges, BOM, difficulty)
3. Rewrite support documentation for clarity
4. Create downloads page and build guides
5. Rename and restructure QUICK-START-GUIDE.md

---

## Appendix A: Cross-Reference Matrix

| Specification | QUICK-START-GUIDE | Product Page | Pricing Page | system-requirements.mdx | Truth? |
|---------------|-------------------|--------------|--------------|-------------------------|--------|
| SSID | rapture_kit | - | - | RKPi5-XXXX | TBD |
| WiFi Security | Open | - | - | Password | TBD |
| IP Address | 10.42.0.1 | - | - | 192.168.4.1 | TBD |
| Battery | - | 25k mAh | - | 20k mAh | TBD |
| Storage | 128GB+ | 2×128GB | - | 1×256GB | TBD |
| Solar | 60W | - | 50W | - | TBD |
| Users | 5-15 (8+ tested) | 15+ | - | Up to 15 | TBD |
| RAM | 4GB min, 8GB rec | 8GB | 8GB+ | 8GB | TBD |
| Setup Time | 30-45 min | < 5 min | Mixed | - | TBD |

---

## Appendix B: URL Patterns Used

**QUICK-START-GUIDE.md:**
- Primary: `http://10.42.0.1/rapture_kit/`
- Root: `http://10.42.0.1/`
- Health check: `http://10.42.0.1/health`

**Website Support Docs:**
- Primary: `http://rkpi5.local`
- Admin: `http://rkpi5.local/admin`
- Fallback: `http://192.168.4.1`

**Actual Implementation?** Unknown - needs verification

---

## Conclusion

The QUICK-START-GUIDE.md and website are describing **two different products/workflows**:

1. **QUICK-START-GUIDE:** DIY installation process for system administrators
2. **Website:** Usage guide for pre-built consumer units

**Resolution Strategy:** Create dual documentation tracks:
- **DIY Track:** Build guides, scripts, BOM, installation (for Hobbyist tier)
- **Consumer Track:** Quick start, usage, troubleshooting (for Bare Bones/Solo/Field)

**Critical Path:** Get spec confirmations from Scott, then execute systematic alignment across all 14+ affected files.

---

**STATUS:** Analysis complete. Awaiting user confirmation on specifications before proceeding with alignment implementation.

