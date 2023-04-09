import { Button,TextInput,View, StyleSheet } from 'react-native';
import { useState }from 'react';
export default function Todoinput(props){
  const [enteredTodoText,setEnteredTodoText]=useState("");
  function todoInputHandler(enteredText){
    //console.log(enteredText);
    setEnteredTodoText(enteredText)
  }
  function addTodoHandler(){
    props.onAddTodo(enteredTodoText);
    //console.log(enteredTodoText);
  }
  return(
    <>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textinput} 
          placeholder="Enter your query!"
          onChangeText={todoInputHandler}
        />
        <Button title="Enter" onPress={addTodoHandler}/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor:'red'
  },
  textinput:{
    borderWidth:1,
    width:'70%',
    padding:8
  },
});