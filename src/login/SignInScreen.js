import React from 'react';
import {
  // AsyncStorage,
  Button,
  StyleSheet,
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image

} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import LogoScreen from '../app/LogoScreen';


export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Вход ...',
  };

  state = {
    useremail: "",
    password: "",
    hidePassword: true,
    userToken: "",

  };




  render() {
    return (
      <ScrollView vertical={true} style={{ paddingTop: 7, paddingHorizontal: 70 }} >
        <View style={styles.container}>
          <LogoScreen initials={"LOGO"} size={75} backgroundColor={"grey"} />
        </View>

        <Text style={styles.instructions}>Создавайте вписки и</Text>
        <Text style={styles.instructions}>добавляйте гостей</Text>

        <View style={{ margin: 17 }} />

        <View style={styles.btnVKContainer}>

          <TouchableOpacity
          // activeOpacity={0.8}
          // style={styles.btn} 
          // disabled={this.state.disabled} 
          // onPress={this.addAvatar}
          >
            <Image
              source={require('../images/VKontakte.png')}
              style={{ width: 170, height: 40 }}
            // style={styles.btnImage} 
            />

          </TouchableOpacity>

        </View>

        <Text style={styles.welcome}>Вход в личный кабинет</Text>

        <TextInput
          value={this.state.useremail}
          // ref={component => (this._useremail = component)}
          placeholder="Email"
          onChangeText={(useremail) => this.setState({ useremail: useremail })}
          autoFocus={true}
          //onFocus={this.clearUseremail}
          underlineColorAndroid={'gray'}
        />

        <View style={styles.textBoxBtnHolder}>
          <TextInput
            value={this.state.password}
            placeholder="Пароль"
            onChangeText={password => this.setState({ password })}
            secureTextEntry={this.state.hidePassword}
            underlineColorAndroid='gray'
          // style = { styles.textBox }
          />

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.visibilityBtn}
            onPress={this._hidePasswordAsync}>
            <Image
              source={(this.state.hidePassword) ? require('../images/hide.png') : require('../images/view.png')}
              style={styles.btnImage}
            />
          </TouchableOpacity>

        </View>


        <View style={{ margin: 7 }} />

        <View style={styles.buttonGroup}>
          <Text
            style={{ color: "#507299" }}
            onPress={this._forgotPasswordAsync}
          >
            Забыли пароль?
          </Text>

          <Text
            style={{ color: "#507299" }}
            onPress={this._registrationAsync}
          >
            Регистрация
          </Text>
        </View>

        <View style={{ margin: 7 }} />

        <View style={styles.btnEnterContainer} >
          <Button
            //disabled={this.state.isLoggingIn || !this.state.useremail || !this.state.password}
            onPress={this._userLogin}
            title="Войти"
            color={"grey"}
          />
        </View>


        <View style={{ margin: 10 }} />

        <View style={styles.btnContinueAsGuestContainer}>
          <Button
            onPress={this._continueAsGuest}
            title="Продолжить как гость"
            color={"grey"}
          />
        </View>



        {/* <View style={styles.container}>
          <Button title="Login ...!" onPress={this._signInAsync} />
        </View> */}



      </ScrollView>

    );
  }

  // _signInAsync = async () => {
  //   await AsyncStorage.setItem('userToken', 'abc');
  //   this.props.navigation.navigate('App');
  // };


  _onLoginVKAsync = async () => {

  };

  _forgotPasswordAsync = async () => {
    const { navigate } = this.props.navigation;
    navigate("ForgotPassword", {useremail: this.state.useremail} );

  };

  _registrationAsync = async () => {
    const { navigate } = this.props.navigation;
    navigate("Registration", { parent: this });
  };


  _userLogin = async () => {
    await AsyncStorage.setItem('userToken', this.state.userToken);
    // this.props.navigation.navigate('App');

  };


  _continueAsGuest = async () => {

  };


  _hidePasswordAsync = async () => {
    this.setState({ hidePassword: !this.state.hidePassword });

  }




}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },


  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },

  btnVKContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
    //borderTopWidth: 1,
    borderTopColor: "#507299",
    //width: 100,
    paddingHorizontal: 70
  },


  welcome: {
    fontSize: 27,
    textAlign: "center",
    margin: 10
  },


  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  btnEnterContainer: {
    flex: 1,
    paddingHorizontal: 70
  },


  btnContinueAsGuestContainer: {
    flex: 1,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginTop: 4,
    // //borderTopWidth: 1,
    // borderTopColor: '#507299',
    // //width: 100,
    paddingHorizontal: 20
  },

  textBoxBtnHolder:
  {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },


  visibilityBtn:
  {
    position: 'absolute',
    right: 3,
    height: 40,
    width: 35,
    padding: 5
  },

  btnImage:
  {
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
  },



});