const slonik = require('slonik')
require('dotenv').config()

const SLONIK_URL = process.env.DATABASE_URL

module.exports = slonik.createPool(SLONIK_URL)
