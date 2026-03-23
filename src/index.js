import { fileURLToPath } from 'node:url'
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// File name + Directory name (Because __dirname is not available in ES6 modules)
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


console.log(`Fetching ./students.json in ${__dirname}...`)
// Step 1: Read 'students.json' using fs.readFileSync
// Pass 'utf-8' as the second argument so you get a text string, not raw binary
const studentsData = readFileSync("./src/students.json", 'utf-8');  // Holds the exact contents of the JSON, but in .txt

// Step 2: Parse the JSON string into a JavaScript array
console.log("Converting JSON text string to JS array...")
const students = JSON.parse(studentsData);

// Step 3: Start building your Markdown string
// Add a title, the current date, and a summary showing the total number of students
let markdownContent = '# Student Report\n\n';
markdownContent += `Generated on: ${new Date().toLocaleDateString()}\n\n`;
markdownContent += `## Summary\n\nTotal Students: ${students.length}\n\n`;

// Step 4: Loop over the students and append each one's details to markdownContent
students.forEach((student) => {
  markdownContent += `### ${student.name}\n`;
  markdownContent += `- **Email:** ${student.email}\n`;
  markdownContent += `- **Major:** ${student.major}\n`;
  markdownContent += `- **GPA:** ${student.gpa}\n`;
  markdownContent += `- **ID:** ${student.id}\n\n`;
});

// Step 5: Build the output path using path.join and __dirname
// __dirname always points to the folder where this script lives
const outputPath = join(__dirname, 'student_report.md');

// Step 6: Write your Markdown string to the output file
writeFileSync(outputPath, markdownContent, 'utf-8');

// Step 7: Confirm it worked
console.log(`Report generated: ${outputPath}`);
