import axios from "axios";

function extractToken(){
    const userInfo = localStorage.getItem('userInfo')
    if(userInfo){
        const {jwtToken} = JSON.parse(userInfo)
        return jwtToken
    }
}

const api = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
        "Content-Type": 'application/json',
        "Authorization": `Bearer ${extractToken()}`
    }
})

export default api