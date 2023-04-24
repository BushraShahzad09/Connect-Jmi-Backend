import mysql from 'mysql'

export const db=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hammad123',
    database: 'jmi_connect'
})