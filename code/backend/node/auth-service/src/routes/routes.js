const express = require('express')
const router = express.Router()
const _Controller = require('../controllers/controller')

// HELP ROUTE

router.get('/test', (req,res)=>{
  res.json({message:'Test route sucess'})
})

router.get('/help/routes', (req,res)=>{
  res.json({list:[
        {
            "route":"/",
            "method":"get",
            "columns":"message"
        },
        {
            "route":"/test",
            "method":"get",
            "columns":"message"
        },
        {
            "route":"/?",
            "method":"?",
            "columns":"message"
        },
        {
            "route":"/help/routes",
            "method":"get",
            "columns":"list:[{route,columns},...]"
        },
        {
            "route":"/user/create",
            "method":"post",
            "columns":"message"
        },
        {
            "route":"/crypto/keygen",
            "method":"post",
            "columns":"private, public"
        }
  ]})
})

// AUTH ROUTE

router.post('/user/create',_Controller.userCreate)

// CRYPTO ROUTE

router.post('/crypto/keygen',_Controller.keyGen)

// DEFAULT ROUTE

router.get('/', (req, res) => {
  res.json({message:'Root route is empty'})
})

router.use((req,res)=>{
  res.status(404).json({message:'This route does not exist'})
})

module.exports = router;
