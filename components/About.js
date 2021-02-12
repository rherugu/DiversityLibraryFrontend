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
            }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
            deleniti in dolore? Sit officia voluptatum odio quaerat, quibusdam
            temporibus eum blanditiis laudantium animi molestiae atque impedit
            quo eligendi dolore nesciunt, dolorem deserunt modi deleniti
            quisquam natus ducimus earum vitae. Quas laudantium distinctio
            fugiat minima autem at eveniet et, assumenda perspiciatis aliquam
            hic, rerum sunt nam aspernatur iste. Ex blanditiis exercitationem
            possimus soluta dolores dicta beatae delectus natus praesentium qui
            laborum, expedita repellendus fuga ducimus nemo maiores! Odit odio
            vitae doloribus rem assumenda officiis numquam id ea voluptate
            voluptatum illum unde, labore officia incidunt, sunt quasi tempora
            consequatur ad sit! Voluptatum aliquid accusantium laboriosam dicta
            eos hic praesentium cumque labore dolores numquam in quam dolore
            laudantium obcaecati repellendus fugit saepe est blanditiis,
            aspernatur corporis voluptatibus explicabo facilis. Enim harum illum
            totam eligendi aut? Repudiandae pariatur eos veniam dicta animi ad
            quaerat illum magnam itaque quasi? Nisi dolorum non laboriosam id
            dignissimos.
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
