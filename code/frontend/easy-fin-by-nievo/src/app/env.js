
const urlServices = {
    'api-auth-service':'http://localhost:8000', // IP do API GATEWAY
    'private-backend-api':'http://localhost:8081' // IP do servidor K8S com node
}

export const envForDev = {
    'api-auth-service':{
        'test':`${urlServices['api-auth-service']}/api/auth/test`,
        'localTest':`${urlServices['private-backend-api']}/test`,
        'CreateUser':`${urlServices['private-backend-api']}/user/create`
    },
    'crypto':{
        'publicKey':'-----BEGIN PUBLIC KEY-----\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAvPoAdC91IsN2nEHKn8a3\nCL9L4slioSE0K/9VGXS0TjsP8n2mxc+CZ0ilutphgUTlKqpqFqT2PuReeIdGi8X0\nLt7Pdn+hq5GqIUEV7J5CUMEwbL0gT3XXnlTbHYl/FUKvXI47w52jjGQgYwMVZi/p\nymXBlm9LAZn236fSDVRGM8KQMyxWQ8zHagahFqZ23AzgCIVT70hpajjoBvDn/bm7\nAcJJp0GUYlqEKDo67pBhoQvB1FeaMnUNMmDJmNVPvI5mpK28D4waDUT2YNArx1+t\nhPXimEpJ3xtSShIZz3SGQz4HHb/raQiP8D+67tvTaF7IdN9rAfOSdgmUD12GTibV\noJ8uNbunGpa6+aDLmmUs0P+yAQT5w/Jwe3ZqipNxzsdZXVlDqQ0VHKEJTu0/iZEb\nihvKvwZOYO1WaUZg+fbA3BxxVTEd6HC/t5d+dvzlJDrfHNMFdXgXY+zpXoeUR1va\nV1XHVHDrxEUWDQeLrC361XWU6A1R1lyVk7uS2RHK9qRhqE2W2JCNbMPuYFNR0gLA\ngEV+ktGfGv02Wos2IrgKu8qYKKl80HLaE1QtfUSF8MD9wk8mpYZz/Z4/a6yKLfOp\nlIYQr657Nz74fyyC1Y8otjLcYQvUjQnGkO57t4HYBKoZLXY0eFdELVGFo9tuoxRo\nWvZcsJiMzGX9apM3HCqdqSsCAwEAAQ==\n-----END PUBLIC KEY-----\n'
    }
}

export default envForDev