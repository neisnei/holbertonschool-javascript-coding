#!/usr/bin/node
/* eslint-disable */

// Import the 'fs' module (File System) to work with files.
const fs = require('fs');

// Get the file path as a command line argument.
const filePath = process.argv[2];

// Read the contents of the file specified by 'filePath' as UTF-8.
// The 'utf-8' encoding specifies that the file should be read as text.
fs.readFile(filePath, 'utf-8', function (err, data) {
    if (err) {
        // If an error occurs while reading the file, print the error message.
        console.log(err);
    } else {
        // If reading the file is successful, print its contents.
        console.log(data);
    }
});
