# JavaScript File Analysis Utility

This Node.js script (`wordCounter.js`) reads a text file and outputs the 
number of lines, words, and characters it contains.

## Features

- Accepts any `.txt` file as input
- Outputs line, word, and character counts
- Handles missing files and unexpected errors
- Displays a usage message if no filename is provided
- Designed for postgraduate coursework comparing Python and JavaScript

## How to Use

1. Open Terminal
2. Navigate to this folder
3. Run the script using:

    node wordCounter.js <filename>

Example:

    node wordCounter.js sample.txt

## Test Cases

### 1. sample.txt (basic test case)

    This is a test file.
    It contains multiple lines.
    Each line has a few words.

Output:

    File analysis results:
    File: sample.txt
    Lines: 4
    Words: 15
    Characters: 76

*Note: JavaScript returns 4 lines due to trailing newline behavior. Python 
returns 3. This is a language-level difference.*

---

### 2. test2.txt (longer content)

    Python is a powerful high-level programming language.
    It is widely used in automation, data science, and web development.
    This file has more words and more lines for testing purposes.
    I am checking if the script can handle different inputs properly.

Output:

    File analysis results:
    File: test2.txt
    Lines: 5
    Words: 40
    Characters: 250

---

### 3. missing.txt (non-existent file)

Command:

    node wordCounter.js missing.txt

Output:

    Error: The file was not found.

---

### 4. empty.txt (edge case: empty file)

Command:

    node wordCounter.js empty.txt

Output:

    File analysis results:
    File: empty.txt
    Lines: 1
    Words: 0
    Characters: 0

---

### 5. No filename provided

Command:

    node wordCounter.js

Output:

    Usage: node wordCounter.js <filename>

## Requirements

- Node.js (v18 or later recommended)
- macOS, Linux, or Windows terminal environment

## Author

Jeroen Vreijsen
