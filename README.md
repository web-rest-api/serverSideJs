# Exercise 01 — File System & JSON

## Goal

Read a JSON file, transform its data, and write the result to a Markdown file — all using Node.js built-in modules, no `npm install` needed.

## What you will build

A script that reads `students.json` and generates a `student_report.md` file.

## Run it

```bash
node index.js
```

If it works, you should see a success message in the terminal and a new `student_report.md` file appear next to `index.js`.

## Modules you will need

| Module | What it does                            |
| ------ | --------------------------------------- |
| `fs`   | Read and write files on your filesystem |
| `path` | Build file paths that work on any OS    |

Both are built into Node.js — just `require` them, no install needed.

## Key functions

- `fs.readFileSync(filePath, 'utf-8')` — reads a file and returns its contents as a string
- `fs.writeFileSync(filePath, content, 'utf-8')` — writes a string to a file (creates it if it doesn't exist)
- `JSON.parse(string)` — converts a JSON string into a JavaScript object
- `path.join(__dirname, 'filename')` — builds a safe absolute path relative to the current script

## Steps

1. Require the `fs` and `path` modules
2. Read `students.json` using `fs.readFileSync`
3. Parse the JSON string into a JavaScript array using `JSON.parse`
4. Build a Markdown string by looping over the students array
5. Write the result to `student_report.md` using `fs.writeFileSync`

## Expected output

The generated `student_report.md` should look like this:

```markdown
# Student Report

Generated on: 20/03/2026

## Summary

Total Students: 3

## Student Details

### Alice Martin

- **Email:** alice.martin@epita.fr
- **Major:** Computer Science
- **GPA:** 3.8
- **ID:** 1
  ...
```

## Hints

- `__dirname` is a Node.js variable that always points to the folder where your script lives — useful for building reliable file paths
- `Array.forEach()` lets you loop over each student and append their info to your Markdown string
- Template literals (backticks) make it easy to embed variables inside strings: `` `Hello ${name}` ``
