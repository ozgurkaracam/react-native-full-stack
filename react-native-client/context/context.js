import React, { createContext, useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import axios from 'axios'
import { API_URL, request } from '../config/api';
import { getToken,deleteToken } from '../utils/helpers';


const mainCntxt=createContext()

export const useAppContext=()=>{
    return useContext(mainCntxt)
}


let req;

function MainContext({children}) {

    const [user,setUser]=useState()
    const [token,setToken]=useState()
    const [reqq,setReqq]=useState({})
    useEffect(async ()=>{
        const tkn=await getToken()
        setToken(tkn)
        axios.defaults.baseURL='http://localhost:3000/api'
        axios.interceptors.request.use(
            async config => {
                const token = tkn
                if (token) {
                    config.headers.Authorization = "Bearer "+token
                }
                return config
            },
            error => {
                return Promise.reject(error)
            }
        );

    },[token])

    const  logout= async()=>{
        await deleteToken()
        setToken(null)
        setUser(null)
    }

    
    return (
        <mainCntxt.Provider value={{
            user,
            setUser,
            token,
            logout,
            setToken
        }} >
            {children}
        </mainCntxt.Provider>
    );
}

export default MainContext;