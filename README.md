# Student Registration Web Application

A complete, modern, responsive Student Registration System built with vanilla HTML, CSS, and JavaScript. No frameworks or external dependencies required!

## 📋 Project Structure

```
StudentRegistartionProject/
├── index.html          # Welcome page
├── student.html        # Student information form
├── academic.html       # Academic information form
├── summary.html        # Registration summary & review
├── style.css           # All styling (responsive design)
├── script.js           # All functionality (cookies, validation, utilities)
└── README.md           # This file
```

## 🚀 Quick Start

### Option 1: Using VS Code Live Server (Recommended)
1. Open the project folder in VS Code
2. Right-click on `index.html` and select "Open with Live Server"
3. The application will open in your default browser with live reload enabled

### Option 2: Direct File Access
1. Open `index.html` directly in your web browser
2. Navigate through the application using the buttons

## 📱 Features

### Multi-Step Registration
- **Step 1 (index.html)**: Welcome page with start button
- **Step 2 (student.html)**: Collect student details (Branch, Roll No, Name)
- **Step 3 (academic.html)**: Collect academic info (Email, Mobile, Address, Semester, Section)
- **Step 4 (summary.html)**: Review all information, edit, submit, or clear

### Data Persistence
- ✅ Automatic cookie storage (7-day expiry)
- ✅ Data automatically loaded when revisiting pages
- ✅ Edit functionality to go back and modify data
- ✅ Clear all data option with confirmation

### Form Validation
- ✅ Branch: Required selection
- ✅ Roll Number: Alphanumeric validation
- ✅ Student Name: Letters and spaces only
- ✅ Email: Valid email format
- ✅ Mobile: Exactly 10 digits
- ✅ Address: Required field
- ✅ Semester & Section: Required selection
- ✅ Real-time error messages

### User Experience
- ✅ Progress indicator (Step 1, 2, 3, 4)
- ✅ Live date and time display
- ✅ Smooth animations and transitions
- ✅ Responsive mobile-friendly design
- ✅ Professional gradient backgrounds
- ✅ Rounded inputs and buttons
- ✅ Hover animations
- ✅ Confirmation dialogs

### Responsive Design
- ✅ Desktop (1024px+)
- ✅ Tablet (768px - 1023px)
- ✅ Mobile (480px - 767px)
- ✅ Small Mobile (< 480px)
- ✅ Print-friendly styles

## 🔍 Form Fields & Validation Rules

### Page 2: Student Information
| Field | Type | Rules |
|-------|------|-------|
| Branch | Dropdown | Required |
| Roll Number | Text | Required, Alphanumeric only |
| Student Name | Text | Required, Letters & spaces only |

### Page 3: Academic Information
| Field | Type | Rules |
|-------|------|-------|
| Email | Email | Required, Valid email format |
| Mobile | Tel | Required, Exactly 10 digits |
| Address | Textarea | Required |
| Semester | Dropdown | Required |
| Section | Dropdown | Required |

## 🍪 Cookie Management

All form data is stored in cookies with the following structure:

```javascript
// Student Information
- branch: "CSE"
- rollNumber: "CS001"
- studentName: "John Doe"

// Academic Information
- email: "john@university.edu"
- mobile: "9876543210"
- address: "123 Main Street, City"
- semester: "5"
- section: "A"

// All cookies expire in 7 days
```

### Core Cookie Functions

```javascript
// Set a cookie
setCookie('cookieName', 'value', 7); // 7 days expiry

// Get a cookie
const value = getCookie('cookieName');

// Delete a cookie
deleteCookie('cookieName');

// Load all cookies (debugging)
loadCookies(); // Logs all cookies to console
```

## 🎨 Color Scheme

| Purpose | Color | Hex |
|---------|-------|-----|
| Primary | Indigo | #6366f1 |
| Secondary | Purple | #8b5cf6 |
| Accent | Pink | #ec4899 |
| Success | Green | #10b981 |
| Danger | Red | #ef4444 |
| Warning | Amber | #f59e0b |
| Dark | Dark Gray | #1f2937 |
| Light | Light Gray | #f3f4f6 |

## 📊 JavaScript Functions

### Cookie Management
```javascript
setCookie(name, value, days)     // Set a cookie
getCookie(name)                  // Get a cookie value
deleteCookie(name)               // Delete a cookie
loadCookies()                    // Load all cookies (debug)
```

### Form Validation
```javascript
validateEmailFormat(email)       // Validate email format
validateMobileNumber(mobile)     // Validate 10-digit number
validateAlphanumeric(str)        // Validate alphanumeric
validateName(name)               // Validate name
isEmpty(value)                   // Check if empty
validateForm(formId)             // Validate entire form
getFormData(formId)              // Get all form data
```

