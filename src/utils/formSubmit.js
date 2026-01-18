// Google Sheets form submission utility
// This uses a Google Apps Script Web App as a webhook to receive form data

// Your Google Apps Script Web App URL - You need to set this up in Google Sheets
// Instructions:
// 1. Create a new Google Sheet
// 2. Go to Extensions > Apps Script
// 3. Paste the code from the comment below
// 4. Deploy as Web App (Execute as: Me, Who has access: Anyone)
// 5. Replace the URL below with your deployed Web App URL

/*
Google Apps Script Code to paste:

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Add timestamp
    var timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    
    // Append row based on form type
    var row = [
      timestamp,
      data.formType || 'Unknown',
      data.name || '',
      data.email || '',
      data.phone || '',
      data.institute || '',
      data.program || '',
      data.message || '',
      data.position || '',
      data.pageSource || ''
    ];
    
    sheet.appendRow(row);
    
    return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ 'result': 'error', 'error': err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Form submission endpoint is working!");
}
*/

// ⚠️ IMPORTANT: Replace this URL with your Google Apps Script Web App URL
// Instructions: Create a Google Sheet → Extensions → Apps Script → Deploy as Web App
// Then paste your Web App URL below (between the quotes)
const GOOGLE_SHEETS_URL = 'YOUR_GOOGLE_SHEETS_WEB_APP_URL_HERE';

/**
 * Submit form data to Google Sheets
 * @param {Object} formData - The form data to submit
 * @param {string} formType - Type of form (contact, callback, career, resume)
 * @param {string} pageSource - The page from which form was submitted
 * @returns {Promise<{success: boolean, message: string}>}
 */
export const submitFormToGoogleSheets = async (formData, formType = 'contact', pageSource = 'website') => {
    try {
        const payload = {
            ...formData,
            formType,
            pageSource,
            timestamp: new Date().toISOString()
        };

        const response = await fetch(GOOGLE_SHEETS_URL, {
            method: 'POST',
            mode: 'no-cors', // Required for Google Apps Script
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        // Note: With 'no-cors' mode, we can't read the response
        // So we assume success if no error is thrown
        return {
            success: true,
            message: 'Your details have been submitted successfully! Our team will contact you shortly.'
        };
    } catch (error) {
        console.error('Form submission error:', error);
        return {
            success: false,
            message: 'There was an error submitting your form. Please try again or contact us directly.'
        };
    }
};

/**
 * Submit resume/career application
 * @param {Object} formData - The form data including name, email, phone, position
 * @returns {Promise<{success: boolean, message: string}>}
 */
export const submitCareerApplication = async (formData) => {
    return submitFormToGoogleSheets(formData, 'career', 'careers-page');
};

/**
 * Submit callback request
 * @param {Object} formData - The form data
 * @param {string} pageSource - Source page
 * @returns {Promise<{success: boolean, message: string}>}
 */
export const submitCallbackRequest = async (formData, pageSource = 'contact') => {
    return submitFormToGoogleSheets(formData, 'callback', pageSource);
};

export default submitFormToGoogleSheets;
