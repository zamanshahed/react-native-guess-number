import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import Colors from "../Constants/Colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>The game is over!</Text>
      <Text style={styles.text}>Score: {props.roundsNumber}</Text>
      <Text style={styles.text}>Actual Guess: {props.userNumberWas}</Text>
      <Button
        style={styles.button}
        title="new game"
        onPress={props.onRestart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "red",
    fontWeight: "bold",
    padding: 3,
  },
  button: {
    padding: 6,
    margin: 15,
  },
});

export default GameOverScreen;
