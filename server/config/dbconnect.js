const mongoose = require('mongoose');
require('dotenv').config()

async function dbconnect() {
return mongoose.connect(process.env.MONGOURL)
}
module.exports = dbconnect;
