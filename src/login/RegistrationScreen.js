import React from 'react';
import {
    Button,
    StyleSheet,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Image,
    // AsyncStorage,
    Text,

} from 'react-native';



import AsyncStorage from '@react-native-community/async-storage';

import { _validateEmail, _validatePassword } from '../api/Api';
import {_userRegisterFetch } from '../api/ApiFetch';


export default class RegistrationScreen extends React.Component {
    static navigationOptions = {
        title: 'Регистрация ...',
    };

    state = {
        useremail: "",
        useremailValid: false,
        useremailValidText: "",

        password: "",
        hidePassword: true,
        passwordValid: false,
        passwordValidText: "",

        passwordConfirm: "",       
        hidePasswordConfirm: true,
        passwordConfirmValid: false,
        passwordConfirmValidText: "",

        isRegistratedIn: false,

        userToken: "",

        parent: {},



    };


    async componentDidMount() {

        await this._setUseremailValidText();
        await this._setPasswordValidText();
        // await this._setPasswordConfirmValidText();

        const { parent } = this.props.navigation.state.params;
        this.setState( {parent: parent} );

    }





    render() {

        let disabledButtonRegistrated = !(this.state.useremailValid && this.state.passwordValid && this.state.passwordConfirmValid) || this.state.isRegistratedIn;


        return (


            <ScrollView vertical={true} style={{ paddingTop: 7, paddingHorizontal: 60 }}>
                <View style={{ margin: 20 }} />


                <View style={styles.textBoxTxtHolder}>

                    <TextInput
                        value={this.state.useremail}
                        placeholder="Email"
                        onChangeText={(useremail) => this.setState({ useremail: useremail })}
                        value={this.state.useremail}

                        autoFocus={true}
                        // onFocus={this._setUseremailValidText}
                        onEndEditing={this._setUseremailValidText}
                        underlineColorAndroid='gray'

                    />

                    {/* <Text style={ styles.visibilityTxt } >
                        {this.state.useremailValidText}
                    </Text> */}

                </View>

                <Text style={{fontSize: 8}} >
                    {this.state.useremailValidText}
                </Text>


                <View style={styles.textBoxBtnHolder}>
                    <TextInput
                        value={this.state.password}
                        placeholder="Пароль"
                        onChangeText={password => this.setState({ password })}
                        secureTextEntry={this.state.hidePassword}
                        underlineColorAndroid='gray'
                        // style = { styles.textBox }
                        onEndEditing={this._setPasswordValidText}
                    />

                    {/* <Text style={styles.visibilityTxt} >
                        {this.state.passwordValidText}
                    </Text> */}

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

                <Text style={{fontSize: 8}} >
                    {this.state.passwordValidText}
                </Text>


                <View style={styles.textBoxBtnHolder}>
                    <TextInput
                        value={this.state.passwordConfirm}
                        placeholder="Повторите пароль"
                        onChangeText={passwordConfirm => this.setState({ passwordConfirm })}
                        secureTextEntry={this.state.hidePasswordConfirm}
                        underlineColorAndroid='gray'
                        // style = { styles.textBox }
                        // onEndEditing={this._setPasswordConfirmValidText}
                        onEndEditing={this._setPasswordValidText}
                    />

                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.visibilityBtn}
                        onPress={this._hidePasswordConfirmAsync}>
                        <Image
                            source={(this.state.hidePasswordConfirm) ? require('../images/hide.png') : require('../images/view.png')}
                            style={styles.btnImage}
                        />
                    </TouchableOpacity>

                </View>


                <Text style={{ fontSize: 8 }} >
                    {this.state.passwordConfirmValidText}
                </Text>



                <View style={{ margin: 20 }} />

                <View style={styles.btnRegistrationContainer}>
                    <Button
                        // onPress={this._userRegister}
                        // onPress={() => this.setState( {isRegistratedIn: _userRegisterFetch(this.state.useremail, this.state.password)} ) }
                        onPress={() => _userRegisterFetch(this.state.useremail, this.state.password, this) }

                        title="Зарегистрироваться"
                        color={"grey"}
                        disabled={ disabledButtonRegistrated }
                    />
                </View>
            </ScrollView>

        );
    }

 

    _hidePasswordAsync = async () => {
        this.setState({ hidePassword: !this.state.hidePassword });
    }

    _hidePasswordConfirmAsync = async () => {
        this.setState({ hidePasswordConfirm: !this.state.hidePasswordConfirm });
    }


    // _userRegister = async () => {
    //     await AsyncStorage.clear();
    //     this.props.navigation.goBack();
    // };

    _setUseremailValidText = async () => {
        const useremailValid = _validateEmail(this.state.useremail);
        const useremailValidText = useremailValid ? '' : 'Email не прошел проверку';

        this.setState( {useremailValid: useremailValid, useremailValidText: useremailValidText} );
        
    };

    _setPasswordValidText = async () => {
        const passwordValid = _validatePassword(this.state.password);
        const passwordValidText = passwordValid ? '' : 'пароль не прошел проверку (минимум 6 символов, минимум одна большая и одна маленькая или одна цифра )';

        if ((this.state.passwordConfirm != this.state.password)
            | (this.state.passwordConfirm === '')) {
            const passwordConfirmValid = false;
            const passwordConfirmValidText = 'повторение пароля не совпадает с паролем или пароль пустой';

            this.setState({
                passwordConfirmValid: passwordConfirmValid,
                passwordConfirmValidText: passwordConfirmValidText,
                passwordValid: passwordValid,
                passwordValidText: passwordValidText
            });

        }

        else {
            const passwordConfirmValid = true;
            const passwordConfirmValidText = '';

            this.setState({
                passwordConfirmValid: passwordConfirmValid,
                passwordConfirmValidText: passwordConfirmValidText,
                passwordValid: passwordValid,
                passwordValidText: passwordValidText
            });

        }
        
    };


}


_setParent = () => {
    // const useremailValid = _validateEmail(this.state.useremail);
    // const useremailValidText = useremailValid ? '' : 'Email не прошел проверку';

    // this.setState( {useremailValid: useremailValid, useremailValidText: useremailValidText} );
    
};




const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    btnRegistrationContainer: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        //backgroundColor: '#F5FCFF',
        paddingHorizontal: 40
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



    textBoxTxtHolder:
    {
      position: 'relative',
      alignSelf: 'stretch',
      justifyContent: 'center'
    },


    visibilityTxt:
    {
        position: 'absolute',
        right: 7,
        height: 40,
        width: 140,
        // padding: 5,
        // paddingTop: 10,
        fontSize: 8,
    },


});
