import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions'
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
             if(this.state.buttonState==="clicked"&&this.state.hasPermissionScan){
                 return(
             <View >
                 <BarCodeScanner style={StyleSheet.absoluteFillObject} onScan={this.handleScanner}/>
                 
             </View>
                 )
             }
             else if(this.state.buttonState==="normal"){
                 return(
                     <View>
                 <Text>
                     {
                      p===true?
                      this.state.scannedData:
                      "Please Turn On Camera"   
                     }

                 </Text>
                  <TouchableOpacity onPress={this.getCamera}>
                  <Text>Scan</Text>
               </TouchableOpacity>
               </View>
                 )
             }
             return null
     }
     
 }