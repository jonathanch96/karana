const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'out'); // Change 'out' to the output directory name of your Next.js project
const imageDir = 'images'; // Change this to the path of your images directory

function updateImagePaths(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${filePath}`);
      return;
    }

    const updatedData = data.replace(/src="\/images\//g, `src="${imageDir}/`);

    fs.writeFile(filePath, updatedData, 'utf8', (err) => {
      if (err) {
        console.error(`Error writing to file: ${filePath}`);
        return;
      }
      console.log(`Updated image paths in: ${filePath}`);
    });
  });
}

function processFiles(dirPath) {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${dirPath}`);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(dirPath, file);

      fs.stat(filePath, (err, stat) => {
        if (err) {
          console.error(`Error checking file stats: ${filePath}`);
          return;
        }

        if (stat.isFile() && filePath.endsWith('.html')) {
          updateImagePaths(filePath);
        } else if (stat.isDirectory()) {
          processFiles(filePath);
        }
      });
    });
  });
}

processFiles(sourceDir);
