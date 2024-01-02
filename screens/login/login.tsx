import React, { Component } from 'react';
import { View, Text, Card, Button, TextField } from 'react-native-ui-lib';

import { styles } from './styles';

export class LoginScreen extends Component {
  render() {
    return (
      <View flex padding-page style={{ flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 30 }}>
         <Card height={100} center padding-s4 marginB-s4>
          <Text body>Log in into the system</Text>
        </Card>
        <TextField
            placeholder={'Login'}
            floatingPlaceholder
            enableErrors
            validate={['required', 'email', (value: any) => value.length > 6]}
            validationMessage={['Field is required', 'Email is invalid', 'Password is too short']}
            showCharCounter
            maxLength={30}
        />
        <TextField
            placeholder={'Password'}
            floatingPlaceholder
            enableErrors
            validate={['required', 'email', (value: any) => value.length > 6]}
            validationMessage={['Field is required', 'Email is invalid', 'Password is too short']}
            showCharCounter
            maxLength={30}
        />
        <View style={{ padding: 40, width: '100%' }}>
          <Button label="Button" body bg-primaryColor square style={{ backgroundColor: '#7F35B6', width: '100%' }}></Button>
        </View>
      </View>
    );
  }
}