import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Header = props => {
    return(
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{props.title}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  header:{
    width: '100%',
    height: 78,
    paddingTop: 25,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle:{
    color: 'cyan',
    fontSize: 18,
  }
});

export default Header;
