/* ============================================
   STUDENT REGISTRATION SYSTEM - SCRIPT.JS
   Core Functionality: Cookie Management & Utilities
   ============================================ */

/**
 * ============================================
 * COOKIE MANAGEMENT FUNCTIONS
 * ============================================
 */

/**
 * Set a cookie with specified name, value, and expiry days
 * @param {string} name - Cookie name
 * @param {string} value - Cookie value
 * @param {number} days - Expiry days (default: 7)
 */
function setCookie(name, value, days = 7) {
    try {
        // Create expiry date
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();

        // Encode value to handle special characters
        const encodedValue = encodeURIComponent(value);

        // Set cookie
        document.cookie = name + "=" + encodedValue + ";" + expires + ";path=/";
        
        console.log(`✓ Cookie set: ${name}`);
    } catch (error) {
        console.error(`✗ Error setting cookie ${name}:`, error);
    }
}

/**
 * Get cookie value by name
 * @param {string} name - Cookie name
 * @returns {string} - Cookie value or empty string if not found
 */
function getCookie(name) {
    try {
        // Add '=' to ensure we match the exact cookie name
        const nameEQ = name + "=";
        
        // Split cookies by semicolon
        const cookies = document.cookie.split(';');

        // Find and return the cookie value
        for (let cookie of cookies) {
            cookie = cookie.trim();
            if (cookie.indexOf(nameEQ) === 0) {
                // Decode the value and return
                return decodeURIComponent(cookie.substring(nameEQ.length, cookie.length));
            }
        }

        return ''; // Return empty string if cookie not found
    } catch (error) {
        console.error(`✗ Error getting cookie ${name}:`, error);
        return '';
    }
}

/**
 * Delete a cookie by name
 * @param {string} name - Cookie name
 */
function deleteCookie(name) {
    try {
        setCookie(name, '', -1); // Set expiry to past date
        console.log(`✓ Cookie deleted: ${name}`);
    } catch (error) {
        console.error(`✗ Error deleting cookie ${name}:`, error);
    }
}

/**
 * Load all cookies and display them in console (for debugging)
 */
function loadCookies() {
    try {
        if (document.cookie === '') {
            console.log('No cookies found');
            return {};
        }

        const cookieObj = {};
        const cookies = document.cookie.split(';');

        for (let cookie of cookies) {
            cookie = cookie.trim();
            const [name, value] = cookie.split('=');
            if (name && value) {
                cookieObj[name] = decodeURIComponent(value);
            }
        }

        console.log('Current Cookies:', cookieObj);
        return cookieObj;
    } catch (error) {
        console.error('✗ Error loading cookies:', error);
        return {};
    }
}

/**
 * ============================================
 * FORM VALIDATION FUNCTIONS
 * ============================================
 */

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function validateEmailFormat(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate mobile number (exactly 10 digits)
 * @param {string} mobile - Mobile number to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function validateMobileNumber(mobile) {
    const mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobile.replace(/\s/g, ''));
}

/**
 * Validate alphanumeric string
 * @param {string} str - String to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function validateAlphanumeric(str) {
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    return alphanumericRegex.test(str);
}

/**
 * Validate name (letters and spaces only)
 * @param {string} name - Name to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function validateName(name) {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(name.trim());
}

/**
 * Check if field is empty
 * @param {string} value - Value to check
 * @returns {boolean} - True if empty, false otherwise
 */
function isEmpty(value) {
    return !value || value.trim() === '';
}

/**
 * ============================================
 * UTILITY FUNCTIONS
 * ============================================
 */

/**
 * Display validation error message
 * @param {string} elementId - HTML element ID for error display
 * @param {string} message - Error message
 */
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        
        // Add animation
        errorElement.style.animation = 'slideDown 150ms ease-out';
    }
}

/**
 * Clear all error messages
 * @param {array} errorIds - Array of error element IDs to clear
 */
function clearErrors(errorIds = []) {
    if (errorIds.length > 0) {
        errorIds.forEach(id => {
            const errorElement = document.getElementById(id);
            if (errorElement) {
                errorElement.textContent = '';
                errorElement.style.display = 'none';
            }
        });
    } else {
        // Clear all elements with class 'error-message'
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(el => {
            el.textContent = '';
            el.style.display = 'none';
        });
    }
}

/**
 * Add event listener to form field for real-time validation
 * @param {string} fieldId - Input field ID
 * @param {function} validationFunc - Validation function
 * @param {string} errorId - Error display element ID
 */
function addRealTimeValidation(fieldId, validationFunc, errorId) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(errorId);

    if (field && errorElement) {
        field.addEventListener('blur', function() {
            const isValid = validationFunc(this.value);
            if (!isValid && this.value.trim() !== '') {
                errorElement.style.display = 'block';
            } else {
                errorElement.style.display = 'none';
            }
        });

        field.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                const isValid = validationFunc(this.value);
                errorElement.style.display = isValid ? 'none' : 'block';
            }
        });
    }
}

/**
 * Format date in readable format
 * @param {Date} date - Date object
 * @returns {string} - Formatted date string
 */
function formatDate(date = new Date()) {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    return date.toLocaleDateString('en-US', options);
}

/**
 * Update date and time in header
 */
function updateDateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    if (dateTimeElement) {
        dateTimeElement.textContent = formatDate();
    }
}

/**
 * Show confirmation dialog
 * @param {string} message - Confirmation message
 * @returns {boolean} - True if confirmed, false if cancelled
 */
function showConfirmation(message) {
    return confirm(message);
}

