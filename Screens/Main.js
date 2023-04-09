import * as React from 'react';
import { Button,TextInput, Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { useState } from 'react';
import axios from 'axios';
// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
export default function App() {
const [input,setInput] =useState('')
const [data,setData] =useState('')
const handleConnection=async()=>{
  //console.log("Hello");
  const response=await axios.post('https://api.openai.com/v1/completions',{
      //body
        "model": "text-davinci-003",
        "prompt": input,
        "temperature": 0.7,
        "max_tokens":10
      
  },{
    headers:{
      "Content-Type":"application/json",
      "Authorization": `Bearer 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`
    }
  }).then((response)=>{
    //console.log(response.data.choices[0].text);
    setData(response.data.choices[0].text)
  }).catch((error)=>{
    console.log(error)
  })
}

  
  return (
    <View style={styles.appContainer}>
      <TextInput style={styles.input} placeholder='Enter input' onChangeText={t=>setInput(t)}></TextInput>
      <Button title="Check Connection" onPress={handleConnection}></Button>
      <Text style={styles.res}>{data}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop:50,
    paddingHorizontal:10,
    alignItems:'center'
  },
  res:{
    
  },
  input:{
    paddingBottom:20,
    fontSize:24,
    borderWidth:1,
    marginBottom:10,
    width:'60%'
  }
});