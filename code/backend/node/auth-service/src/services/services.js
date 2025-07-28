const {
    generateKeyPairSync,
    publicEncrypt, 
    privateDecrypt
} = require('crypto')
const  {privateKey, passphrase} = require('../config/env.js')


// USER

const serviceUserCreate = async(data)=>{

    try {

        let username = privateDecrypt(
            {
                key: privateKey,
                passphrase: passphrase
            },
            Buffer.from(data['username'], 'hex')
        )

        let email = privateDecrypt(
            {
                key: privateKey,
                passphrase: passphrase
            },
            Buffer.from(data['email'], 'hex')
        )

        let password = privateDecrypt(
            {
                key: privateKey,
                passphrase: passphrase
            },
            Buffer.from(data['password'], 'hex')
        )

        username = username.toString('utf-8')
        email = email.toString('utf-8')
        password = password.toString('utf-8')

        if (!username || !email || !password) {
            return {
                    httpStatus: 200,
                    message:'Campos incompletos, por favor avaliar',
                    stackStatus: 'warning'
                }
        } 

        if(username.length < 3 || email.length < 3 ) {
            return {
                    httpStatus: 200,
                    message:'Email ou nome com menos de 3 letras, por favor avaliar',
                    stackStatus: 'warning'
                }
        }

        let regasp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/

        if(password.length < 6 ||  !regasp.test(password)) {
            console.log(password)
            return {
                    httpStatus: 200,
                    message:'Senha precisa de ao menos 6 caracteres, com letras maiúsculas, minúsculas, números e caractere especial',
                    stackStatus: 'warning'
                }
        }

        else {
            return {
                    httpStatus: 201,
                    message:'OUTRAS VALIDACOES',
                    stackStatus: 'sucess'
            }
        }

    } catch (error) {
        console.log(error)
        return {
                httpStatus: 200,
                message:`Houve erro ao tratar os dados no servidor para criar o usuário`,
                stackStatus: 'error'
            }
    }
   
}

// CRYPTO

const serviceGenerateKeyCriptoSync = async(data)=>{
    
    const {
        privateKey,
        publicKey,
    } = generateKeyPairSync( 'rsa',{
            modulusLength: 4096,
            publicKeyEncoding: {
                type: 'spki',
                format: 'pem',
            },
            privateKeyEncoding: {
                type: 'pkcs8',
                format: 'pem',
                cipher: 'aes-256-cbc',
                passphrase: passphrase,
            },
    })

    return {
        private:`${privateKey}`,
        public:`${publicKey}`
    }

}

module.exports = {serviceUserCreate, serviceGenerateKeyCriptoSync}