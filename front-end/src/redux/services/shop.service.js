import http from '../axios'

class ShopServices {

    getAll(){
        return http.get("/products/allProducts")
    }
    getById(id){
        return http.get(`/products/product/${id}`)
    }
    create(data){
        return http.post("/products/create", data)
    }
    update(id, data){
        return http.put(`/products/update/${id}`, data)
    }
    delete(id){
        return http.delete(`/products/delete/${id}`)
    }

}
const shopServices = new ShopServices()

export default shopServices;