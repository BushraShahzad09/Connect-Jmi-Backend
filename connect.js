import mysql, { createConnection } from 'mysql'

export const db=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Arsalan1234',
    database: 'test2'
})