### Utility Functions
```javascript
showError(elementId, message)    // Show error message
clearErrors(errorIds)            // Clear errors
showAlert(message, type)         // Show alert
showConfirmation(message)        // Show confirmation dialog
formatDate(date)                 // Format date nicely
updateDateTime()                 // Update date/time display
navigateTo(page)                 // Navigate to page
displaySummary(fields)           // Display summary table
```

## 🐛 Debugging

The application includes helpful debugging functions. Open browser console and type:

```javascript
// Show all cookies
debugInfo()

// Display all current cookies
debugShowAllCookies()

// Clear all cookies
debugClearAllCookies()
```

## ♿ Accessibility Features

- Semantic HTML5 markup
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators for better visibility
- High contrast mode support
- Reduced motion support for animations
- Mobile-friendly touch targets

## 📱 Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome | ✅ Full |
| Firefox | ✅ Full |
| Safari | ✅ Full |
| Edge | ✅ Full |
| Opera | ✅ Full |
| IE 11 | ⚠️ Limited |

## 🔐 Data Security Notes

- Cookies are stored in the browser (not server)
- Data persists for 7 days, then automatically deleted
- No external API calls - everything is local
- For production, consider using localStorage instead of cookies
- For sensitive data, implement server-side storage

## 🎯 Usage Flow

1. **Start**: Click "Start Registration" on index.html
2. **Fill Step 2**: Enter branch, roll number, student name
3. **Click Next**: Data saved to cookies, navigate to academic.html
4. **Fill Step 3**: Enter email, mobile, address, semester, section
5. **Click Next**: Data saved, navigate to summary.html
6. **Review**: Check all information in the summary table
7. **Options**:
   - Click **Edit**: Go back to student.html to modify
   - Click **Previous**: Go back to academic.html
   - Click **Clear All**: Delete all cookies (with confirmation)
   - Click **Submit**: Show success message

## 🛠️ Customization

### Change Colors
Edit CSS variables in `style.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    /* ... */
}
```

### Add More Branches
In `student.html`, add options to the branch dropdown:
```html
<option value="NEW_CODE">New Branch Name</option>
```

### Add More Fields
1. Add HTML input in the form
2. Add validation function
3. Add setCookie and getCookie calls
4. Update summary table

### Change Cookie Expiry
```javascript
// Change from 7 to your desired days
setCookie('fieldName', fieldValue, 30); // 30 days
```

## 📝 Form Validation Examples

### Student Name Validation
- ✅ Valid: "John Doe", "Jane Smith", "Mary Jane"
- ❌ Invalid: "John123", "John@", "John123Doe"

### Roll Number Validation
- ✅ Valid: "CS001", "EC123ABC", "ME99"
- ❌ Invalid: "CS @01", "EC-123", "CS 001"

### Mobile Number Validation
- ✅ Valid: "9876543210", "8765432109"
- ❌ Invalid: "987654321", "98765432100", "9876 543 210"

### Email Validation
- ✅ Valid: "user@example.com", "john.doe@university.ac.in"
- ❌ Invalid: "user@", "@example.com", "user example@.com"

## 🎓 Learning Resources

### HTML5 Features Used
- Semantic elements (header, main, footer)
- Form controls (input, select, textarea)
- Meta tags for viewport and character encoding

### CSS Features Used
- CSS Variables (Custom Properties)
- Flexbox Layout
- Media Queries (Responsive)
- CSS Animations
- CSS Gradients
- Box Shadows
- Transitions

### JavaScript Features Used
- DOM Manipulation
- Event Listeners
- Cookie Management
- Regular Expressions
- Form Validation
- String Methods
- Array Methods
- try-catch Error Handling

## 📄 License

This project is provided as-is for educational and commercial use.

## 👨‍💻 Support & Issues

If you encounter any issues:
1. Check browser console for error messages
2. Ensure cookies are enabled
3. Clear browser cache and try again
4. Use debugging functions (type `debugInfo()` in console)
5. Verify all files are in the same directory

## 🎉 Features Checklist

- ✅ Multi-step registration form (4 pages)
- ✅ Form validation with error messages
- ✅ Cookie storage (7-day expiry)
- ✅ Data persistence across pages
- ✅ Edit functionality
- ✅ Summary display in table
- ✅ Clear all data with confirmation
- ✅ Progress indicator
- ✅ Live date/time display
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth animations
- ✅ Professional UI/UX
- ✅ No external dependencies
- ✅ Clean, well-commented code
- ✅ Accessibility features
- ✅ Debugging utilities

---

**Version:** 1.0.0  
**Created:** 2026  
**© 2026 Student Registration System. All rights reserved.**

Enjoy building amazing web applications! 🚀
