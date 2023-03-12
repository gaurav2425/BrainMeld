import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import Hello from './components/Hello';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {NavigationContainer} from '@react-navigation/native';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

// const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <View style={styles.app}>
      <Home></Home>

      <StatusBar backgroundColor="#1A1919" barStyle="light-content" />
    </View>
    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="Home">
    //     <Drawer.Screen name="Home" component={HomeScreen} />
    //     <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    //   </Drawer.Navigator>
    // </NavigationContainer>
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
