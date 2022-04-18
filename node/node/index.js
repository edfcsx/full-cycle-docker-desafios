const express = require('express')
const mysql = require('mysql')
const fs = require('fs')

const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: '',
    database: 'nodedb'
}

app.get('/', (req, res) => {
    const html = fs.readFileSync('./index.html', { encoding: 'utf-8' })
    res.header('Content-Type', 'text/html').send(html)
})

app.get('/insert', (req, res) => {
    if (!req.query.user) {
        res.json({ message: 'User: not founded' })
    }

    const connection = mysql.createConnection(config)
    const sql = `INSERT INTO people(name) values ('${req.query.user}')`
    
    connection.query(sql, (error, result, fields) => {
        if (error) {
            res.json({ message: error, error: true })
        } else {
            res.json({ message: `User: ${req.query.user} registred successful!`, error: false })
        }

        connection.end()
    })
})

app.get('/load-users', (req, res) => {
    const connection = mysql.createConnection(config)
    const sql = 'SELECT * FROM people'

    connection.query(sql, (error, result, fields) => {
        if (error) {
            res.json({ data: [], error: true })
        } else {
            res.json({ data: result, error: false })
        }

        connection.end()
    }) 
})

app.listen(port, () => {
    console.log('App is running on port ', port)
})
