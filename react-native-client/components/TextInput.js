import React from 'react';
import { Text, TextInput, View } from 'react-native';

function TxtInput({label,name,secure=false,changeFunction}) {
    return (
        <View style={{paddingVertical:10}}>
            <Text>{label}</Text>
            <TextInput secureTextEntry={secure} onChangeText={(e)=>{
                changeFunction({name,value:e})
            }}   name={name} style={{borderBottomWidth:0.2, marginVertical:5}} />
        </View>
    );
}

export default TxtInput;