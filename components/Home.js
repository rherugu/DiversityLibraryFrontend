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

class Home extends Component {
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
          height: 150,
          padding: 50,
          marginLeft: 0,
          marginRight: 0,
        }}>
        <Text style={{fontSize: 10, color: 'white'}}>{item.title}</Text>
        <Text style={{color: 'white'}}>{item.text}</Text>
      </View>
    );
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {/* <Header
          title="Diversity Library"
          navigation={this.props.navigation}></Header> */}
        <Text></Text>
        <Text></Text>
        <View style={{height: 260}}>
          <Carousel
            layout={'default'}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={375}
            itemWidth={250}
            sliderHeight={100}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({activeIndex: index})}
          />
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={{justifyContent: 'center'}}>
          <View style={styles.menu}>
            <TouchableOpacity
              style={styles.menutext}
              onPress={() => {
                LayoutAnimation.spring();
                this.setState({
                  lineDisplay: 'flex',
                  lineDisplay2: 'none',
                });
              }}>
              <Text>Books</Text>
              <View
                style={{
                  width: '100%',
                  height: 3,
                  backgroundColor: 'black',
                  borderBottomLeftRadius: 5,
                  borderBottomRightRadius: 5,
                  display: this.state.lineDisplay,
                }}></View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menutext}
              onPress={() => {
                LayoutAnimation.spring();
                this.setState({
                  lineDisplay: 'none',
                  lineDisplay2: 'flex',
                });
              }}>
              <Text>My Library</Text>
              <View
                style={{
                  width: '100%',
                  height: 3,
                  backgroundColor: 'black',
                  borderBottomLeftRadius: 5,
                  borderBottomRightRadius: 5,
                  display: this.state.lineDisplay2,
                }}></View>
            </TouchableOpacity>
          </View>
          <Carousel
            layout={'default'}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={375}
            firstItem={1}
            itemWidth={100}
            renderItem={this._renderItem2}
            onSnapToItem={(index) => this.setState({activeIndex: index})}
          />
          <Text></Text>
          <Text></Text>
          <Carousel
            layout={'default'}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={375}
            firstItem={1}
            itemWidth={100}
            renderItem={this._renderItem2}
            onSnapToItem={(index) => this.setState({activeIndex: index})}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    flexDirection: 'column',
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
  menutext: {
    marginLeft: 75,
    marginRight: 75,
  },
});

export default Home;
