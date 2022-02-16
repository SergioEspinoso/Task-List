const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const tasksRoute = require('./src/routes/tasksRoute');
const { errorMiddleware } = require('./src/middlewares/errorHandler');

const app = express();
const PORT = 3001;

app.use(cors())

app.use(bodyParser.json());

app.use('/tasks', tasksRoute);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));