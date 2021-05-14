import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {Dimensions} from 'react-native';
import Image from 'react-native-scalable-image';
import {Button} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

class Book extends Component {
  componentDidMount() {
    if (this.props.route.params.checkedOut === true) {
      alert('This book is not available. It has been checked out already.');
    }
  }
  onPress = async () => {
    const tokenAsync = await AsyncStorage.getItem('token');
    console.log(tokenAsync, 'ffdsffsd');
    try {
      if (
        tokenAsync === undefined ||
        tokenAsync === null ||
        tokenAsync === ''
      ) {
        this.props.navigation.navigate('Login', {bookLogin: true});
      }
    } catch (error) {}
    if (this.props.route.params.checkedOut === true) {
      alert('This book is not available. It has been checked out already.');
    } else {
      axios
        .patch(`http://localhost:3000/books/${this.props.route.params.id}`, {
          checkedOut: true,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          alert('Something went wrong. Please try again.');
        });
      const userId = await AsyncStorage.getItem('userId');
      axios
        .patch(`http://localhost:3000/users/${userId}`, {
          checkedOutBooks: this.props.route.params.id,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          alert('Something went wrong. Please try again.');
        });
      alert('Success! Book has been checked out.');
      this.props.navigation.navigate('CheckedOut');
    }
  };
  render() {
    return (
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            marginTop: 50,
          }}>
          <Image
            width={Dimensions.get('window').width / 1.5}
            style={{
              borderRadius: 5,
            }}
            source={{
              uri: this.props.route.params.image,
            }}></Image>
        </View>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text
            style={{
              marginTop: 50,
              fontSize: 25,
              width: '50%',
              textAlign: 'center',
            }}>
            {this.props.route.params.title}
          </Text>

          <Text
            style={{
              marginTop: 15,
              marginBottom: 50,
              fontSize: 18,
              width: '50%',
              textAlign: 'center',
            }}>
            {this.props.route.params.author}
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <Button
            icon="arrow-left-bold"
            mode="filled"
            color="black"
            style={{
              width: 176,
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}
            onPress={this.onPress}>
            Check Out
          </Button>
          <Text></Text>
          <Text></Text>
        </View>
      </ScrollView>
    );
  }
}

export default Book;
