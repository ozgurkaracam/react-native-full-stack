import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View,TouchableOpacity} from 'react-native';
import {request} from '../config/api';
import {useAppContext} from '../context/context';
import {getToken} from '../utils/helpers';
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import Tabs from "./Tabs";


function Dashboard(props) {

    const {token, user, reqq,setToken,logout} = useAppContext()
    const navigation=useNavigation()
    useEffect(async () => {
        axios.get('/me').then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])


    return (
        <Tabs>

                <View style={{padding: 30}}>
                    <Text>
                        {token}
                    </Text>
                    <Text>
                        Deneme
                    </Text>
                    <TouchableOpacity onPress={logout}>
                        <Text>
                            Çıkış Yap
                        </Text>
                    </TouchableOpacity>
                </View>
        </Tabs>
    );
}

export default Dashboard;