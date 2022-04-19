import React from 'react';
import Dashboard from "../screens/Dashboard";
import Login from "../screens/Login";
import Register from "../screens/Register";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useAppContext} from "../context/context";
import {Text} from 'react-native'
import {Ionicons} from "@expo/vector-icons";
import HeaderExit from "../components/HeaderExit";
import Links from "../screens/Links";
import Settings from "../screens/Settings";
const Stack=createNativeStackNavigator()

function Wrapper(props) {
    const {token}=useAppContext()
    console.log(token)

    return (
        <NavigationContainer>

                {token==null ? <Stack.Navigator initialRouteName='Login'  >
                    <Stack.Screen name="Login" component={Login} options={{
                        headerShown:false
                    }} />
                    <Stack.Screen name="Register" component={Register} options={{
                        headerShown:false
                    }} />
                </Stack.Navigator> : <Stack.Navigator initialRouteName='Dashboard'  >
                    <Stack.Screen name="Dashboard" component={Dashboard} options={{
                    headerRight:()=> <HeaderExit />,
                    title:'Home'
                }} />
                    <Stack.Screen name="Links" component={Links} options={{
                        headerRight:()=> <HeaderExit />,
                    }} />
                    <Stack.Screen name="Settings" component={Settings} options={{
                        headerRight:()=> <HeaderExit />,
                    }} />
                </Stack.Navigator>}




        </NavigationContainer>

    );
}

export default Wrapper;