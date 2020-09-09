import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';
import {Header} from 'react-native-elements'
 export default class List extends React.Component{
     constructor(){
         super()
         this.state={
         text:'Enter your list here',
         array:[],
         randomID:Math.random(Math.round(1,2000)),
         culm:0
         }
         
     }
 
 render(){
       
     return(
         <View>
             <Header
             
             
             centerComponent={{text:'Lister',style:{fontWeight:"bold",fontSize:30}}}
             />
             <TextInput
             style={{borderColor:"black",height:45,borderWidth:2,width:700,fontSize:30}}
             value={this.state.text}
             onChangeText={(text)=>{
                this.setState({
                    text:text,
                    culm:this.state.text+this.state.randomID
                })
             }}
             
             />
<TouchableOpacity style={{borderColor:"black",width:100,height:45,borderRadius:30,borderWidth:2}} onPress={()=>{
    if(this.state.text==='Enter your list here'||this.state.text===''){
        window.alert("Please enter a valid input")
    }
    else{
this.state.array.push(this.state.text)
this.state.text=this.state.array
for (var i in this.state.array){
    this.setState({
        text:'',
        culm:this.state.culm+1
    })
  
}}
}}>
    
    <Text style={{fontSize:30,marginLeft:20}}>Add</Text>
    </TouchableOpacity>
    
    <View>
{this.state.array.map((process,index)=>(
    <Text style={{marginLeft:900,fontWeight:"bold",fontSize:35,}}>{index+"."+process}</Text>
    
))}
    </View>
    


   </View>)

}}
   