import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Scan from './Screens/Scan'
import List from './Screens/List'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
export default function App() {
  return (
    <View style={{flex:1}} >
     <AppContainer/>
    </View>
  );
}
const TabNavigator= createBottomTabNavigator({
  Lister:{screen:List},
  Scanner:{screen:Scan},
  
  

})
const AppContainer =createAppContainer(TabNavigator)

