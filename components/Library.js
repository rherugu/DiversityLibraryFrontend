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

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Item 1',
          text: 'Text 1',
        },
        {
          title: 'Item 2',
          text: 'Text 2',
        },
        {
          title: 'Item 3',
          text: 'Text 3',
        },
        {
          title: 'Item 4',
          text: 'Text 4',
        },
        {
          title: 'Item 5',
          text: 'Text 5',
        },
        {
          title: 'Item 1',
          text: 'Text 1',
        },
        {
          title: 'Item 2',
          text: 'Text 2',
        },
        {
          title: 'Item 3',
          text: 'Text 3',
        },
        {
          title: 'Item 4',
          text: 'Text 4',
        },
        {
          title: 'Item 5',
          text: 'Text 5',
        },
      ],
      lineDisplay: 'flex',
      lineDisplay2: 'none',
    };
  }
  _renderItem({item, index}) {
    return (
      <View
        style={{
          backgroundColor: 'black',
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
          marginBottom: -50,
        }}>
        <Text style={{fontSize: 30, color: 'white'}}>{item.title}</Text>
        <Text style={{color: 'white'}}>{item.text}</Text>
      </View>
    );
  }
  _renderItem2({item, index}) {
    return (
      <View
        style={{
          backgroundColor: 'black',
          borderRadius: 5,
          height: 160,
          padding: 50,
          marginLeft: 0,
          marginRight: 0,
        }}></View>
    );
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {/* <Header title="Library" navigation={this.props.navigation}></Header> */}
        <Text></Text>
        <Text></Text>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={{justifyContent: 'center'}}>
          <Text style={styles.heading}>Most Popular</Text>
          <Text></Text>
          <Carousel
            layout={'default'}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={375}
            itemWidth={110}
            renderItem={this._renderItem2}
            firstItem={1}
            onSnapToItem={(index) => this.setState({activeIndex: index})}
          />
          <Text></Text>
          <Text></Text>

          <Text style={styles.heading}>Fiction</Text>
          <Text></Text>
          <Carousel
            layout={'default'}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={375}
            itemWidth={110}
            firstItem={1}
            renderItem={this._renderItem2}
            onSnapToItem={(index) => this.setState({activeIndex: index})}
          />
          <Text></Text>
          <Text></Text>

          <Text style={styles.heading}>Non Fiction</Text>
          <Text></Text>
          <Carousel
            layout={'default'}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={375}
            firstItem={1}
            itemWidth={110}
            renderItem={this._renderItem2}
            onSnapToItem={(index) => this.setState({activeIndex: index})}
          />
          <Text></Text>
          <Text></Text>

          <Text style={styles.heading}>All Books</Text>
          <Text></Text>
          <Carousel
            layout={'default'}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={375}
            firstItem={1}
            itemWidth={110}
            renderItem={this._renderItem2}
            onSnapToItem={(index) => this.setState({activeIndex: index})}
          />
          <Text></Text>
          <Text></Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontSize: 17,
  },
});

export default Library;
