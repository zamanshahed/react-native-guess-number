import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card:{
    shadowColor: '#bbb',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 15,
    shadowOpacity: 0.3,
    elevation: 10,
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 7
  }
});

export default Card;
