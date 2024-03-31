import http from '../axios'

class BlogServices {

    getAll(){
        return http.get("/blog/allposts")
    }
    getById(id){
        return http.get(`/blog/post/${id}`)
    }
    create(data){
        return http.post("/blog/create", data)
    }
    update(id, data){
        return http.put(`/blog/update/${id}`, data)
    }
    delete(id){
        return http.delete(`/blog/delete/${id}`)
    }

}
const blogServices = new BlogServices()

export default blogServices;