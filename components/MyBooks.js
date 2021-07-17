import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
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
  Image,
  NativeModules,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const {UIManager} = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class MyBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      books: [],
      lineDisplay: 'flex',
      lineDisplay2: 'none',
    };
  }

  async componentDidMount() {
    const userId = await AsyncStorage.getItem('userId');
    console.log(userId);
    if (userId === null || undefined) {
      alert('Please login to view books.');
      this.props.navigation.navigate('Login');
    } else {
      await axios
        .get('https://diversitylibrary.herokuapp.com/users/userid/' + userId)
        .then((res) => {
          this.setState({
            books: res.data.checkedOutBooks,
          });
          console.log(this.state.books);
          if (
            res.data.checkedOutBooks === [] ||
            null ||
            undefined ||
            res.data.checkedOutBooks.length === 0
          ) {
            alert("Oops, it looks like you don't have any books here.");
            this.props.navigation.navigate('Home');
          }
        })

        .catch((err) => {
          console.log(err);
          alert('Something went wrong. :(');
        });
      for (var i = 0; i < this.state.books.length; i++) {
        axios
          .get(
            'https://diversitylibrary.herokuapp.com/books/id/' +
              this.state.books[i],
          )
          .then((res) => {
            console.log(res.data);
            let markers = [...this.state.books];
            markers[i] = {...markers[i], key: res.data};
            this.setState({markers});
          })
          .catch((err) => {
            console.log(err);
            alert('Something went wrong.');
          });
      }
      console.log('dd', this.state.books);
    }
  }

  _renderItem2({item, index}) {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('Book', {
            image: item.cover,
            title: item.title,
            author: item.author,
            id: item._id,
            checkedOut: item.checkedOut,
          });
        }}>
        <Image
          source={{uri: item.cover}}
          style={{
            borderRadius: 5,
            height: 150,
            padding: 50,
            marginLeft: 0,
            marginRight: 0,
          }}></Image>
      </TouchableOpacity>
    );
  }
  render() {
    var return1 = false;
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text></Text>
        <Text></Text>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={{justifyContent: 'center'}}>
          <Text style={styles.heading}>Checked Out Books</Text>
          <Text></Text>
          {/* {this.state.books.map((book) => {
            axios
              .get('https://diversitylibrary.herokuapp.com/books/id/' + book)
              .then((res) => {
                console.log(res.data);
                return1 = true;
              })
              .catch((err) => {
                console.log(err);
                alert('Something went wrong.');
              });
            return (
              <View>
                <Image
                  source={{uri: res.data.cover}}
                  height={150}
                  width={110}></Image>
                <Text>{res.data.title}</Text>
              </View>
            );
          })} */}

          <View>
            <Carousel
              layout={'default'}
              ref={(ref) => (this.carousel = ref)}
              data={this.state.books}
              sliderWidth={375}
              itemWidth={110}
              renderItem={this._renderItem2}
              firstItem={1}
              onSnapToItem={(index) => this.setState({activeIndex: index})}
            />
            <Text></Text>
            <Text></Text>

            <Text style={styles.heading}>Returned Books</Text>
            <Text></Text>
            <Carousel
              layout={'default'}
              ref={(ref) => (this.carousel = ref)}
              data={this.state.books}
              sliderWidth={375}
              itemWidth={110}
              firstItem={1}
              renderItem={this._renderItem2}
              onSnapToItem={(index) => this.setState({activeIndex: index})}
            />
          </View>
          <Text></Text>
          <Text></Text>

          {/* <Text style={styles.heading}>Books you've saved for later</Text>
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
          <Text></Text> */}

          {/* <Text style={styles.heading}>Favorite Books</Text>
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
          <Text></Text> */}
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

export default MyBooks;
