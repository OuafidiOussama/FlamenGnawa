import http from '../axios'

class UserServices {

    register(data){
        return http.post("/user/register", data)
    }

    login(data){
        return http.post("/user/login", data)
    }

}
const userServices = new UserServices()

export default userServices;