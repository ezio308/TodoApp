import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View , FlatList } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';


export default function App() {
  const [todos, setTodos] =useState([
    {text: 'buy coffee' , key : '1'},
    {text: 'create an app' , key : '2'},
    {text: 'play valorant' , key : '3'}
    
  ]);

  const pressHandler = (key) =>
  {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }
  
  
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTodo/>
        <View style={styles.list}>
           
           <FlatList
           data={todos}
           renderItem={({ item }) =>(
           <TodoItem item = {item} pressHandler={pressHandler} />
           
           )}
           
           />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  content : {
    padding : 40, 

  },
  list : {
    marginTop : 20,
  }
});
