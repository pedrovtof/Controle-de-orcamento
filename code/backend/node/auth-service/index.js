const express = require('express')
const cors = require('cors')
const _Routes = require('./src/routes/routes')

const app = express()
const port = 8081

app.use(cors())
app.use(express.json())

app.use('/',_Routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})