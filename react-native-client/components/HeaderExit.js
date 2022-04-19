import React from 'react';
import {Ionicons} from "@expo/vector-icons";
import {TouchableOpacity} from "react-native";
import {useAppContext} from "../context/context";

function HeaderExit(props) {
    const {logout} = useAppContext()
    return (
        <TouchableOpacity onPress={logout}>
            <Ionicons name="exit" size={32} color="orange" />
        </TouchableOpacity>
    );
}

export default HeaderExit;