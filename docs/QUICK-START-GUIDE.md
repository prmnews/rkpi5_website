# RKPi5 Quick Start Guide

**Version:** 1.0  
**Last Updated:** November 11, 2025  
**For:** Instructors and System Administrators

---

## What You Need

### Hardware
- ✅ Raspberry Pi 5 (8GB recommended, 4GB minimum)
- ✅ microSD card (128GB+ recommended, Class 10 A2)
- ✅ microSD / USB/USB-C adapter (if required)
- ✅ USB drive (for installation scripts and content)
- ✅ Power supply (official Pi 5 power supply recommended)
- ✅ Computer with Internet connection for initial setup

### Software
- ✅ Raspberry Pi OS (Trixie 64-bit) - Download from raspberrypi.com
- ✅ Raspberry Pi Imager - For flashing OS to microSD
- ✅ Rapture Kit v3.1 content on USB device

---

## Step 1: Obtain Rapture Kit v3.1 USB Drive (5 minutes)

### Option A: Purchase Ready-Made USB Drive

Visit: **https://keychainrapturekit.org**

- Pre-configured USB drive with all content
- Ready to use immediately
- Recommended for fastest deployment

### Option B: Download Free Version

Visit: **https://rapturekit.org/download**

- Download Rapture Kit v3.1 package
- Follow instructions on download page to prepare your own USB drive
- Requires USB drive (32GB+ recommended)

---

## Step 2: Prepare Raspberry Pi (15 minutes)

### 2.1 Flash Operating System

**On your computer:**
1. Download and install **Raspberry Pi Imager**
2. Insert microSD card into computer
3. Open Raspberry Pi Imager
4. Choose OS: **Raspberry Pi OS (64-bit)** - Debian Trixie
5. Choose Storage: Your microSD card
6. Click **Settings** (gear icon):
   - Set hostname: `rkpi5`
   - Enable SSH (optional, for remote access)
   - Set username: `rk-pi5-user`
   - Set password: [your choice]
   - Configure WiFi: [your home network]
7. Click **Write** and wait for completion

### 2.2 Boot Raspberry Pi (5 minutes)

1. Insert microSD card into Raspberry Pi 5
2. Connect power supply
3. Wait 60 seconds for boot
4. Connect monitor and keyboard (or SSH if enabled)
5. Log in as `rk-pi5-user`

---

## Step 3: Prepare USB Drive (10 minutes)

### 3.1 Create Folder Structure

 - On your USB drive, create the _rkpi5 folder to your existing Rapture Kit USB drive
 - The following is what the completed folders should look like:

```
USB_Drive/
├── _rkpi5/
│   └── [Installation scripts go here]
├── Section 01 - Materials for the Rapture Kit Sender
├── Section 02 - First things first
├── Section 03 - Bibles
├── Section 04 - Books
├── Section 05 - Discipleship Study Materials
├── Section 06 - What Tribulation Saints Need to Know
├── Section 07 - Sermons and Teachings
├── Section 08 - Additional Articles
├── Section 09  Parnter Content
├── _Read Me First.pdf
├── index.html (root static website landing page)
```

### 3.2 Download RKPi5 install scripts

 - Open https://rkpi5.com/download
 - Click on the Download button
 - Create a new folder called rkpi5 in your downloads folder
 - Unzip rkpi5.zip to /downloads/rkpi5 (or a temp folder)
 
### 3.3 Copy Installation Scripts to the Rapture Kit USB drive

Copy these files from the RKPi5 repository to `USB_Drive/_rkpi5/`:

```
✅ install-rkpi5.sh
✅ 0-check-system.sh
✅ 1-install-core.sh
✅ 2-configure-hotspot.sh
✅ 3-configure-web.sh
✅ 4-finalize-golden-master.sh
✅ 5-validate-deployment.sh
✅ common.sh
```

#### Copy the install files to your USB drive
 
 - Select all in the /downloads/rkpi5 folder
 - Right click and choose the Copy command
 - Naigate to the Rapture Kit 3.1 USB and into the _rkpi5 folder
 - Right click and choose paste
 - Eject the USB drive

---

## Step 4: Run Installation (5 minutes)

### 4.1 Insert USB Drive into the USB port of your Raspberry Pi5 

1. Insert USB drive into Raspberry Pi
2. Wait for auto-mount (usually appears at `/media/rk-pi5-user/[USB_NAME]`)

### 4.2 Open Terminal

- **Desktop:** Click terminal icon in taskbar
- **Keyboard:** Press `Ctrl+Alt+T`
- **Menu:** Applications → Accessories → Terminal

### 4.3 Navigate to Installation Scripts

```bash
cd /media/rk-pi5-user/[USB_NAME]/_rkpi5/
```

**Replace `[USB_NAME]` with your actual USB drive name** (use tab completion or `ls /media/rk-pi5-user/` to find it)

### 4.4 Fix Line Endings (If Scripts Created on Windows)

```bash
dos2unix *.sh
```

**If dos2unix not installed:**
```bash
sudo apt install dos2unix -y
dos2unix *.sh
```

### 4.5 Make Scripts Executable

```bash
chmod +x *.sh
```

### 4.6 Run Installer

```bash
sudo ./install-rkpi5.sh
```

**When prompted:** `Proceed with setup on THIS device? (y/N):`  
**Type:** `y` and press Enter

### 4.7 Monitor Progress

The installer will display progress through 6 phases:

