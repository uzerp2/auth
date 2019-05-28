// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });



/////////////////////////////////////////////////////////////////////////////////////////
// 1-ая версия


import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';


import HomeScreen from './src/app/HomeScreen';
import OtherScreen from './src/app/OtherScreen';
import SignInScreen from './src/login/SignInScreen';
import AuthLoadingScreen from './src/AuthLoadingScreen';

import ForgotPasswordScreen from './src/login/ForgotPasswordScreen';
import RegistrationScreen from './src/login/RegistrationScreen';





const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = createStackNavigator({
  SignIn: SignInScreen,
  ForgotPassword: ForgotPasswordScreen,
  Registration: RegistrationScreen
});




export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
    // ForgotPassword: ForgotPasswordStack,
    // Registration: RegistrationStack,

  },
  {
    initialRouteName: 'AuthLoading',
  }
));
