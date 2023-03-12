import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useSelector, useDispatch} from 'react-redux';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.logincontainer}>
      <View style={styles.fieldscontainer}>
        <View style={styles.login_txt_container}>
          <Text style={styles.login_txt}>Login</Text>
        </View>

        <TextInput
          placeholder="Email"
          style={styles.email}
          value={email}
          placeholderTextColor={'#9B9898'}
          onChangeText={text => setEmail(text)}></TextInput>

        <TextInput
          placeholder="Password"
          style={styles.password}
          secureTextEntry={true}
          placeholderTextColor={'#9B9898'}
          value={password}
          onChangeText={text => setPassword(text)}></TextInput>

        <View style={styles.forgotpassword_txt_container}>
          <Text style={styles.forgotpassword_txt}>Forgot password?</Text>
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            console.log('Send');
          }}>
          <Text style={styles.btntxt}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.txt2container}>
        <Text style={styles.txt2}>Create a New Account ?</Text>
        <Text style={styles.txt2Register}>Register</Text>
      </View>
      <StatusBar backgroundColor="#1A1919" barStyle="light-content" />
    </View>
  );
};

export default Login;
const P90 = '90%';
const P20 = '20%';

const styles = StyleSheet.create({
  logincontainer: {
    flex: 1,
    backgroundColor: '#0C0C0C',
    justifyContent: 'space-between',
  },
  login_txt: {
    fontSize: 45,
    fontFamily: 'Gilroy-Bold',
    color: '#FFFFFF',
  },
  forgotpassword_txt: {
    fontSize: 15,
    marginTop: 10,
    fontFamily: 'Gilroy-Bold',
    color: '#FFFFFF',
  },
  txt: {
    color: '#000000',
    fontSize: 20,
    fontFamily: 'Poppins-BlackItalic',
    // textAlign: 'center',
    marginLeft: 10,
  },
  txtcontainer: {
    width: P90,
    // backgroundColor: '#FFFF',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  txtlogo: {
    color: '#000000',
    fontSize: 30,
    fontFamily: 'Poppins-BlackItalic',
    textAlign: 'center',
    // paddingTop: 30,
  },
  login_txt_container: {
    width: P90,
    // backgroundColor: '#F65F69',
  },
  forgotpassword_txt_container: {
    width: P90,
  },
  email: {
    backgroundColor: '#1A1919',
    width: P90,
    alignSelf: 'center',
    marginTop: 10,
    // borderRadius: 10,
    paddingLeft: 10,
    fontSize: 17,
    fontFamily: 'Gilroy-Medium',
    // borderWidth: 1,
    color: '#FFFFFF',
    // borderColor: '#7D7878',
    // borderColor: '#D9D3D3',
  },

  password: {
    backgroundColor: '#1A1919',
    width: P90,
    alignSelf: 'center',
    marginTop: 10,
    // borderRadius: 10,
    fontSize: 17,
    fontFamily: 'Gilroy-Medium',
    paddingLeft: 10,
    // borderWidth: 1,
    color: '#FFFFFF',
    // borderColor: '#7D7878',
    // borderColor: '#D9D3D3',
  },
  fieldscontainer: {
    paddingTop: P20,
    // backgroundColor: '#696969',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btncontainer: {
    width: P90,
    alignSelf: 'center',
    paddingTop: 10,
  },
  btn: {
    height: 50,
    width: P90,
    backgroundColor: '#FFFFFF',
    // backgroundColor: '#0FA60C',
    alignSelf: 'center',
    // borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  btntxt: {
    alignSelf: 'center',
    color: '#000000',
    fontSize: 21,
    fontFamily: 'Gilroy-Bold',
    // letterSpacing: 1,
  },
  txt2: {
    color: '#FFFFFF',
    // width: P90,

    paddingTop: 10,
    marginLeft: 10,
    fontFamily: 'Gilroy-Bold',
    fontSize: 15,
    // backgroundColor: '#FFFF',
  },
  txt2Register: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 15,
    // backgroundColor: '#FFFF',
    paddingTop: 10,
    marginLeft: 5,
    color: '#FFFF',
  },
  txt2container: {
    // backgroundColor: '#F65F65',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 20,
  },
});
