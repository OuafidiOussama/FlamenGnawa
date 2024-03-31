import http from '../axios'

class EventServices {

    getAll(){
        return http.get("/events/allEvents")
    }
    getById(id){
        return http.get(`/events/event/${id}`)
    }
    create(data){
        return http.post("/events/create", data)
    }
    update(id, data){
        return http.put(`/events/update/${id}`, data)
    }
    delete(id){
        return http.delete(`/events/delete/${id}`)
    }

}
const eventServices = new EventServices()

export default eventServices;