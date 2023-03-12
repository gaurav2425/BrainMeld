import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Drawer = () => {
  return (
    <View style={styles.drawer}>
      <View style={styles.drawer_upperpart}>
        <View style={styles.close_container_div}>
          <View style={styles.close_container}>
            <AntDesign name="close" size={35} color="#FFFFFF"></AntDesign>
          </View>
        </View>

        <View style={styles.new_chat}>
          <Feather
            name="plus-square"
            size={30}
            color="#000000"
            style={styles.plus_icon}></Feather>
          <Text style={styles.new_chat_txt}>New Chat</Text>
        </View>

        <View style={styles.history}>
          <MaterialIcons
            name="history"
            size={30}
            color="#FFFFFF"
            style={styles.history_icon}></MaterialIcons>
          <Text style={styles.history_txt}>History</Text>
        </View>
      </View>

      <View style={styles.drawer_lowerpart}>
        <View style={styles.history}>
          <MaterialCommunityIcons
            name="theme-light-dark"
            size={30}
            color="#FFFFFF"
            style={styles.history_icon}></MaterialCommunityIcons>
          <Text style={styles.history_txt}>Dark Mode</Text>
        </View>

        <View style={styles.history}>
          <Feather
            name="info"
            size={30}
            color="#FFFFFF"
            style={styles.history_icon}></Feather>
          <Text style={styles.history_txt}>About Us</Text>
        </View>

        <View style={styles.history}>
          <Feather
            name="log-out"
            size={30}
            color="#FFFFFF"
            style={styles.history_icon}></Feather>
          <Text style={styles.history_txt}>Log Out</Text>
        </View>
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
    left: 0,
    top: 0,
    zIndex: 1111111,
    // justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor: '#0C0C0C',
  },
  close_container_div: {
    width: P100,
    // backgroundColor: '#F65F65',
    marginTop: 10,
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
    // marginRight: 10,
  },
  plus_icon: {
    marginLeft: 5,
  },
  history_icon: {
    marginLeft: 5,
  },

  new_chat: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: P100,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  history: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: P100,
    // backgroundColor: '#242424',
    marginTop: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  new_chat_txt: {
    color: '#000000',
    fontFamily: 'Gilroy-Bold',
    fontSize: 17,
    marginLeft: 10,
  },
  history_txt: {
    color: '#FFFFFF',
    fontFamily: 'Gilroy-Bold',
    fontSize: 17,
    marginLeft: 10,
  },
  drawer_upperpart: {
    width: P90,
    // backgroundColor: '#F65F65',
  },
  drawer_lowerpart: {
    width: P90,
    // backgroundColor: '#F65F65',
    borderTopColor: '#FFFFFF',
    borderTopWidth: 0.8,
    marginBottom: 20,
  },
});
