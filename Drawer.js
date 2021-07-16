import React, {useState} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home';
import Library from './components/Library';
import MyBooks from './components/MyBooks';
import About from './components/About';
import {Block, Text, Button} from 'expo-ui-kit';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/Feather';
import Icon5 from 'react-native-vector-icons/EvilIcons';
import Icon6 from 'react-native-vector-icons/Ionicons';

import Animated from 'react-native-reanimated';
import Book from './components/Book';
import Login from './components/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
import CheckedOut from './components/CheckedOut';
import Register from './components/Register';
import axios from 'axios';
import Search from './components/Search';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Screens = ({navigation, style}) => {
  const [search, setSearch] = React.useState(false);
  const [searchIcon, setSearchIcon] = React.useState('search');
  const [searchVal, setSearchVal] = React.useState('');
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
      <Stack.Navigator
        screenOptions={{
          // headerTransparent: true,
          headerTitle: null,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerLeft: () => (
            <Button
              transparent
              padding
              marginHorizontal={25}
              onPress={() => navigation.openDrawer()}>
              <Icon4 name="menu" size={20} />
            </Button>
          ),
          headerRight: () => (
            <Button
              transparent
              padding
              marginHorizontal={25}
              onPress={() => {
                if (search === true) {
                  setSearch(false);
                  setSearchIcon('search');
                } else {
                  setSearch(true);
                  setSearchIcon('close');
                }
              }}>
              {searchIcon === 'search' ? (
                <Icon4 name="search" size={20} />
              ) : (
                <View style={{flexDirection: 'row', width: '100%'}}>
                  <TextInput
                    style={{
                      fontSize: 13,
                      marginHorizontal: 15,
                      flex: 2,
                    }}
                    onChangeText={(e) => {
                      setSearchVal(e);
                    }}
                    onSubmitEditing={() => {
                      axios
                        .post('http://localhost:3000/books/search', {
                          query: searchVal,
                        })
                        .then((res) => {
                          navigation.navigate('Search', {
                            book: res.data.results.map((obj) => obj),
                          });
                          console.log(res.data.results.map((obj) => obj));
                        })
                        .catch((err) => {
                          console.log(err);
                          alert(
                            'Something went wrong. Are you connected to the internet?',
                          );
                        });
                    }}
                    maxLength={100}
                    placeholder="Search Query"></TextInput>
                  <Icon5 name="close" size={24} />
                </View>
              )}
            </Button>
          ),
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          test="test"
          {...navigation}></Stack.Screen>
        <Stack.Screen
          name="Library"
          component={Library}
          {...navigation}></Stack.Screen>
        <Stack.Screen
          name="My Books"
          component={MyBooks}
          {...navigation}></Stack.Screen>
        <Stack.Screen
          name="About Us"
          component={About}
          {...navigation}></Stack.Screen>
        <Stack.Screen
          name="Book"
          component={Book}
          {...navigation}></Stack.Screen>
        <Stack.Screen
          name="Login"
          component={Login}
          {...navigation}></Stack.Screen>
        <Stack.Screen
          name="CheckedOut"
          component={CheckedOut}
          {...navigation}></Stack.Screen>
        <Stack.Screen
          name="Register"
          component={Register}
          {...navigation}></Stack.Screen>
        <Stack.Screen
          name="Search"
          component={Search}
          {...navigation}></Stack.Screen>
      </Stack.Navigator>
    </Animated.View>
  );
};

const DrawerContent = (props) => {
  const [label, setLabel] = React.useState('');
  const loginAsync = async () => {
    const tokenAsync = await AsyncStorage.getItem('token');
    if (tokenAsync === undefined || tokenAsync === null || tokenAsync === '') {
      setLabel('Login');
    } else {
      setLabel('Logout');
    }
  };
  useEffect(() => {
    loginAsync();
    return () => {
      console.log(null);
    };
  });

  return (
    <DrawerContentScrollView {...props}>
      <Block>
        <Block flex={0.4} margin={20} bottom>
          {/* <Image
            source={{
              uri:
                'https://cdn.iconscout.com/icon/free/png-256/react-1543566-1306069.png',
              height: 60,
              width: 60,
            }}
            resizeMode="center"
            style={{borderRadius: 30}}
          /> */}
          <Icon6 name="ios-library" size={60}></Icon6>
          <Text></Text>
          <Text title>Diversity Library</Text>
          <Text size={9}>contact@diversitylibrary.com</Text>
        </Block>
        <DrawerItem
          label="Home"
          labelStyle={{marginLeft: -16}}
          onPress={() => props.navigation.navigate('Home')}
          icon={() => <Icon name="home" size={16} />}
        />
        {/* <DrawerItem
          label="Library"
          labelStyle={{marginLeft: -16}}
          onPress={() => props.navigation.navigate('Library')}
          icon={() => <Icon2 name="bookshelf" size={16} />}
        />
        <DrawerItem
          label="My Books"
          labelStyle={{marginLeft: -16}}
          onPress={() => props.navigation.navigate('My Books')}
          icon={() => <Icon name="book" size={16} />}
        /> */}
        <DrawerItem
          label="About Us"
          labelStyle={{marginLeft: -16}}
          onPress={() => props.navigation.navigate('About Us')}
          icon={() => <Icon3 name="team" size={16} />}
        />
      </Block>

      <Block flex={false}>
        <DrawerItem
          label={label}
          labelStyle={{marginLeft: -16}}
          onPress={() =>
            props.navigation.navigate('Login', {
              loggedOut: label,
            })
          }
          icon={() => <Icon3 name="login" color="black" size={16} />}
        />
      </Block>
    </DrawerContentScrollView>
  );
};

export default () => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = {borderRadius, transform: [{scale}]};
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerType="slide"
      overlayColor="transparent"
      drawerStyle={styles.drawerStyles}
      contentContainerStyle={{flex: 1}}
      drawerContentOptions={{
        activeBackgroundColor: 'transparent',
        activeTintColor: 'white',
        inactiveTintColor: 'white',
      }}
      sceneContainerStyle={{backgroundColor: 'transparent'}}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Screens">
        {(props) => <Screens {...props} style={animatedStyle} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
  },
  drawerStyles: {flex: 1, width: '50%', backgroundColor: 'transparent'},
  drawerItem: {alignItems: 'flex-start', marginVertical: 0},
  drawerLabel: {color: 'white', marginLeft: -16},
  avatar: {
    borderRadius: 60,
    marginBottom: 16,
    borderColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
  },
});