```
✅ [1/6] USB Drive Detection completed in 0s
✅ [2/6] Script Staging completed in 0s
✅ [3/6] Content Copying completed in 20s
✅ [4/6] Phase 0: System Validation completed in 1s
✅ [4/6] Phase 1: Core Package Installation completed in 18s
✅ [4/6] Phase 2: Hotspot Configuration completed in 2s
✅ [5/6] Phase 3: Web Server Configuration completed in 5s
✅ [5/6] Phase 4: Finalize Golden Master completed in 10s
✅ [6/6] Phase 5: Deployment Validation completed in 5s
🎉 RKPi5 v1.0 installation complete!
```

**Total time:** < 30 minutes

**Log file:** `~/Desktop/rkpi5-setup.log`

---

## Step 5: Reboot (1 minute)

```bash
sudo reboot
```

Wait 90 seconds for the Pi to reboot and activate the hotspot.

---

## Step 6: Test Connection (2 minutes)

### 6.1 Connect from Your Device

**On your phone, tablet, or laptop:**

1. **Scan for WiFi networks**
2. **Look for:** `rapture_kit`
3. **Connect** (no password required - open network)
4. **Wait 3-5 seconds**
5. **Captive portal popup should appear automatically**

### 6.2 Access Training Content

**Option A: Use Captive Popup (iOS/Android)**
- Popup appears automatically
- Click button to enter training content
- Browse and play media

**Note:** On iOS, rotation is locked in captive view. For full browser experience, see Option B.

**Option B: Use Full Browser (Recommended)**
- Dismiss captive popup (tap "Cancel" or "Done")
- Open Safari/Chrome/Edge
- Navigate to: `http://10.42.0.1/rapture_kit/`
- Full browser features available (rotation, downloads, etc.)

### 6.3 Test Media Playback

1. Navigate to content section
2. Click on a video file (MP4)
3. Verify playback starts within 2 seconds
4. Test seeking (jump forward/backward)
5. Play for 5-10 minutes to confirm stability

**Success:** Video plays smoothly without buffering or disconnections

---

## Installation Complete! 🎉

Your RKPi5 portable hotspot is now ready for use.

---

## Common Issues & Quick Fixes

### Issue: USB Drive Not Detected

**Symptom:** Installation says "No USB mount found"

**Fix:**
```bash
# Check if USB is mounted
ls /media/rk-pi5-user/

# If not mounted, try:
sudo mkdir -p /media/rk-pi5-user/[USB_NAME]
sudo mount /dev/sda1 /media/rk-pi5-user/[USB_NAME]
```

### Issue: Installation Fails with Permission Error

**Symptom:** "Permission denied" errors

**Fix:** Make sure you're running with `sudo`:
```bash
sudo ./install-rkpi5.sh
```

### Issue: WiFi Hotspot Not Broadcasting

**Symptom:** Can't see "rapture_kit" SSID

**Fix:**
```bash
# Check NetworkManager status
systemctl status NetworkManager

# Check connection
nmcli connection show

# Manually activate hotspot
nmcli connection up rapture_kit_hotspot

# Reboot if needed
sudo reboot
```

### Issue: Captive Portal Doesn't Appear

**Symptom:** Connected to WiFi but no popup

**Fix:**
- **iOS:** Open Safari and go to any website (e.g., apple.com)
- **Android:** Pull down notification shade, tap "Sign in to network"
- **Windows:** Open browser and go to any website
- **Manual:** Navigate directly to `http://10.42.0.1/`

### Issue: Videos Won't Play

**Symptom:** Video player shows error or won't load

**Fix:**
```bash
# Check nginx status
systemctl status nginx

# Check nginx configuration
sudo nginx -t

# Check file permissions
ls -la /var/www/rkpi5/

# Restart nginx
sudo systemctl restart nginx
```

---

## Creating Additional Units (Golden Master Duplication)

### To Create Multiple Identical Systems:

1. **Validate your current Pi** is working perfectly
2. **Create image:**
   ```bash
   # On another computer with SD card reader
   # Use Raspberry Pi Imager or dd command
   sudo dd if=/dev/sdX of=rkpi5-golden-master-v1.0.img bs=4M status=progress
   ```
3. **Write image to new microSD cards:**
   - Use Raspberry Pi Imager
   - Select "Use custom" image
   - Choose your .img file
   - Write to new microSD cards
4. **Test each clone** before deployment

**Time per clone:** ~30 minutes (imaging + verification)

---

## Support Resources

### Installation Logs

```bash
# View installation log
cat ~/Desktop/rkpi5-setup.log

# View nginx error log
sudo tail -50 /var/log/nginx/error.log

# View nginx access log
sudo tail -50 /var/log/nginx/access.log
```

### Service Status

```bash
# Check all services
systemctl status NetworkManager
systemctl status nginx

# Check network connections
nmcli connection show --active
nmcli device status

# Check WiFi clients
nmcli device wifi list
```

### Network Diagnostics

```bash
# Test DNS hijacking
dig @10.42.0.1 google.com
# Should return: 10.42.0.1

# Test nginx
curl http://10.42.0.1/health
# Should return: ok

# Test content
curl -I http://10.42.0.1/rapture_kit/
# Should return: 200 OK
```

---

## Technical Specifications

### Network

- **SSID:** rapture_kit
- **Security:** Open (no password)
- **IP Address:** 10.42.0.1
- **DHCP Range:** 10.42.0.10 - 10.42.0.250
- **DNS:** All domains resolve to 10.42.0.1

### Capacity

- **Estimated Users:** 5 to 15 concurrent streams (tested up to 8+)
- **Content Size:** Minimum 64GB (128GB recommended)
- **Video Format:** MP4 (720p @ 4Mbps recommended)
- **Audio Format:** MP3

### Performance

- **Captive Portal Popup:** <5 seconds
- **Video Start Time:** <2 seconds (cached)
- **Seek Latency:** <500ms
- **Installation Time:** insert microSD + power ON Pi5 - about 2 minutes

