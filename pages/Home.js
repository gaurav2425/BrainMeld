import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import Navbar from '../components/Navbar';
import Inputbox from '../components/Inputbox';
import Chat from '../components/Chat';
import Drawer from '../components/Drawer';

const Home = () => {
  return (
    <View style={styles.home}>
      <Navbar></Navbar>
      <Drawer></Drawer>
      <ScrollView
        style={styles.scrollview}
        contentContainerStyle={{
          flexGrow: 1,
          // justifyContent: 'center',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Chat></Chat>
        <Chat></Chat>
        <Chat></Chat>
        <Chat></Chat>
        <Text style={styles.txt_header}>Exceptions Make Reality</Text>
        <Text style={styles.txt}>
          Life is full of challenges and obstacles, but it's important to
          remember that these challenges are what make us stronger and more
          resilient. Don't be afraid to step outside of your comfort zone and
          take risks, for it is through the
        </Text>
      </ScrollView>
      <Inputbox></Inputbox>
      <StatusBar backgroundColor="#1A1919" barStyle="light-content" />
    </View>
  );
};

export default Home;

const P100 = '100%';
const P90 = '90%';
const styles = StyleSheet.create({
  scrollview: {
    // height: P90,
    width: P100,
    backgroundColor: '#0C0C0C',
    // paddingTop: 50,
    marginBottom: 70,
    // position: 'absolute',
    textAlign: 'center',
  },
  home: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column',
    height: P100,
  },
  txt_header: {
    color: '#FFFFFF',
    fontFamily: 'Gilroy-Bold',
    width: P90,
    fontSize: 50,
  },
  txt: {
    color: '#FFFFFF',
    fontFamily: 'Gilroy-Bold',
    width: P90,
    paddingBottom: 10,
  },
});
