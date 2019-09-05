import config from '../config'
import TokenService from './token-service'

const ProductApiService = {
    getProducts(){
        return fetch(`${config.API_ENDPOINT}/products`,{
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
        .then((res)=>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    },
    getMyProducts(){
        
        return fetch(`${config.API_ENDPOINT}/products/my`,{
            
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
        // .then((!res.ok)
        //         ? res.json().then(e => Promise.reject(e))
        //         : res.json())
        .then((res)=>res.json())
    },
    getProductsById(productId){
        return fetch(`${config.API_ENDPOINT}/products/${productId}`,{
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
        .then((res)=>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    },
    postProduct(newProduct){
        
        return fetch(`${config.API_ENDPOINT}/products`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(newProduct)
    })
            .then(res =>
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
},
    patchProduct(productId, editProduct){
        return fetch(`${config.API_ENDPOINT}/products/${productId}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(editProduct)
        })
        .then((res)=>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    }
}

export default ProductApiService