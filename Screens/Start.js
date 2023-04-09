import * as React from 'react';
import { Image,Text, View, StyleSheet,TextInput,Button } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function App({ navigation }) {
  function toTodo(){
    navigation.navigate('Main');
  }
  return (
    <View style={styles.container}>
      <View style={styles.img}>
      <Image
          style={styles.chatgpt}
          source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUIwD84MUO1g9n6U0VWNJKRK0pPFVGTXsBeQ3KTeeGTpxX7VKB3-rMoW1J2bvU2blIFiM&usqp=CAU'}}
      />
      <Text style={styles.text}>By Sahitya</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.textinput} placeholder="Enter your name"/>
      </View>
      <View style={styles.button}>
        <Button title="Continue" onPress={toTodo}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:50,
    paddingHorizontal:10
  },
  chatgpt:{
    paddingTop:150,
    justifyContent: 'center',
    width:'40%',
    height:'30%',
    alignSelf:'center'
  },
  text:{
    paddingTop:20,
    textAlign:'center',
  }

});