import React, {useState} from 'react';
import {View,Text,TextInput,StyleSheet} from "react-native";
import ogs from '@uehreka/open-graph-scraper-react-native'
import Tabs from "./Tabs";
import urlRegex from "url-regex";
import Btn from "../components/Btn";
import LinkCard from "../components/LinkCard";

function Links(props) {
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(false)
    const [response,setResponse]=useState({})

    const handleChange=async (text)=>{
        setLoading(true)
        if(urlRegex().test(text)){
            const options = { url: text };
            await ogs(options, (error, results, response) => {
                setError(error)
                if(!error){
                    setResponse(results)
                    console.log('results:', results)
                }
            });
        }
        setLoading(false)

    }

    return (
        <Tabs>
            <View style={{marginHorizontal:20, marginVertical:10}}>
                <TextInput autoCapitalize={"none"} autoCorrect={false} style={styles.textInput} onChangeText={handleChange} placeholder={"Paste URL"}   />
                <TextInput autoCapitalize={"none"} autoCorrect={false} style={styles.textInput} placeholder={"Title"}  />

                {!error && <LinkCard {...response} />}
                <View style={{marginTop:10}}>
                    <Btn label={loading ? "Please Wait..." : "Add URL!"} />
                </View>
            </View>
        </Tabs>
    );
}

const styles=StyleSheet.create({
    textInput:{
        borderWidth:1,
        marginBottom:10,
        borderRadius:20,
        borderColor:'gray',
        paddingHorizontal:20,
        paddingVertical:10,
        fontSize:20
    }
})

export default Links;