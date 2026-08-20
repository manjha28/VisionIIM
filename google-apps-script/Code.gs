const SHEET_NAME = 'Submissions';
const NOTIFICATION_EMAIL = 'YOUR_EMAIL_HERE';
const SEND_NOTIFICATION_EMAIL = false;
const REQUIRED_FIELDS = ['name', 'email', 'phone', 'target'];
const HEADERS = ['Timestamp', 'Submission ID', 'Name', 'Email', 'Phone', 'Target', 'Message', 'Page', 'User Agent'];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const data = e.parameter || {};
    if (data.company) return jsonResponse({ ok: false, error: 'Spam rejected' }, 400);
    const missing = REQUIRED_FIELDS.filter((field) => !String(data[field] || '').trim());
    if (missing.length) return jsonResponse({ ok: false, error: 'Missing required fields', missing }, 400);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email || ''))) return jsonResponse({ ok: false, error: 'Invalid email' }, 400);

    const timestamp = new Date();
    const submissionId = data.submissionId || Utilities.getUuid();
    const sheet = getSheet_();
    ensureHeaders_(sheet);
    const row = [timestamp, submissionId, data.name, data.email, data.phone, data.target, data.message || '', data.page || '', e.postData ? e.postData.type : ''];
    sheet.appendRow(row);

    if (SEND_NOTIFICATION_EMAIL && NOTIFICATION_EMAIL && NOTIFICATION_EMAIL !== 'YOUR_EMAIL_HERE') {
      try { sendNotification_(submissionId, timestamp, data); } catch (err) { console.error('Email failed', err); }
    }
    return jsonResponse({ ok: true, submissionId }, 200);
  } catch (err) {
    return jsonResponse({ ok: false, error: 'Server error' }, 500);
  } finally {
    lock.releaseLock();
  }
}

function getSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  return spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
}
function ensureHeaders_(sheet) {
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
}
function sendNotification_(submissionId, timestamp, data) {
  const lines = [`Submission ID: ${submissionId}`, `Timestamp: ${timestamp.toISOString()}`, '', ...Object.keys(data).filter((key) => key !== 'company').map((key) => `${key}: ${data[key]}`)];
  MailApp.sendEmail(NOTIFICATION_EMAIL, `New VisionIIM form submission: ${data.name || submissionId}`, lines.join('\n'));
}
function jsonResponse(payload, status) {
  return ContentService.createTextOutput(JSON.stringify({ ...payload, status })).setMimeType(ContentService.MimeType.JSON);
}
