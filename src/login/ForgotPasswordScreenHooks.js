import React, { useState, useEffect }  from 'react';
import {
    Button,
    StyleSheet,
    View,
    ScrollView,
    TextInput,
    // AsyncStorage,
    Text

} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

// import validateEmail from '../api';

import { _userForgotPasswordFetch } from '../api/ApiFetch';





export default function HomeScreen() {

    const title = 'Забыли пароль ...';

    const [useremail, setuseremail] = useState('');

    
  
    useEffect(() => {
        const { useremail } = 'ghj;falksdjf;akl';
        //this.props.navigation.state.params;
        setuseremail(useremail);
    })
    
  
    return (
      <View style={styles.container}>

        <Text>{title}</Text>
        <Text>useremail: {useremail}</Text>

      </View>
    )
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
