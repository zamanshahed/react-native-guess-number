import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

import Colors from "../Constants/Colors";

const MainButton = (props) => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.buttonArea}>
      <ButtonComponent onPress={props.onPress}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonArea: {
    borderRadius: 30,
    overflow: "hidden",
  },
  buttonContainer: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 39,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "open-sans",
  },
});

export default MainButton;
