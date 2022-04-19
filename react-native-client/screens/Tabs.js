import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

function Tabs({children}) {
    const navigation=useNavigation()
    const tabList = [
        {
            label: 'Home',
            icon:'home',
            target:'Dashboard'
        },
        {
            label: 'Links',
            icon:'list',
            target:'Links'
        },
        {
            label: 'Settings',
            icon:'settings',
            target:'Settings'
        }
    ];
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                {children}
            </View>
            <View style={{backgroundColor: 'lightgray', height: 100, flexDirection: 'row'}}>
                {tabList.map(tab => (
                    <TouchableOpacity onPress={()=>{
                        navigation.replace(tab.target)
                    }} key={tab.label} style={{flex: 1,alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{alignItems:'center'}}>

                            <Ionicons style={{marginBottom:4}} size={30} name={tab.icon} color="red" />
                            <Text style={{fontWeight: 'bold', color:"red"}}>{tab.label}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

export default Tabs;