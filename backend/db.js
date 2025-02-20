const mongoose = require("mongoose");
require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL);

const createUser = mongoose.Schema({
    username: String,
    password: String
})

const user = mongoose.model('user', createUser);

module.exports = {
    user
}
