import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Inputbox from '../components/Inputbox';
import Chat from '../components/Chat';
import Drawer from '../components/Drawer';
import AnimatedTyping from '../components/AnimatedTyping';

const Home = () => {
  let [greetingCompleted, setGreetingCompleted] = useState(false);
  let [nextPressed, setNextPressed] = useState(false);

  return (
    <View style={styles.home}>
      <Navbar></Navbar>
      {/* <Drawer></Drawer> */}

      <ScrollView
        style={styles.scrollview}
        contentContainerStyle={{
          flexGrow: 1,
          // justifyContent: 'center',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Chat
          input="Give me motivational Paragraph"
          text={[
            "Life is full of challenges and obstacles, but it's important to remember that these challenges are what make us stronger and more resilient. Don't be afraid to step outside of your comfort zone and take risks, for it is through the Life is full of challenges and obstacles, but it's important to remember that these challenges are what make us stronger and more resilient. Don't be afraid to step outside of your comfort zone and take risks, for it is through the",
          ]}
          onComplete={() => setGreetingCompleted(true)}></Chat>

        <Chat
          input="write essay on my home"
          text={[
            "My home is located in a quiet, residential area in the suburbs. It is a spacious house with a front yard and a backyard, which is perfect for my family's outdoor activities. The house has two floors and a basement, which gives us plenty of room to spread out and have our own space. The exterior of the house is painted in a light shade of blue, which makes it stand out in the neighborhood When you enter my home, you are greeted by a warm and inviting atmosphere. The living room is the first room that you see, and it is where my family and I spend most of our time together. It is a cozy room with comfortable couches and a large flat-screen TV, which is perfect for movie nights. The room is decorated with family pictures, paintings, and a few indoor plants, which adds a touch of nature to the space ",
          ]}
          onComplete={() => setGreetingCompleted(true)}></Chat>

        {/* <Chat></Chat>
        <Chat></Chat>
        <Chat></Chat> */}

        {/* <Text style={styles.txt_header}>Exceptions Make Reality</Text>
        <Text style={styles.txt}>
          Life is full of challenges and obstacles, but it's important to
          remember that these challenges are what make us stronger and more
          resilient. Don't be afraid to step outside of your comfort zone and
          take risks, for it is through the
        </Text> */}
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
