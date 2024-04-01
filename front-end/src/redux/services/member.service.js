import http from '../axios'

class MemberServices {

    getAll(){
        return http.get("/members/allmembers")
    }
    getById(id){
        return http.get(`/members/member/${id}`)
    }
    create(data){
        return http.post("/user/register", data)
    }
    update(id, data){
        return http.put(`/members/update/${id}`, data)
    }
    delete(id){
        return http.delete(`/members/delete/${id}`)
    }

}
const memberServices = new MemberServices()

export default memberServices;