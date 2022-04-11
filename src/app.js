const express = require('express')
const path = require('path')
const app = express()
var session = require('express-session');

/*  */
const mainRouter = require('./routes/main')

/* midlewares */
app.set("view engine", "ejs")
app.set("views" ,path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "../public")))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(session({
    secret: 'practica',
    resave: false,
    saveUninitialized: true
  }));

/* routes */
app.use('/', mainRouter)


const PORT = 3000
app.listen(PORT, () => console.log(`puerto levantado 
    http://localhost:${PORT}`
))