import { StatusBar } from 'expo-status-bar';
import {  Text, View,StyleSheet, SafeAreaView } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import Register from './screens/Register';
import MainContext, {useAppContext} from './context/context';

import Wrapper from "./Navigation/Wrapper";


export default function App() {
  return (
      <MainContext>
        <Wrapper />
      </MainContext>

  );
}

