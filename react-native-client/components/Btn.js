import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";

function Btn({label,func}) {
    return (
        <TouchableOpacity onPress={func}>
            <View style={{backgroundColor:'orange', borderRadius:30, padding:10}}>
                <Text style={{fontWeight:'bold',color:'white',fontSize:20,alignSelf:'center'}} onPress={func}> {label} </Text>
            </View>
        </TouchableOpacity>
    );
}

export default Btn;