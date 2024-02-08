import React, { Component } from 'react';
import { View, Carousel } from 'react-native-ui-lib';

type New = {
  title: string;
  description: string;
  imageUrl: string;
}

const news: New[] = [{
  title: 'Gaming Shit In Podgorica',
  description: 'Gaming lounge providing the use of high-end computers and consoles for recreation, education and work',
  imageUrl: '../../assets/gamepointphoto.jpg'
}, {
  title: 'Gaming Shit In Podgorica',
  description: 'Gaming lounge providing the use of high-end computers and consoles for recreation, education and work',
  imageUrl: '../../assets/gamepointphoto.jpg'
}, {
  title: 'Gaming Shit In Podgorica',
  description: 'Gaming lounge providing the use of high-end computers and consoles for recreation, education and work',
  imageUrl: '../../assets/gamepointphoto.jpg'
}, {
  title: 'Gaming Shit In Podgorica',
  description: 'Gaming lounge providing the use of high-end computers and consoles for recreation, education and work',
  imageUrl: '../../assets/gamepointphoto.jpg'
}, {
  title: 'Gaming Shit In Podgorica',
  description: 'Gaming lounge providing the use of high-end computers and consoles for recreation, education and work',
  imageUrl: '../../assets/gamepointphoto.jpg'
} ]

export const HomeScreen = () => {
  return (
    <View flex padding-page style={{ flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 30 }}>
      kek
    </View>
  );
}