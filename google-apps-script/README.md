# VisionIIM Google Apps Script Setup

## Sheet columns
Create a sheet with these headers: `Timestamp`, `Submission ID`, `Name`, `Email`, `Phone`, `Target`, `Message`, `Page`, `User Agent`.

### Step 1
Create a Google Sheet for VisionIIM submissions.

### Step 2
Create headers matching the form fields above. The script can also create them automatically on first submission.

### Step 3
Open **Extensions → Apps Script** from the Google Sheet.

### Step 4
Paste the supplied `Code.gs` into the Apps Script editor.

### Step 5
Configure `NOTIFICATION_EMAIL`, `SEND_NOTIFICATION_EMAIL`, and `SHEET_NAME`. Keep `YOUR_EMAIL_HERE` until you are ready to receive messages.

### Step 6
Deploy as **Web app**. Execute as yourself and allow access to **Anyone** so the public static website can submit.

### Step 7
Copy the `/exec` Web App URL, not the `/dev` test URL.

### Step 8
Put that URL into `VITE_GOOGLE_SCRIPT_URL` in your local `.env` or GitHub Actions environment.

### Step 9
Build and deploy the website with `npm run build`, or push to `main` and let GitHub Pages deploy.

### Step 10
Test the complete flow by submitting the public form and confirming a new row appears.

Google will ask you to authorize Spreadsheet and Mail permissions the first time you deploy or run the script. Email failures are caught so valid submissions still remain stored in the sheet.
