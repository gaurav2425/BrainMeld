import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

const Inputbox = () => {
  return (
    <View style={styles.inputbox}>
      <TextInput
        placeholder="Tell me something..."
        style={styles.txtinput}
        placeholderTextColor="#9B9898"></TextInput>
      <View style={styles.sendbox}>
        <Feather name="send" color="#000000" size={27}></Feather>
      </View>
    </View>
  );
};

export default Inputbox;

// const P85 = '80%';
const P100 = '100%';
const P75 = '80%';
const styles = StyleSheet.create({
  inputbox: {
    height: 70,
    width: P100,
    backgroundColor: '#0C0C0C',
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F65F65',
  },
  txtinput: {
    backgroundColor: '#1A1919',
    marginRight: 0,
    marginLeft: 0,
    marginBottom: 10,
    marginTop: 10,
    color: '#FFFFFF',
    fontFamily: 'Gilroy-Medium',
    fontSize: 16,
    paddingLeft: 10,
    width: P75,
  },
  sendbox: {
    width: 50,
    height: 48,
    backgroundColor: '#FFFFFF',
    marginLeft: 5,
    // marginRight: 60,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
});
