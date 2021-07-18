import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  LayoutAnimation,
  NativeModules,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const {UIManager} = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {/* <Header title="About" navigation={this.props.navigation}></Header> */}
        <Text></Text>
        <Text></Text>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              width: 300,
              margin: 'auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 27,
              textAlign: 'center',
            }}>
            About Us
          </Text>
          <Text></Text>
          <Text></Text>
          <Text
            style={{
              width: 300,
              margin: 'auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 25,
            }}>
            Madison’s Magical Diversity Library has books that have characters
            of different races and ethnicities, religions, and abilities.  You
            will be able to come and pick them up and return to share with other
            families.
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
});

export default About;
