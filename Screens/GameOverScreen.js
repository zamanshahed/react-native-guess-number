import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";

import Colors from "../Constants/Colors";
import BodyText from "../Components/BodyText";
import TitleText from "../Components/TitleText";
import MainButton from "../Components/MainButton";

const GameOverScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The game is over!</TitleText>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/success.png")} //for local image
            // source={{
            //   uri:
            //     "https://cdn.pixabay.com/photo/2017/02/01/23/26/mountain-2031682_1280.jpg",
            // }} //for network image
            resizeMode="cover"
          />
        </View>
        <View style={styles.resultContainer}>
          <BodyText style={styles.text}>
            You phone needed{" "}
            <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
            guess the number{" "}
            <Text style={styles.highlight}>{props.userNumberWas}</Text>
          </BodyText>
        </View>
        <View style={styles.buttonContainer}>
          <MainButton onPress={props.onRestart}>New Game</MainButton>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  text: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 480 ? 16 : 20,
  },
  buttonContainer: {
    marginVertical: 5,
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height / 60,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.6,
    height: Dimensions.get("window").width * 0.6,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 2,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
    marginHorizontal: 25,
  },
});

export default GameOverScreen;
