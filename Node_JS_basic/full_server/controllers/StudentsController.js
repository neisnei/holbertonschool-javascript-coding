const { readDatabase } = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((students) => {
        res.status(200).send(
          `This is the list of our students\n${Object.keys(students)
            .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
            .map(
              (field) =>
                `Number of students in ${field}: ${
                  students[field].length
                }. List: ${students[field].join(', ')}`,
            )
            .join('\n')}`
        );
      })
      .catch((err) => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(process.argv[2])
      .then((students) => {
        res.status(200).send(
          `List: ${students[major].join(', ')}`
        );
      })
      .catch((err) => {
        res.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
