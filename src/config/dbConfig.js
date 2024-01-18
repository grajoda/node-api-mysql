/*
    MySql configurations 

    Cheeck the .env file to create the variables 
    (remember to create the .env file)
*/

const user = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;
const database = process.env.DATABASE_NAME;

const dbConfig = {
  host: 'hostName',
  port: 'PORT',
  user: user,
  password: password,
  database: database
}

module.exports = dbConfig;