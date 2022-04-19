import React from 'react';
import {View,Text,Image,TouchableOpacity} from "react-native";

function LinkCard({ogTitle,ogImage,ogDescription,ogSiteName}) {
    return (
        <TouchableOpacity onPress={()=>{

        }}>
            <View style={{borderRadius:30 ,backgroundColor:'lightgrey',overflow:'hidden'}}>
                <View>
                    <Image source={{
                        uri: ogImage ? ogImage.url : 'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg'
                    }} style={{height:150,width:'100%'}} />
                </View>
                <View style={{padding:15}}>
                    <View style={{marginTop:5}}>
                        <Text>{ogTitle}</Text>
                    </View>
                    <View style={{marginTop:5}}>
                        <Text>{ogDescription}</Text>
                    </View>
                </View>

            </View>
        </TouchableOpacity>
    );
}

export default LinkCard;