import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.navbar_left_logo}>BrainMeld</Text>

      <View style={styles.messagebox}>
        <MaterialIcons
          name="menu"
          size={25}
          color="#000000"
          style={styles.message_icon}></MaterialIcons>
      </View>
    </View>
  );
};

export default Navbar;
const P100 = '100%';
const styles = StyleSheet.create({
  navbar: {
    height: 50,
    width: P100,
    backgroundColor: '#1A1919',
    // position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // top: 0,
  },
  navbar_left_logo: {
    color: '#FFFFFF',
    fontFamily: 'Gilroy-Bold',
    fontSize: 25,
    marginLeft: 10,
  },
  messagebox: {
    width: 35,
    height: 35,
    backgroundColor: '#FFFFFF',
    // marginLeft: 5,
    marginRight: 10,
    // marginRight: 60,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    borderRadius: 100,
  },

  message_icon: {
    // marginRight: 15,
  },
});
