import config from '../config'
import TokenService from './token-service'

const ProductApiService = {
    getProducts(){
        return fetch(`${config.API_ENDPOINT}/products`,{
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`
            },
        })
        .then((res)=>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    },
    getProductsById(productId){
        return fetch(`${config.API_ENDPOINT}/products/${productId}`,{
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`
            },
        })
        .then((res)=>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    },
    postProduct(newProduct){
        console.log(newProduct)
        return fetch(`${config.API_ENDPOINT}/products`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newProduct)
    })
            .then(res =>
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
}
}

export default ProductApiService