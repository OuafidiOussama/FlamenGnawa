import http from '../axios'

class CategoryServices {

    getAll(){
        return http.get("/categories/allCategories")
    }
    getById(id){
        return http.get(`/categories/category/${id}`)
    }
    create(data){
        return http.post("/categories/create", data)
    }
    update(id, data){
        return http.put(`/categories/update/${id}`, data)
    }
    delete(id){
        return http.delete(`/categories/delete/${id}`)
    }

}
const categoryServices = new CategoryServices()

export default categoryServices;