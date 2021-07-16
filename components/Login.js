import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
AsyncStorage;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      goBack: false,
    };
  }
  componentDidMount() {
    try {
      if (this.props.route.params.loggedOut === 'Logout') {
        AsyncStorage.removeItem('token');
      }
      if (this.props.route.params.bookLogin === true) {
        this.setState({
          goBack: true,
        });
      }
    } catch (error) {}
  }
  render() {
    return (
      <ScrollView style={{backgroundColor: '#fff'}}>
        <Text></Text>
        <Text></Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 30, marginTop: 20, textAlign: 'center'}}>
            Login
          </Text>
          <TextInput
            value={this.state.email}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            selectionColor="black"
            underlineColor="black"
            underlineColorAndroid="black"
            style={{
              marginTop: 50,
              fontSize: 20,
              width: '75%',
            }}
            onChangeText={(e) => {
              this.setState({email: e});
            }}></TextInput>
          <TextInput
            value={this.state.password}
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            selectionColor="black"
            underlineColor="black"
            underlineColorAndroid="black"
            style={{
              marginTop: 50,
              fontSize: 20,
              width: '75%',
              marginBottom: 50,
            }}
            onChangeText={(e) => {
              this.setState({password: e});
            }}></TextInput>
          <Button
            icon="login"
            mode="outlined"
            loading={this.state.loading}
            onPress={async () => {
              this.setState({
                loading: true,
              });
              await axios
                .post('http://localhost:3000/login', {
                  email: this.state.email,
                  password: this.state.password,
                })
                .then(async (res) => {
                  console.log(res);
                  await AsyncStorage.setItem('token', res.data['auth-token']);
                  await AsyncStorage.setItem('userId', res.data.id);
                  console.log(AsyncStorage.getItem('token'));
                  alert('Successfully logged in!');
                  if (this.state.goBack === true) {
                    this.props.navigation.goBack(null);
                  } else {
                    this.props.navigation.navigate('Home');
                  }
                })
                .catch((err) => {
                  console.error(err);
                  this.setState({
                    loading: false,
                  });
                  alert(
                    'Incorrect email or password. If you are sure it is correct, please check your internet connection.',
                  );
                });
            }}
            color="black"
            contentStyle={{
              width: 175,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            Login
          </Button>
          <Text></Text>
          <Button
            icon="account"
            mode="text"
            onPress={() => {
              this.props.navigation.navigate('Register');
            }}
            color="black"
            contentStyle={{
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            Sign up
          </Button>
        </View>
      </ScrollView>
    );
  }
}

export default Login;
