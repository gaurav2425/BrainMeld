import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Chat = () => {
  return (
    <View style={styles.chat}>
      <View style={styles.question_container}>
        <View style={styles.profile_container}>
          <Image
            style={styles.profile}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzzxQg1XIrCPKq_ZK6AUq8P1ClLOwqGfxTYy5iz1kPCt43soPXvXtCYGO2VVIpHr37vLY&usqp=CAU',
            }}
          />
        </View>
        <Text style={styles.chat_que_txt}>
          Give me some motivational Quotes
        </Text>
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
        </Text>
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  chat: {
    display: 'flex',
    flexDirection: 'column',
  },
  chat_que_txt: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 18,
    color: '#FFFFFF',
    paddingBottom: 10,
    marginLeft: 10,
    marginRight: 20,
  },
  question_container: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 10,
    paddingTop: 10,
  },
  chat_ans: {
    backgroundColor: '#2D2C2C',
    paddingBottom: 10,
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
});
