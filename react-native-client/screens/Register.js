import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, Text, View,TouchableOpacity } from 'react-native';
import TextInput from '../components/TextInput';
import { AsyncStorage } from 'react-native';
import { useAppContext } from '../context/context';
import { request } from '../config/api';

function Register(props) {
    const [formstate,setFormstate]=useState({})
    const navigator=useNavigation()
    function changeForm(e){
        setFormstate({...formstate,[e.name]:e.value})
    }

    const register=()=>{
        request.post('/signup',formstate).then(res=>{
            console.log(res.data)
        }).catch(err=>{
            console.log(err)
        })

    }

    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center', backgroundColor:'lightgray'}}>
            <View style={{width:'80%',backgroundColor:'white', paddingHorizontal:20,paddingVertical:70, borderRadius:15}}>
                <View style={{alignItems:'center',marginBottom:20}}>
                <Text style={{fontWeight:'bold', fontSize:30}}>
                    Register
                </Text>
                </View>
                <TextInput name="name" changeFunction={changeForm} label='Name' />
                <TextInput name="email" changeFunction={changeForm} label='E-Mail' />
                <TextInput name="password" changeFunction={changeForm} label='Password' secure={true} />
                <TouchableOpacity onPress={()=>{
                    register()
                }}>
                <View style={{backgroundColor:'orange', borderRadius:30}}>
                <Text style={{fontWeight:'bold',color:'white',alignSelf:'center',marginVertical:10}} onPress={()=>{
                    register()
                }}> Login </Text>
                </View>
                </TouchableOpacity>
                <View style={{marginTop:10, flexDirection:'row', justifyContent:'space-between'}}>
                    <Text>Do you have an account?</Text>
                    <TouchableOpacity onPress={()=>{
                        navigator.replace('Login')
                    }}>
                    <Text style={{color:'orange'}}>Try Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Register;