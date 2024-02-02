const fs = require('fs');

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.split('\n');
        const students = {};
        lines.forEach((line) => {
          const [field, firstName] = line.split(',');
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstName);
        });
        resolve(students);
      }
    });
  });
};

module.exports = {
  readDatabase,
};
