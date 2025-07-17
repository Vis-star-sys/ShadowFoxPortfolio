import { existsSync, readFileSync, writeFileSync } from "fs";
import * as XLSX from "xlsx";
import { join } from "path";

// POST: Store contact form data to Excel
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "All fields are required." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Set file path outside of OneDrive/Desktop to avoid write issues
    const filePath = join(process.cwd(), "data.xlsx");

    let workbook;
    let worksheet;
    let data = [];

    if (existsSync(filePath)) {
      const fileBuffer = readFileSync(filePath);
      workbook = XLSX.read(fileBuffer);
      worksheet = workbook.Sheets["Messages"];
      data = XLSX.utils.sheet_to_json(worksheet);
    } else {
      workbook = XLSX.utils.book_new();
    }

    const newEntry = {
      Name: name,
      Email: email,
      Message: message,
      Date: new Date().toLocaleString(),
    };

    data.push(newEntry);

    const newSheet = XLSX.utils.json_to_sheet(data);
    workbook.Sheets["Messages"] = newSheet;

    // Only append if it's a new sheet
    if (!workbook.SheetNames.includes("Messages")) {
      XLSX.utils.book_append_sheet(workbook, newSheet, "Messages");
    }

    const buffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });
    writeFileSync(filePath, buffer);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Excel Save Error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
