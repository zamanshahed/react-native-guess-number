import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

import Colors from '../Constants/Colors';

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
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle:{
    color: '#fff',
    fontSize: 18,
  }
});

export default Header;
