
const urlServices = {
    'api-auth-service':'http://192.168.0.138:8000'
}

export const envForDev = {
    'api-auth-service':{
        'test':`${urlServices['api-auth-service']}/api/auth/test`
    }
}

export default envForDev