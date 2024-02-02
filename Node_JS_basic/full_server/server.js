const express = require('express');
const app = express();
const port = 1245;

const routes = require('./routes/index');

app.use(routes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
