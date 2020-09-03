import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import *as Permissions from 'expo-permissions'
import {BarCodeScanner} from 'expo-barcode-scanner'
 export default class Scan extends React.Component{
     constructor(){
         super()
         this.state={
         scanned:false,
         hasPermissionScan:null,
         scannedData:'',
         buttonState:'normal',
         permission:false
         }
     }
     getCamera=async()=>{
        const {Ask}=await Permissions.askAsync(Permissions.CAMERA)   
        this.setState({
            hasPermissionScan:Ask==="granted",
            buttonState:'clicked',
            scanned:false,
        })
     }
    handleScanner=async(type,data)=>{
        this.setState({
            scanned:true,
            buttonState:'normal',
            scannedData:data
        })
    }   

     render(){
         const p=this.state.hasPermissionScan
             if(buttonState==="clicked"&&this.state.hasPermissionScan){
                 return(
             <View>
                 <TouchableOpacity onPress={this.getCamera}>
                    <Text>Scan</Text>
                 </TouchableOpacity>
             </View>
                 )
             }
             else if(buttonState==="normal"){
                 return(
                 <Text>
                     {
                      p===true?
                      this.state.scannedData:
                      "Please Turn On Camera"   
                     }

                 </Text>
                 )
             }
     }
 }