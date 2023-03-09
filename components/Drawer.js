import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
const Drawer = () => {
  return (
    <View style={styles.drawer}>
      <View style={styles.close_container_div}>
        <View style={styles.close_container}>
          <AntDesign name="close" size={35} color="#FFFFFF"></AntDesign>
        </View>
      </View>

      <View style={styles.new_chat}>
        <Feather name="plus-square" size={35} color="#FFFFFF"></Feather>
        <Text>New Chat</Text>
      </View>

      <View style={styles.history}>
        <AntDesign name="close" size={35} color="#FFFFFF"></AntDesign>
        <Text>History</Text>
      </View>
    </View>
  );
};

export default Drawer;

const P100 = '100%';
const P90 = '90%';
const P50 = '60%';
const P40 = '50%';
const styles = StyleSheet.create({
  drawer: {
    width: P50,
    height: P100,
    backgroundColor: '#1A1919',
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1111111,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  close_container_div: {
    width: P90,
    // backgroundColor: '#F65F65',
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  close_container: {
    backgroundColor: '#201F1F',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    borderRadius: 50,
    marginRight: 10,
  },

  new_chat: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
