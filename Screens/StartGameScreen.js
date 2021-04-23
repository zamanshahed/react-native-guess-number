import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import Card from "../Components/Card";
import Input from "../Components/Input";
import Colors from "../Constants/Colors";
import NumberContainer from "../Components/NumberContainer";
import BodyText from "../Components/BodyText";
import TitleText from "../Components/TitleText";
import MainButton from "../Components/MainButton";

const StartGameScreen = (props) => {
  const [userNumber, setUserNumber] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNuber] = useState();

  const numberInputHandler = (inputText) => {
    setUserNumber(inputText.replace(/[^0-9]/g, ""));
  };

  const resetHandler = (inputText) => {
    setUserNumber("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(userNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Select number between 1-99", [
        { text: "OK", style: "destructive", onPress: resetHandler },
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedNuber(chosenNumber);
    setUserNumber("");
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.confirmContainer}>
        <BodyText>Confirmed Number:</BodyText>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={() => props.onStartGame(selectedNumber)}>
          Start Game
        </MainButton>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <TitleText>Start a new game !</TitleText>

        <Card style={styles.inputContainer}>
          <Text>Choose a number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={userNumber}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetHandler}
                color={Colors.reset}
              />
            </View>
            <View style={styles.button}>
              <Button
                style={styles.button}
                title="Confirm"
                color={Colors.accent}
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </Card>
        <View>{confirmedOutput}</View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  inputContainer: {
    width: '80%',
    minWidth: 300,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: "40%",
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  confirmContainer: {
    fontSize: 19,
    marginVertical: 20,
    padding: 12,
    alignItems: "center",
  },
});

export default StartGameScreen;
