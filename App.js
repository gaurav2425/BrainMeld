import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import Hello from './components/Hello';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App = () => {
  return (
    <View style={styles.app}>
      <Home></Home>
      <StatusBar backgroundColor="#1A1919" barStyle="light-content" />
    </View>
  );
};

export default App;

const P100 = '100%';
const styles = StyleSheet.create({
  app: {
    height: P100,
    backgroundColor: '#0C0C0C',
  },
});
