import React, { Component } from 'react';
import { View, Text, Card, Button, TextField } from 'react-native-ui-lib';

import { styles } from './styles';

export class ReservationScreen extends Component {
  render() {
    return (
      <View flex padding-page style={{ flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 30 }}>
         <Card height={100} center padding-s4 marginB-s4>
          <Text body>Some reservation screen staff</Text>
        </Card>
      </View>
    );
  }
}