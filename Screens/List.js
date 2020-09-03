import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';
import * as Permissions from 'expo-permissions'
import {BarCodeScanner} from 'expo-barcode-scanner'
import { render } from 'react-dom';

 export default class List extends React.Component{
     constructor(){
         super()
         this.state={
         text:'',
         array:[]
         }
         
     }
 
 render(){
     return(
         <View>
             <TextInput
             style={{borderColor:"black",height:30,borderWidth:2}}
             value={this.state.text}
             onChangeText={(text)=>{
                this.setState({
                    text:text
                })
             }}
             
             />
<TouchableOpacity onPress={()=>{
this.state.array.push(this.state.text)
}}>
    <Text>Car</Text>
</TouchableOpacity>
<Text>{this.state.text}</Text>
   </View>)}}