import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import TextInput from '../components/TextInput';
import { request } from '../config/api';
import { useAppContext } from '../context/context';
import { getToken, saveToken } from '../utils/helpers';
import axios from "axios";

function Login(props) {
    const [formstate,setFormstate]=useState({})
    const {setUser,setToken}=useAppContext()
    const navigator=useNavigation()
    function changeForm(e){
        setFormstate({...formstate,[e.name]:e.value})
    }
    const login=()=>{
        axios.post('/signin',formstate).then(async res=>{
            const {__v,token,...user}=res.data
            setUser({...user})
            await saveToken(token)
            setToken(token)
            navigator.replace('Dashboard')
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center', backgroundColor:'lightgray'}}>
            <View style={{width:'80%',backgroundColor:'white', paddingHorizontal:20,paddingVertical:70, borderRadius:15}}>
                <View style={{alignItems:'center',marginBottom:20}}>
                <Text style={{fontWeight:'900', fontSize:30}}>
                    Login
                </Text>
                </View>
                <TextInput name="email" changeFunction={changeForm} label='E-Mail' />
                <TextInput name="password" changeFunction={changeForm} label='Password' secure={true} />
                <TouchableOpacity onPress={login}>
                <View style={{backgroundColor:'orange', borderRadius:30}}>
                <Text style={{fontWeight:'bold',color:'white',alignSelf:'center',marginVertical:10}} onPress={login}> Login </Text>
                </View>
                </TouchableOpacity>
                <View style={{marginTop:10, flexDirection:'row', justifyContent:'space-between'}}>
                    <Text>Do you haven't an account?</Text>
                    <TouchableOpacity onPress={()=>{
                        navigator.replace('Register')
                    }}>
                    <Text style={{color:'orange'}}>Try Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Login;