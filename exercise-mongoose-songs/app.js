require('./configs/db')
const express = require('express')
const app = express()
const port = 3001


app.use(express.json())

app.use("/", require("./routes"))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
