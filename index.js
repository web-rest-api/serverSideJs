// required modules
const fs = require("fs");
const path = require("path");

console.log("running the app  ...");

// Step 1: Read 'students.json' using fs.readFileSync
// Pass 'utf-8' as the second argument so you get a text string, not raw binary
// const studentsData = fs.readFileSync(???, 'utf-8');

// Step 2: Parse the JSON string into a JavaScript array
// const students = JSON.parse(???);

// Step 3: Start building your Markdown string
// Add a title, the current date, and a summary showing the total number of students
// let markdownContent = '# Student Report\n\n';
// markdownContent += `Generated on: ${???}\n\n`;
// markdownContent += `## Summary\n\nTotal Students: ${???}\n\n`;

// Step 4: Loop over the students and append each one's details to markdownContent
// students.forEach((student) => {
//   markdownContent += `### ${student.???}\n`;
//   markdownContent += `- **Email:** ${student.???}\n`;
//   markdownContent += `- **Major:** ${student.???}\n`;
//   markdownContent += `- **GPA:** ${student.???}\n`;
//   markdownContent += `- **ID:** ${student.???}\n\n`;
// });

// Step 5: Build the output path using path.join and __dirname
// __dirname always points to the folder where this script lives
// const outputPath = path.join(__dirname, 'student_report.md');

// Step 6: Write your Markdown string to the output file
// fs.writeFileSync(outputPath, markdownContent, 'utf-8');

// Step 7: Confirm it worked
// console.log(`Report generated: ${outputPath}`);
