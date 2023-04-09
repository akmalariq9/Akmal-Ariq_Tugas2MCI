require('dotenv').config()
const db_name = process.env.DB_NAME
const db_host = process.env.DB_HOST
const db_password = process.env.DB_PASSWORD
const db_port = process.env.DB_PORT
const db_user = process.env.DB_USER

module.exports = {
    db_name,
    db_host,
    db_password,
    db_port,
    db_user
}