import React, { Component } from 'react';
import { View, Text, Card, Button, TextField, Checkbox } from 'react-native-ui-lib';

import { styles } from './styles';

export class AccountScreen extends Component {
  render() {
    return (
      <View flex padding-page style={{ width: '100%', flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 30 }}>
        <Text body style={{ fontSize: 24, margin: 16, width: '100%', textAlign: 'center' }}>Sign In</Text>
        <TextField
            placeholder={'Email'}
            floatingPlaceholder
            enableErrors
            validate={['required', 'email', (value: any) => value.length > 6]}
            validationMessage={['Field is required', 'Email is invalid', 'Password is too short']}
            maxLength={30}
            containerStyle={{ width: '100%' }}
        />
        <TextField
            secureTextEntry={true}
            placeholder={'Password'}
            floatingPlaceholder
            enableErrors
            validate={['required', (value: any) => value.length > 6]}
            validationMessage={['Field is required', 'Password is too short']}
            maxLength={30}
            containerStyle={{ width: '100%' }}
        />
        <View style={{ width: '100%' }}>
          <View style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', width: '100%'}}>
            <Text body style={{ fontSize: 10, color: 'gray' }}>Forgot the password?</Text>
          </View>
          <View style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start'}}>
            <Checkbox labelStyle={{ fontSize: 14 }} label="Remember me"/>
          </View>
        </View>
        <View style={{ padding: 40, width: '100%' }}>
          <Button label="LOGIN" body bg-primaryColor square style={{ backgroundColor: '#7F35B6', width: '100%' }}></Button>
        </View>
        <View style={{ width: '100%', display: 'flex', justifyContent: 'center' , alignItems: 'center' }}>
          <Text body style={{ fontSize: 14 }}>Don't have an account? <Text style={{ fontWeight: 'bold' }}>Sing up!</Text></Text>
        </View>
      </View>
    );
  }
}