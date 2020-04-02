const dotenv = require("dotenv");
dotenv.config();

const config = {};

config.serverPort = process.env.SERVER_PORT;
config.serverHost = process.env.SERVER_HOST;
config.jwtSecretKey = process.env.JWT_SECRET_KEY;

module.exports = config;