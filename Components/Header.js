import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import Colors from "../Constants/Colors";
import TitleText from "../Components/TitleText";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 78,
    paddingTop: 25,
    backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: Platform.OS === "ios" ? "#ccc" : "transparent",
    borderBottomWidth: Platform.OS === "ios" ? 1 : 0,
  },
  headerTitle: {
    color: Platform.OS === "ios" ? Colors.primary : "white",
    fontSize: 28,
  },
});

export default Header;
