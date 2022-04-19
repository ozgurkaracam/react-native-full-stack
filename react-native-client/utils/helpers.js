import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveToken(token){
    return await AsyncStorage.setItem('token',token);
}

export async function deleteToken(){
    return await AsyncStorage.removeItem('token')
}



export async function  getToken(){
    const token= await AsyncStorage.getItem('token')
    return token
}
