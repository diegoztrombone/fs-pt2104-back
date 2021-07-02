require('./config/database')
const express = require('express')
const app = express()
const path = require('path');

const { PORT } = require('./constants')

app.use(express.json())

app.use(require('./routes'))

app.use('/public', express.static(path.join(__dirname, 'uploads')))

app.use((req, res, next) => {
  next({ info: new Error('La ruta no vale') })
})

app.use(({ status = 400, info }, req, res, next) => {
  res.status(status).json({
    success: false,
    message: info.message,
  })
})

app.listen(PORT, () => {
  console.log(`Funcionando en puerto: ${PORT}`)
})
