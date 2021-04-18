import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 28,
  },
});

export default Header;
