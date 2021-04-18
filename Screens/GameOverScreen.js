import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import Colors from "../Constants/Colors";
import BodyText from "../Components/BodyText";
import TitleText from "../Components/TitleText";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText style={styles.text}>The game is over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          // source={require("../assets/success.png")}    //for local image
          source={{
            uri:
              "https://cdn.pixabay.com/photo/2017/02/01/23/26/mountain-2031682_1280.jpg",
          }} //for network image
          resizeMode="cover"
        />
      </View>
      <BodyText style={styles.text}>Score: {props.roundsNumber}</BodyText>
      <BodyText style={styles.text}>
        Actual Guess: {props.userNumberWas}
      </BodyText>
      <View style={styles.buttonContainer}>
        <Button title="new game" onPress={props.onRestart} />
      </View>
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
  buttonContainer: {
    marginVertical: 15,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 12,
  },
});

export default GameOverScreen;
