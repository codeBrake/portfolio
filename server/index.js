require('dotenv').config()
const express = require('express'),
    app = express(),
    // session = require('express-session'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    {CONNECTION_STRING, SERVER_PORT: PORT, SESSION_SECRET} = process.env,
    controller = require('./controller/controller')


app.use(bodyParser.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('connected')
})

// app.use(session({
//     secret: SESSION_SECRET,
//     resave: true,
//     saveUninitialized: false
// }))


app.post('/api/contact', controller.addContacts)









app.listen(PORT, () => {
    console.log('listening on port', PORT)
})