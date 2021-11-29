const express = require('express');

const app = express();

const jobController = require('./controllers/job.controllers');
const companyController = require('./controllers/company.controllers');
const skillController = require('./controllers/skill.controllers');


app.use(express.json());
app.use('/jobs', jobController);
app.use('/company', companyController);
app.use('/skills', skillController);


module.exports = app;