const express = require('express')
const db = require("./db.js")

const app = express()
const port = 3000

app.use(express.json())

app.post('/', (req, res) => {
  res.send(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
