import axios from "axios"
import {getToken} from "../utils/helpers"

export const API_URL = "http://localhost:3000/api"

export const request = (token)=>{
    return axios.create({
        baseURL: API_URL,
        headers:{
            Authorization:`Bearer ${token || ''}`
        }
    })
}
