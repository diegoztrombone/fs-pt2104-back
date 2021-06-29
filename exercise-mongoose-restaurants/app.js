require("./configs/database")

const express = require('express')
const app = express()

const {PORT} = require('./constants')

app.use(express.json())

app.use(require("./routes"))

app.listen(PORT, () => {
    console.log(`Funcionando en: http://localhost:${PORT}`)
})