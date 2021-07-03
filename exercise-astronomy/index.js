require('./config/db')
const express = require('express')
const app = express()
const path = require('path');

const {PORT} = require('./constants')

app.use(express.json())

app.use('/astronomy', require('./routes'))

app.use((req, res, next) => {
    next({ info: new Error("Ruta invalida")})
})

app.use(({status = 400, info}, req, res, next) => {
    res.status(status).json({
        success:false,
        message: info.message, 
    })
})

app.listen(PORT, () => {
    console.info(`Servidor funcionando en puerto ${PORT}` )
})