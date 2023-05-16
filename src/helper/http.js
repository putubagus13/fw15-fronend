import axios from "axios";

const http = (token)=>{
    const headers =  {}
    if(token){
        headers.Authorization = `Bearer ${token}`
    }
    return axios.create({
        headers,
        baseURL: "http://localhost:8888"
        // "https://anxious-boa-moccasins.cyclic.app"
    })
}

export default http