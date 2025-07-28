const _Service = require('../services/services');

// USER

const userCreate = async (req,res)=> {
    try {

        const _return = await _Service.serviceUserCreate(req.body)

        res.status(_return.httpStatus).json({
            message:_return.message,
            stackStatus:_return.stackStatus
        })

    } catch (error) {

        res.status(400).json({
            message:`Houve erro na requisição de criaçao de usuario, dados invalidos`,
            stackStatus:'error',
            error:`${error}`
        })

    }
}

// CRYPTO

const keyGen = async (req,res)=>{
     try {

        const {private, public} = await _Service.serviceGenerateKeyCriptoSync(req.body)
        
        res.status(201).json({
            private, 
            public
        })

    } catch (error) {

        res.status(400).json({
            message:`Houve erro na requisição de geração de chave`,
            error:`${error}`
        })

    }
}

module.exports = { userCreate, keyGen };