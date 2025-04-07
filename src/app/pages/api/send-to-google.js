// Create this file at: /app/api/send-to-google/route.js (for Next.js 13+)

import { google } from 'googleapis';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;
    
    // Configure Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    // Spreadsheet ID from your Google Sheet URL
    const spreadsheetId = process.env.SPREADSHEET_ID;
    
    // Define the range to which data will be appended
    const range = 'Sheet1!A:D'; // Adjust based on your sheet name and columns
    
    // Define values to be added
    const valueInputOption = 'USER_ENTERED';
    const resource = {
      values: [[name, email, subject, message, new Date().toISOString()]],
    };

    // Append the data to the sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption,
      resource,
    });

    return Response.json({ success: true, data: response.data });
  } catch (error) {
    console.error('Error appending data to Google Sheets:', error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}