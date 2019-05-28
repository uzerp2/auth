// import uuidv4 from 'uuid/v4';

import {
  Alert

} from 'react-native';

const protocol = 'http';
const host = '194.177.21.189';


export const _userRegisterFetch = (useremail, password, parent) => {


  fetch(`${protocol}://${host}/api/user/registration`, {

    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      emailAddress: useremail,
      password: password,
      confirmPassword: password
    })
  })
    .then(
      response => response.json()
    )
    .then(response => {
      if (response.name == "BadRequestError") {
        Alert.alert(response.message);


      } else {

        Alert.alert("Успешная регистрация.");

        // AsyncStorage.clear();

        parent.setState({ isRegistratedIn: true });

        parent.props.navigation.goBack();
        parent.state.parent.setState({ useremail: useremail, password: password });

        // return true;

      }

      return false;


    })
    .catch(
      err => {
        console.log("error:", err.message);
      }
    );

};




export const _userForgotPasswordFetch = (useremail) => {

  fetch(`${protocol}://${host}/api/reset/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      // Authorization: `Basic ${useremail}:Vp123123`,
      Authorization: `Basic admin1:Vp123123`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      emailAddress: useremail,
    })

  })
    .then(response => response.json())
    .then(response => {
      if (response.code === 1) {
        // this.setState({
        //   message: response.message
        //   , isLoggingIn: true
        //   , reset: response
        // });
        Alert.alert(response.message);

      } else {


        // this.setState({
        //   message: response.message
        //   , isLoggingIn: true
        //   , reset: response
        // });
        Alert.alert(response.message);



      }
    })
    .then(() => {
      // this.setState({ isLoggingIn: false });
      //if (proceed) this.props.onLoginPress();

    })
    .catch(
      err => {
        console.log("error:", err.message);
      }

    );


};
