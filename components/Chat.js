import {Image, StyleSheet, Text, View} from 'react-native';
import {useRef, useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Chat = props => {
  let [text, setText] = useState('');
  let [cursorColor, setCursorColor] = useState('transparent');
  let [messageIndex, setMessageIndex] = useState(0);
  let [textIndex, setTextIndex] = useState(0);
  let [timeouts, setTimeouts] = useState({
    cursorTimeout: undefined,
    typingTimeout: undefined,
    firstNewLineTimeout: undefined,
    secondNewLineTimeout: undefined,
  });

  let textRef = useRef(text);
  textRef.current = text;

  let cursorColorRef = useRef(cursorColor);
  cursorColorRef.current = cursorColor;

  let messageIndexRef = useRef(messageIndex);
  messageIndexRef.current = messageIndex;

  let textIndexRef = useRef(textIndex);
  textIndexRef.current = textIndex;

  let timeoutsRef = useRef(timeouts);
  timeoutsRef.current = timeouts;

  let typingAnimation = () => {
    if (textIndexRef.current < props.text[messageIndexRef.current].length) {
      setText(
        textRef.current +
          props.text[messageIndexRef.current].charAt(textIndexRef.current),
      );
      setTextIndex(textIndexRef.current + 1);

      let updatedTimeouts = {...timeoutsRef.current};
      updatedTimeouts.typingTimeout = setTimeout(typingAnimation, 10);
      setTimeouts(updatedTimeouts);
    } else if (messageIndexRef.current + 1 < props.text.length) {
      setMessageIndex(messageIndexRef.current + 1);
      setTextIndex(0);

      let updatedTimeouts = {...timeoutsRef.current};
      updatedTimeouts.firstNewLineTimeout = setTimeout(newLineAnimation, 120);
      updatedTimeouts.secondNewLineTimeout = setTimeout(newLineAnimation, 200);
      updatedTimeouts.typingTimeout = setTimeout(typingAnimation, 280);
      setTimeouts(updatedTimeouts);
    } else {
      clearInterval(timeoutsRef.current.cursorTimeout);
      setCursorColor('transparent');

      if (props.onComplete) {
        props.onComplete();
      }
    }
  };

  let newLineAnimation = () => {
    setText(textRef.current + '\n');
  };

  let cursorAnimation = () => {
    if (cursorColorRef.current === 'transparent') {
      setCursorColor('#FFFFFF');
    } else {
      setCursorColor('transparent');
    }
  };

  useEffect(() => {
    let updatedTimeouts = {...timeoutsRef.current};
    updatedTimeouts.typingTimeout = setTimeout(typingAnimation, 500);
    updatedTimeouts.cursorTimeout = setInterval(cursorAnimation, 250);
    setTimeouts(updatedTimeouts);

    return () => {
      clearTimeout(timeoutsRef.current.typingTimeout);
      clearTimeout(timeoutsRef.current.firstNewLineTimeout);
      clearTimeout(timeoutsRef.current.secondNewLineTimeout);
      clearInterval(timeoutsRef.current.cursorTimeout);
    };
  }, []);

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
        <Text style={styles.chat_que_txt}>{props.input}</Text>
      </View>

      <View style={styles.chat_ans}>
        <Text style={styles.chat_ans_txt}>
          {text}
          <Text style={{color: cursorColor, fontSize: 20}}>|</Text>
        </Text>
        <View style={styles.copy_container}>
          <Ionicons
            name="md-copy-outline"
            size={18}
            color="#FFFFFF"
            style={styles.copy_icon}></Ionicons>
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
  copy_container: {
    // backgroundColor: '#F65F65',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  copy_icon: {
    marginRight: P5,
  },
});
