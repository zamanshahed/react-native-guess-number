import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "./Components/Header";
import StartGameScreen from "./Screens/StartGameScreen";
import GameScreen from "./Screens/GameScreen";
import GameOverScreen from "./Screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = (numberOfRounds) => {
    setGuessRounds(numberOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = <GameOverScreen />;
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
