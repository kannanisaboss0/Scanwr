import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions'
import {BarCodeScanner} from 'expo-barcode-scanner';
import {Header} from 'react-native-elements'

 export default class Scan extends React.Component{
     constructor(){
         super();
         this.state={
         scanned:false,
         hasPermissionScan:null,
         hasPermissionScan2:null,
         scannedData:'',
         buttonState:'normal',
         permission:false
         }
     }
     getCamera=async()=>{
 
        const {Ask}=await Permissions.askAsync(Permissions.CAMERA)
        const {Ask2}=await Permissions.askAsync(Permissions.LOCATION)
 
  
        this.setState({
            hasPermissionScan:Ask==="granted",
            hasPermissionScan2:Ask2==="granted",
            buttonState:'clicked',
            scanned:false,
          
        })
        return(
            <View>
                
            </View>
        )
      
    }
       
     
handleScanner=async(data)=>{
        this.setState({
            scanned:true,
            buttonState:'normal',
            scannedData:data
        })
    }   

     render(){
       
         const p=this.state.hasPermissionScan
             if(this.state.buttonState==="clicked"&&p){
                 return(
             <View >
                  <Header
             
             
             centerComponent={{text:'Scanner',style:{fontWeight:"bold",fontSize:30}}}
             />
                 <BarCodeScanner style={StyleSheet.absoluteFillObject} onBarCodeScanned={this.handleScanner}/>
                 
             </View>
                 )
             }
             else if(this.state.buttonState==="normal"){
                 return(
                     <View>
                          <Header
             
             
             centerComponent={{text:'Scanner',style:{fontWeight:"bold",fontSize:30}}}
             />
                 <Text>
                     {
                      p===true?
                      this.state.scannedData:
                      "Please Turn On Camera"   
                     }

                 </Text>
                  <TouchableOpacity style={{marginLeft:900,marginTop:500,borderWidth:2,borderColor:"black",borderRadius:25,width:150}} onPress={
                      this.getCamera   
                  }>
                  <Text style={{fontSize:30,marginLeft:40}}>Scan</Text>
               </TouchableOpacity>
               </View>
                 )
             }
             
     }
     
 }