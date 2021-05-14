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

class CheckedOut extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{margin: 50}}>
          <Text style={styles.text}>
            Now that you have checked out the book successfully, please follow
            the steps below to retrieve your book.
          </Text>
          <Text></Text>
          <Text></Text>
          <Text style={styles.text}>
            Pick up the book at (Address here) before a ten day timespan.
          </Text>
          <Text></Text>
          <Text></Text>
          <Text style={styles.text}>
            Make sure to keep the name of the book with you, so when the
            librarian asks, you can give the exact name. If you forgot, you can
            always go to the checked out books under the My Books section in the
            app.
          </Text>
          <Text></Text>
          <Text></Text>
          <Button
            icon="arrow-left-bold"
            mode="filled"
            color="black"
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}
            onPress={() => this.props.navigation.navigate('Home')}>
            Go back
          </Button>
        </View>
      </ScrollView>
    );
  }
}

export default CheckedOut;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 18,
  },
});
