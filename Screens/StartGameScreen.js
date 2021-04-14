import React, {useState} from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

import Card from '../Components/Card';
import Colors from '../Constants/Colors';

const StartGameScreen = props => {

  const [userNumber, setUserNumber] = useState('');

  return(
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new game !</Text>

      <Card style={styles.inputContainer}>
        <Text>Choose a number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <View style={styles.button}><Button title='Reset' onPress={()=>{}} color={Colors.reset}/></View>
          <View style={styles.button}><Button style={styles.button} title='Confirm' onPress={()=>{}} color={Colors.accent} /></View>
        </View>
      </Card>
    </View>
  );
};


const styles = StyleSheet.create({
  screen:{
    flex:1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  title:{
    fontSize: 30,
    marginVertical: 10
  },
  inputContainer:{
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  buttonContainer:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button:{
    width: '40%'
  }
});

export default StartGameScreen;
