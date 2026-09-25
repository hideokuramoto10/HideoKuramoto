# 📸 Manual Screenshot Guide

Since automated screenshot tools have installation issues, follow this simple manual process:

---

## 🎯 Step-by-Step Instructions

### **1. Take Screenshots**

#### Project 1: Amazoning
1. Open: https://amazoning.onrender.com/
2. ⏱️ **Wait 5 minutes** for the page to fully load
3. Press `Win + Shift + S` (or use Snipping Tool)
4. Capture the **hero section** (top part of the page)
5. Save as: `amazoning-hero.png` to your Desktop

#### Project 2: Kuraudia Holdings
1. Open: https://www.kuraudia.holdings/
2. ⏱️ **Wait 5 minutes** for the page to fully load
3. Press `Win + Shift + S`
4. Capture the **hero section**
5. Save as: `kuraudia-hero.png` to your Desktop

#### Project 3: HK Wedding
1. Open: https://www.hk-wedding.jp/
2. ⏱️ **Wait 5 minutes** for the page to fully load
3. Press `Win + Shift + S`
4. Capture the **hero section**
5. Save as: `hk-wedding-hero.png` to your Desktop

---

### **2. Move Screenshots to Project**

Create the folder and move your images:

```powershell
# Create the directory
New-Item -ItemType Directory -Force -Path "C:\project\porfolio\public\images\projects"

# Move screenshots from Desktop (adjust path if needed)
Move-Item "$env:USERPROFILE\Desktop\amazoning-hero.png" "C:\project\porfolio\public\images\projects\amazoning-hero.png"
Move-Item "$env:USERPROFILE\Desktop\kuraudia-hero.png" "C:\project\porfolio\public\images\projects\kuraudia-hero.png"
Move-Item "$env:USERPROFILE\Desktop\hk-wedding-hero.png" "C:\project\porfolio\public\images\projects\hk-wedding-hero.png"
```

**OR** manually:
1. Create folder: `C:\project\porfolio\public\images\projects`
2. Copy the 3 PNG files into that folder

---

### **3. Update Portfolio Code**

Run this command to update your portfolio:

```bash
npm run update-images
```

This will automatically update `data/index.tsx` to use your screenshots.

---

### **4. View Your Portfolio**

```bash
npm run dev
```

Open http://localhost:3000 and check the Works section!

---

## ✅ Expected File Structure

```
C:\project\porfolio\
├── public\
│   └── images\
│       └── projects\
│           ├── amazoning-hero.png
│           ├── kuraudia-hero.png
│           └── hk-wedding-hero.png
└── data\
    └── index.tsx (will be updated automatically)
```

---

## 🔧 Alternative: Use Windows Snipping Tool

1. Press `Win + Shift + S` or search for "Snipping Tool"
2. Select "Rectangular Snip"
3. Drag to select the hero section
4. Click "Save As" and save with the correct filename

---

## 💡 Tips for Better Screenshots

- ✅ Use Full HD resolution (1920x1080) for best quality
- ✅ Capture only the hero section (top visible part)
- ✅ Make sure text and images are fully loaded
- ✅ Save as PNG format (not JPG) for better quality

---

**Need help?** The screenshots should be approximately 1920x400 to 1920x800 pixels (full width, hero section height).
