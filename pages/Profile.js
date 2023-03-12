import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableRipple} from 'react-native-paper';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container_main}>
      <View style={styles.profileheader}>
        <Ionicons
          name="chevron-back"
          size={30}
          style={{color: '#FFFFFF'}}></Ionicons>
        <View style={styles.profileheaderright}>
          <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .1)"
            borderless
            style={styles.profileheaderrighticon1ripple}>
            <Ionicons
              name="share-social-outline"
              size={25}
              style={styles.profileheaderrighticon1}></Ionicons>
          </TouchableRipple>

          {/* <Text>{myState}</Text> */}
          <TouchableRipple
            onPress={() => {
              console.log('Hey');
            }}
            rippleColor="rgba(0, 0, 0, .1)"
            borderless
            style={styles.profileheaderrighticon2ripple}>
            <Feather
              name="settings"
              size={25}
              style={styles.profileheaderrighticon2}></Feather>
          </TouchableRipple>
        </View>
      </View>

      <View style={styles.profileline}>
        <View style={styles.profile}>
          <Image
            style={styles.profileimage}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Steve_Wozniak_by_Gage_Skidmore_3_%28cropped%29.jpg',
            }}></Image>
        </View>
      </View>

      <View style={styles.nameline}>
        <Text style={styles.textname}>Gaurav Burande</Text>
        <Text style={styles.textusername}>@iamgauravx</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const P100 = '100%';
const styles = StyleSheet.create({
  container_main: {
    backgroundColor: '#0C0C0C',
    flex: 1,
    flexDirection: 'column',
  },

  profileheader: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: '#FFFF',
    flex: 0.09,
    color: '#FFFFFF',
    backgroundColor: '#1A1919',
  },
  profileheaderright: {
    display: 'flex',
    flexDirection: 'row',
    color: '#FFFFFF',
  },
  profileheaderrighticon2: {
    // marginRight: 20,
    color: '#FFFFFF',
  },
  profileheaderrighticon1: {
    // marginRight: 30,
    color: '#FFFFFF',
  },
  profileline: {
    // flex: 0.18,
    // backgroundColor: '#808080',
    paddingTop: 20,
    paddingBottom: 5,
    justifyContent: 'center',
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 85,
    backgroundColor: '#FFFF',
    marginLeft: 20,
  },
  profileimage: {
    width: 100,
    height: 100,
    borderRadius: 85,
    zIndex: -1,
  },

  nameline: {
    flex: 0.1,
    justifyContent: 'center',
  },
  textname: {
    marginLeft: 25,
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Gilroy-Bold',
  },
  textusername: {
    marginLeft: 25,
    fontSize: 15,
    // paddingTop: 3,
    color: '#FFFFFF',
    fontFamily: 'Gilroy-Medium',
  },
  followline: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 25,
    flex: 0.08,
  },
  friendstxt: {
    fontFamily: 'Gilroy-Medium',
    color: '#FFFFFF',
    marginLeft: 2,
  },
  text3: {},
  text4: {
    // fontWeight: "700",
    marginLeft: 20,
  },

  text5: {
    color: '#728FCE',
  },
  socialline: {
    display: 'flex',
    flexDirection: 'row',

    // backgroundColor: "#FFFF",
    paddingLeft: 25,
    alignItems: 'center',
  },
  profileheaderrighticon2ripple: {
    marginRight: 20,
    padding: 10,
    borderRadius: 30,
  },
  profileheaderrighticon1ripple: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
    marginRight: 20,
    borderRadius: 50,
  },
});
