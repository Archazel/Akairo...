require('dotenv').config();

const ThelClient = require('./ThelClient');
const client = new ThelClient;

client.login(process.env.TOKEN);