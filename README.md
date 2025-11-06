# Car Inventory Web Application

## Sprint 1 UI - Full Implementation

---

## 📋 Overview

This is a fully functional car inventory management web application built with HTML, CSS, and JavaScript. The application allows users to manage their vehicle inventory with complete CRUD (Create, Read, Update, Delete) functionality.

---

## 🚀 How to Run

1. **Download all three files:**
   - `index.html`
   - `styles.css`
   - `app.js`

2. **Place them in the same folder**

3. **Open `index.html` in any modern web browser:**
   - Double-click the file, OR
   - Right-click → Open with → Your browser, OR
   - Drag and drop into browser window

4. **That's it!** The app runs entirely in your browser - no server needed.

---

## ✨ Features & User Stories

### **User Story 1: View Car Inventory**
✅ **Implementation:** Home page displays all cars in an organized list
- Shows make, model, year, and owner
- Clean card-based layout
- Responsive design

### **User Story 2: Search and Filter Cars**
✅ **Implementation:** Left sidebar with comprehensive filters
- Search by keyword (searches across all fields)
- Filter by year (dropdown)
- Filter by make (dropdown)
- Filter by model (text input)
- Sort options (year, make - ascending/descending)

### **User Story 3: View Car Details**
✅ **Implementation:** Dedicated details page
- Displays all car information
- Shows car image (if uploaded)
- Clean, organized layout with grid display

### **User Story 4: Add New Car**
✅ **Implementation:** Full form with validation
- Required fields: Owner, Make, Model, Year
- Optional fields: Color, Mileage
- Image upload with preview
- Form validation

### **User Story 5: Edit Car Information**
✅ **Implementation:** Edit form pre-populated with current data
- All fields editable
- Image can be updated
- Changes save to localStorage

### **User Story 6: Delete Car with Confirmation**
✅ **Implementation:** Modal confirmation dialog
- Shows car details before deletion
- Clear warning message
- Requires explicit confirmation
- Cancel option available

---

## 🎯 Inclusivity Heuristics (All 8 Implemented)

### **IH #1: Match Between Design and Real World**
✅ Uses familiar automotive terminology (Make, Model, Year, Owner)
✅ Icons match their meaning (🔍 for search, ⚙️ for settings, 🚗 for cars)
✅ Natural language throughout interface

### **IH #2: Provide Information Scent**
✅ Clear button labels ("+ Add Car", "View Details", "Save Changes")
✅ Required fields marked with asterisks (*)
✅ Page titles always visible
✅ Time estimates provided (e.g., "estimated time: 10 seconds" for CSV operations)
✅ Descriptive text explaining features on Settings page

### **IH #3: User Control and Freedom**
✅ Cancel buttons on all forms
✅ Back buttons on all pages
✅ Logo acts as home button
✅ Delete confirmation can be canceled
✅ Can abort actions at any time

### **IH #4: Consistent and Familiar Metaphors**
✅ Logo in top-left (standard web convention)
✅ Search bar in familiar location
✅ Standard form layouts
✅ Color conventions: green=save, red=delete, gray=cancel
✅ Navigation bar always visible

### **IH #5: Provide Signposts and Cues**
✅ Clear call-to-action buttons on every page
✅ "View Details" buttons on each car card
✅ Prominent "Save" buttons on forms
✅ Visual hierarchy guides users to next steps
✅ Page headers indicate current location

