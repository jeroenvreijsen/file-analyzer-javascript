// wordCounter.js
// A file analysis utility that counts lines, words, and characters in a given text file
// Accepts filename as a command-line argument
// Author: Jeroen Vreijsen

// Import the 'fs' module to interact with the file system
const fs = require('fs');

// Get the filename from command-line arguments
const args = process.argv;

// Check if a filename was provided
if (args.length < 3) {
    console.log("Usage: node wordCounter.js <filename>");
    process.exit(1);
}

const filename = args[2];

// Function to analyze the file
function analyzeFile(file) {
    try {
        // Read the file synchronously as a UTF-8 string
        const data = fs.readFileSync(file, 'utf8');

        // Split the text into lines
        const lines = data.split('\n');

        // Count number of lines
        const lineCount = lines.length;

        // Count words by splitting each line by whitespace
        const wordCount = lines.reduce((acc, line) => acc + line.trim().split(/\s+/).filter(Boolean).length, 0);

        // Count characters (includes spaces and punctuation)
        const charCount = data.length;

        // Output results
        console.log("File analysis results:");
        console.log(`File: ${file}`);
        console.log(`Lines: ${lineCount}`);
        console.log(`Words: ${wordCount}`);
        console.log(`Characters: ${charCount}`);
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log("Error: The file was not found.");
        } else {
            console.log("An unexpected error occurred:", err.message);
        }
    }
}

// Run the function using the provided filename
analyzeFile(filename);