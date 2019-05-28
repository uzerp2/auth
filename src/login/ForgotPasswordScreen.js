import React from 'react';
import {
    Button,
    StyleSheet,
    View,
    ScrollView,
    TextInput,
    // AsyncStorage

} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

// import validateEmail from '../api';

import { _userForgotPasswordFetch } from '../api/ApiFetch';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Забыли пароль ...',
    };

    state = {
        useremail: "",



    };

    componentDidMount() {
        const { useremail } = this.props.navigation.state.params;
        this.setState( {useremail: useremail} );

    }



    render() {
        return (


            <ScrollView vertical={true} style={{ paddingTop: 7, paddingHorizontal: 70 }}>
                <View style={{ margin: 20 }} />

                <TextInput
                    value={this.state.useremail}
                    placeholder="Email"
                    onChangeText={useremail => this.setState({ useremail: useremail })}
                // autoFocus={true}
                // onFocus={this.clearUseremail}
                    underlineColorAndroid='gray'
                />



                <View style={{ margin: 20 }} />

                <View style={styles.btnRegistrationContainer}>
                    <Button
                        onPress={ () => _userForgotPasswordFetch(this.state.useremail) }
                        title="Отправить на почту"
                        color={"grey"}
                    />
                </View>

            </ScrollView>













        );
    }

    // _forgotPassword = async () => {
    //     await AsyncStorage.clear();
    //     this.props.navigation.goBack();    
    // };

    // _signOutAsync = async () => {
    //     await AsyncStorage.clear();
    //     this.props.navigation.navigate('Auth');
    // };


}


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


});
