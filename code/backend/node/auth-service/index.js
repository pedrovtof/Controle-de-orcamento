const express = require('express')
const app = express()
app.use(express.json())
const port = 8081

app.get('/', (req, res) => {
  res.json({message:'Root route is empty'})
})

app.get('/test', (req,res)=>{
  res.json({message:'Test route'})
})

app.use((req,res)=>{
  res.status(404).json({message:'This route does not exist'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})