/**
 * Show alert message
 * @param {string} message - Alert message
 * @param {string} type - Alert type ('info', 'success', 'error', 'warning')
 */
function showAlert(message, type = 'info') {
    // Simple alert - can be replaced with custom toast notification
    alert(message);
    
    // Log to console with color coding
    const colors = {
        info: 'color: #3b82f6',
        success: 'color: #10b981',
        error: 'color: #ef4444',
        warning: 'color: #f59e0b'
    };
    console.log(`%c${message}`, colors[type] || colors.info);
}

/**
 * Validate entire form by checking required fields
 * @param {string} formId - Form element ID
 * @returns {boolean} - True if all fields are valid, false otherwise
 */
function validateForm(formId) {
    try {
        const form = document.getElementById(formId);
        if (!form) return false;

        // Get all required fields
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (isEmpty(field.value)) {
                isValid = false;
                // Add error class if needed
                field.classList.add('error');
            } else {
                field.classList.remove('error');
            }
        });

        return isValid;
    } catch (error) {
        console.error('✗ Error validating form:', error);
        return false;
    }
}

/**
 * Get all form data and return as object
 * @param {string} formId - Form element ID
 * @returns {object} - Form data object
 */
function getFormData(formId) {
    try {
        const form = document.getElementById(formId);
        if (!form) return {};

        const formData = new FormData(form);
        const dataObj = {};

        for (let [key, value] of formData.entries()) {
            dataObj[key] = value;
        }

        return dataObj;
    } catch (error) {
        console.error('✗ Error getting form data:', error);
        return {};
    }
}

/**
 * Display summary from cookies in table format
 * @param {array} fields - Array of field names to display
 * @param {string} tableBodyId - Table body element ID
 */
function displaySummary(fields, tableBodyId = 'summaryTableBody') {
    try {
        const tableBody = document.getElementById(tableBodyId);
        if (!tableBody) return;

        tableBody.innerHTML = '';

        fields.forEach(field => {
            const cookieValue = getCookie(field);
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="label">${field}</td>
                <td class="value">${cookieValue || 'N/A'}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('✗ Error displaying summary:', error);
    }
}

/**
 * ============================================
 * PAGE NAVIGATION FUNCTIONS
 * ============================================
 */

/**
 * Navigate to a specific page
 * @param {string} page - Page filename (e.g., 'student.html')
 */
function navigateTo(page) {
    window.location.href = page;
}

/**
 * Go to home page
 */
function goHome() {
    window.location.href = 'index.html';
}

/**
 * ============================================
 * INITIALIZATION FUNCTION
 * ============================================
 */

/**
 * Initialize the application
 */
function initializeApp() {
    try {
        // Update date/time every second
        updateDateTime();
        setInterval(updateDateTime, 1000);

        // Log app initialization
        console.log('✓ Student Registration System Initialized');
        console.log('Version: 1.0.0');
        console.log('© 2026 All Rights Reserved');

        // Load and display cookies on page load
        loadCookies();
    } catch (error) {
        console.error('✗ Error initializing app:', error);
    }
}

/**
 * ============================================
 * EVENT LISTENERS & DOM READY
 * ============================================
 */

// Run initialization when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// Handle page visibility changes
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        console.log('✓ Page is now visible');
        updateDateTime();
    }
});

// Handle window beforeunload (optional warning)
window.addEventListener('beforeunload', function(event) {
    // Uncomment if you want to warn users before leaving with unsaved data
    // const form = document.querySelector('form');
    // if (form && form.checkValidity() === false) {
    //     event.preventDefault();
    //     event.returnValue = '';
    // }
});

/**
 * ============================================
 * DEBUGGING UTILITIES
 * ============================================
 */

/**
 * Debug function to display all cookies
 */
function debugShowAllCookies() {
    console.clear();
    console.log('%c=== ALL COOKIES ===', 'color: #6366f1; font-size: 16px; font-weight: bold');
    loadCookies();
}

/**
 * Debug function to clear all cookies
 */
function debugClearAllCookies() {
    if (confirm('Clear all cookies?')) {
        const cookies = document.cookie.split(';');
        cookies.forEach(cookie => {
            const cookieName = cookie.split('=')[0].trim();
            if (cookieName) {
                deleteCookie(cookieName);
            }
        });
        console.log('✓ All cookies cleared');
    }
}

/**
 * Debug info - Display in console: debugInfo()
 */
function debugInfo() {
    console.clear();
    console.log('%c=== DEBUG INFO ===', 'color: #6366f1; font-size: 16px; font-weight: bold');
    console.log('Page URL:', window.location.href);
    console.log('User Agent:', navigator.userAgent);
    console.log('Cookies Enabled:', navigator.cookieEnabled);
    console.log('Total Cookies:', document.cookie.split(';').length);
    loadCookies();
    console.log('%c=== AVAILABLE FUNCTIONS ===', 'color: #6366f1; font-size: 16px; font-weight: bold');
    console.log('debugShowAllCookies() - Display all cookies');
    console.log('debugClearAllCookies() - Clear all cookies');
    console.log('debugInfo() - Display this info');
}

// Make debug functions globally accessible
window.debugShowAllCookies = debugShowAllCookies;
window.debugClearAllCookies = debugClearAllCookies;
window.debugInfo = debugInfo;

console.log('%c✓ Script loaded successfully', 'color: #10b981; font-weight: bold');
console.log('%cType "debugInfo()" in console for debugging options', 'color: #f59e0b');
