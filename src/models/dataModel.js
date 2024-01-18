/*
    Default MySql Model Template.
    Change the tableName in the sql query String
    Change the 'Data' name in the functions and in the "module.exports = {}" in the bottom of the script.
    (Use Ctrl + D to make it faster).
*/

const mysql = require('mysql2');
const dbConfig = require('../config/dbConfig.js')

const connection = mysql.createPool(dbConfig);

connection.getConnection((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados: ' + err.stack);
        return;
    }
    console.log('Conexão bem-sucedida ao banco de dados.');
});


function createData(dataObject){
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO tableName (column1, column2) VALUES (${dataObject.data1}, ${dataObject.data2})`;
        connection.query(sql, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            } 
        })
    });
}

function findOneData(id){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM tableName WHERE id = ${id}`;
        connection.query(sql, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            } 
        })
    });
}

function findAllData(){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM tableName`;
        connection.query(sql, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            } 
        })
    });
}
/*
    Create more 'find' functions according to the needs of the project 
*/

function updateData(id){
    return new Promise((resolve, reject) => {
        const sql = `DELETE tableName WHERE id = ${id}`;
        connection.query(sql, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            } 
        })
    });
}

function deleteData(id){
    return new Promise((resolve, reject) => {
        const sql = ``;
        connection.query(sql, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            } 
        })
    });
}

module.exports = {
    createData,
    findOneData,
    findAllData,
    updateData,
    deleteData
}
