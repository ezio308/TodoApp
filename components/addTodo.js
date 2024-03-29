import React , {useState} from 'react';
import { StyleSheet, Text, TextInput, View  } from 'react-native';

export default function AddTodo() {
   
    const[text,setText] = useState('');
    
    const changeHandler = (val) => {
      setText(val);
    }
   
   
    return (
      <View>
        <TextInput 
        style={styles.input}
        placeholder='new Todo ...'
        on onChangeText={changeHandler}
        />
      </View>
    )
}

const styles = StyleSheet.create ({
    input : {
        marginBottom : 10, 
        paddingHorizontal : 8,
        paddingVertical : 6,
        borderBottomWidth : 1,
        borderBottomColor: '#ddd',

        
    }
    
})