### **IH #6: Help People Avoid and Recover from Errors**
✅ Required field validation (can't submit incomplete forms)
✅ Delete confirmation prevents accidents
✅ Warning message: "This action cannot be undone"
✅ Cancel options on all forms
✅ Toast notifications confirm successful actions
✅ No data loss - all data saved to localStorage

### **IH #7: Support Diverse Ways of Engaging**
✅ Large Text option for visual impairments
✅ High Contrast mode for better visibility
✅ Screen Reader Support option
✅ Keyboard navigation support (Tab, Enter, Escape)
✅ Mouse and touch interactions
✅ Multiple theme options (Light/Dark mode)

### **IH #8: Design for Recognition Over Recall**
✅ Clear visual hierarchy throughout
✅ Information grouped logically
✅ Navigation always visible
✅ Form fields clearly labeled
✅ Current values shown when editing
✅ Modal dialogs show relevant information
✅ Toast notifications provide feedback

---

## 🎨 Quality Attributes

### **1. Usability**
**Non-Functional Requirement:** All 8 Inclusivity Heuristics reflected
✅ **Status:** SATISFIED - All heuristics implemented and demonstrated above

### **2. Maintainability**
**Non-Functional Requirement:** Modular, reusable component structure
✅ **Status:** SATISFIED
- Separate HTML, CSS, and JavaScript files
- Functions organized by feature area
- Reusable CSS classes
- Clear naming conventions
- Comments throughout code

### **3. Responsiveness**
**Non-Functional Requirement:** Page transitions under 1 second
✅ **Status:** SATISFIED
- Instant page navigation
- Smooth animations (0.3s)
- No loading delays
- Optimized rendering

---

## 🛠️ Technical Features

### **Data Persistence**
- Uses browser localStorage
- Data persists between sessions
- Automatic saving on all operations

### **Image Handling**
- Upload car images
- Preview before saving
- Base64 encoding for storage

### **CSV Import/Export**
- Export inventory to CSV file
- Import cars from CSV
- Standard CSV format

### **Responsive Design**
- Works on desktop, tablet, and mobile
- Adapts layout based on screen size
- Touch-friendly interface

### **Accessibility Features**
- Semantic HTML
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast mode
- Large text option

### **Theme Support**
- Light mode (default)
- Dark mode
- High contrast mode
- Settings persist across sessions

---

## 🎬 Demo Script Sections

The application supports all sections from the demo script:

1. ✅ Introduction - Home page with inventory
2. ✅ User Story 1 - View all cars
3. ✅ User Story 2 - Search and filters
4. ✅ User Story 3 - Car details page
5. ✅ User Story 4 - Add new car form
6. ✅ User Story 5 - Edit car form (pre-populated)
7. ✅ User Story 6 - Delete confirmation modal
8. ✅ All 8 Inclusivity Heuristics demonstrated
9. ✅ All 3 Quality Attributes satisfied
10. ✅ Settings & Accessibility page

---

## 📱 Pages Included

1. **Home / Inventory** - Main dashboard with car list
2. **Car Details** - Detailed view of individual car
3. **Add Car** - Form to add new vehicle
4. **Edit Car** - Form to modify existing vehicle
5. **Delete Confirmation** - Modal for safe deletion
6. **Settings & Accessibility** - App configuration

---

## 🎨 Design Highlights

- **Clean, modern interface**
- **Intuitive navigation**
- **Professional color scheme**
- **Smooth animations**
- **Clear typography**
- **Responsive layout**
- **Accessible design**

---

## 💾 Data Storage

The app uses **localStorage** to save:
- Car inventory data
- User preferences (theme, text size, contrast)
- Settings configuration

**Note:** Data is stored locally in your browser and persists between sessions.

---

## 🔑 Keyboard Shortcuts

- **Escape** - Close modals
- **Ctrl/Cmd + S** - Save current form
- **Tab** - Navigate between fields
- **Enter** - Submit forms

---

## 📊 Sample Data

The app comes pre-loaded with 3 sample cars:
1. 2019 Honda Civic (Owner: Bob)
2. 2021 Toyota Camry (Owner: Alice)
3. 2020 Ford F-150 (Owner: Charlie)

You can add, edit, or delete these to test functionality.

---

## 🚨 Important Notes

1. **No Backend Required** - Runs entirely in browser
2. **Data is Local** - Stored in browser's localStorage
3. **Clear Data** - To reset, clear browser cache/localStorage
4. **Modern Browser** - Works best in Chrome, Firefox, Safari, Edge
5. **No Installation** - Just open HTML file

---

## 📸 Recording Your Demo

When recording your demo video:

1. Open the app in fullscreen
2. Follow the demo script
3. Navigate through each page
4. Demonstrate each user story
5. Show all 8 inclusivity heuristics
6. Demonstrate quality attributes
7. Keep under 5 minutes total

---

## 🎓 Assignment Compliance

This implementation satisfies:
- ✅ All user story requirements
- ✅ All 8 Inclusivity Heuristics
- ✅ All quality attributes
- ✅ 6 distinct pages/screens
- ✅ Full CRUD functionality
- ✅ Professional UI design
- ✅ Accessibility features
- ✅ Responsive design

---

## 🐛 Troubleshooting

**Problem:** Changes not saving
**Solution:** Make sure JavaScript is enabled in your browser

**Problem:** Images not showing
**Solution:** Images are stored as base64 - large images may slow performance

**Problem:** Can't see data after refresh
**Solution:** Check if localStorage is enabled in browser settings

**Problem:** Layout looks broken
**Solution:** Ensure all three files (HTML, CSS, JS) are in same folder

---

## 📝 License

This is a student project for CS361 - Software Engineering I

---

## 👨‍💻 Developer

Jawwad Shadman Siddique
CS361 - Sprint 1 UI Implementation

---

**Enjoy managing your car inventory! 🚗**
