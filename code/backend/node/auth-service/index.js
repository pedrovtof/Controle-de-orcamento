const express = require('express')
const app = express()
app.use(express.json())
const port = 8081

app.get('/', (req, res) => {
  res.json({message:'Hello World!'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})