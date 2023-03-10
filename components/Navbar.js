import {StatusBar, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <View style={styles.messagebox}>
        <MaterialIcons
          name="menu"
          size={25}
          color="#000000"
          style={styles.message_icon}></MaterialIcons>
      </View>

      <Text style={styles.navbar_left_logo}>BrainMeld</Text>

      <View style={styles.profile_container}>
        <Image
          style={styles.profile}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Steve_Wozniak_by_Gage_Skidmore_3_%28cropped%29.jpg',
          }}
        />
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
    width: 33,
    height: 33,
    backgroundColor: '#FFFFFF',
    // marginLeft: 5,
    marginLeft: 15,
    // marginRight: 60,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    borderRadius: 100,
  },

  message_icon: {
    // marginRight: 15,
  },

  profile_container: {
    width: 32,
    height: 32,
    // backgroundColor: '#F65F65',
    borderRadius: 50,
    marginRight: 15,
  },
  profile: {
    width: 32,
    height: 32,
    borderRadius: 50,
  },
});
