import axios from "axios";

function extractToken(){
    const token = localStorage.getItem('token')
    if(token){
        const jwtToken = JSON.parse(token)
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