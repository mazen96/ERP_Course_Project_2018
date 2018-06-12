const express = require('express');

const app = express();
const port = 2999;

var index = require('./app_api/routes/index');

app.use('/api/', index);

app.listen(port, () => console.log(`Listening on port ${port}`));