import {Image, StyleSheet, Text, View} from 'react-native';
import {useRef, useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableRipple} from 'react-native-paper';

const Chat = () => {
  return (
    <View style={styles.chat}>
      <View style={styles.question_container}>
        <View style={styles.profile_container}>
          <Image
            style={styles.profile}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Steve_Wozniak_by_Gage_Skidmore_3_%28cropped%29.jpg',
            }}
          />
        </View>
        <Text style={styles.chat_que_txt}>Give me motivational Paragraph</Text>
      </View>

      <View style={styles.chat_ans}>
        <Text style={styles.chat_ans_txt}>
          Life is full of challenges and obstacles, but it's important to
          remember that these challenges are what make us stronger and more
          resilient. Don't be afraid to step outside of your comfort zone and
          take risks, for it is through the Life is full of challenges and
          obstacles, but it's important to remember that these challenges are
          what make us stronger and more resilient. Don't be afraid to step
          outside of your comfort zone and take risks, for it is through the
          <Text style={{color: '#FFFFFF', fontSize: 20}}>|</Text>
        </Text>
        <View style={styles.copy_container}>
          <TouchableRipple
            onPress={() => console.log('Pressed')}
            borderless={true}
            style={styles.touchable_copy_container}
            rippleColor="#696969">
            <Ionicons
              name="md-copy-outline"
              size={18}
              color="#FFFFFF"
              style={styles.copy_icon}></Ionicons>
          </TouchableRipple>
        </View>
      </View>
    </View>
  );
};

export default Chat;
const P5 = '5%';
const styles = StyleSheet.create({
  chat: {
    display: 'flex',
    flexDirection: 'column',
  },
  chat_que_txt: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 18,
    color: '#FFFFFF',
    // paddingBottom: 10,
    // height: 20,
    marginLeft: 10,
    marginTop: 3,
    marginRight: 20,
    // backgroundColor: '#696969',
  },
  question_container: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 10,
    paddingTop: 10,
    // backgroundColor: '#F65F65',
  },
  chat_ans: {
    backgroundColor: '#2D2C2C',
    paddingBottom: 5,
    paddingTop: 10,
  },
  chat_ans_txt: {
    backgroundColor: '#2D2C2C',
    fontFamily: 'Gilroy-Medium',
    color: '#FFFFFF',
    fontSize: 15,
    marginLeft: 20,
    marginRight: 10,
  },
  profile_container: {
    width: 30,
    height: 30,
    // backgroundColor: '#F65F65',
    borderRadius: 50,
    marginLeft: 10,
  },
  profile: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  copy_container: {
    // backgroundColor: '#F65F65',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  copy_icon: {
    // marginRight: P5,
  },
  touchable_copy_container: {
    marginRight: P5,
    padding: 10,
    borderRadius: 100,
  },
});
