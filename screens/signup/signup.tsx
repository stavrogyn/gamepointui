import React, { Component, useCallback, useState } from 'react';
import { View, Text, Card, Button, TextField, Checkbox } from 'react-native-ui-lib';

import { styles } from './styles';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

type SignupScreenProps = {
  onSignUpClick?: () => void;
}

enum SignUpField {
  Name = 'name',
  Password = 'password',
  Phone = 'phone',
  ConfirmedPassword = 'confirmed_password',
  Email = 'email',
  Terms = 'terms'
}

export const SignupScreen = ({ onSignUpClick }: SignupScreenProps) => {
  const [currentPassword, setCurrentPassword] = useState('');

  const [isValidName, setIsValidName] = useState(false);
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidConfirmedPassword, setIsValidConfirmedPassword] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleChangeOriginPassword = useCallback((e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setCurrentPassword((e.target as any).value)
  }, [setCurrentPassword]);

  const handleChangeValidity = useCallback((field: SignUpField) => {
    return (value: boolean) => {
      console.log(field, value)

      if (field === SignUpField.Name) {
        setIsValidName(value)
      }

      if (field === SignUpField.Email) {
        setIsValidEmail(value)
      }

      if (field === SignUpField.Password) {
        setIsValidPassword(value)
      }

      if (field === SignUpField.ConfirmedPassword) {
        setIsValidConfirmedPassword(value)
      }

      if (field === SignUpField.Phone) {
        setIsValidPhone(value)
      }
    }
  }, [setIsValidName, setIsValidPhone, setIsValidPassword, setIsValidConfirmedPassword, setIsValidEmail])

  const isValidForSignUp = isValidName && isValidPhone && isValidConfirmedPassword && isValidEmail && isValidPassword;

  console.log(isValidForSignUp, 'isValidForSignUp')

  return (
    <View flex padding-page style={{ width: '100%', flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 30 }}>
      <Text body style={{ fontSize: 24, margin: 16, width: '100%', textAlign: 'center', fontWeight: 'bold' }}>Sign Up</Text>
      <TextField
          validateOnBlur
          onChangeValidity={handleChangeValidity(SignUpField.Name)}
          placeholder={'User Name'}
          floatingPlaceholder
          enableErrors
          validate={['required', (value: any) => value.length > 6]}
          validationMessage={['Field is required', 'Password is too short']}
          maxLength={30}
          containerStyle={{ width: '100%' }}
      />
      <TextField
          validateOnBlur
          onChangeValidity={handleChangeValidity(SignUpField.Phone)}
          validateOnChange
          placeholder={'Phone'}
          floatingPlaceholder
          enableErrors
          validate={['required', 'number', (value: any) => value.length > 6]}
          validationMessage={['Field is required', 'Phone number should contain only numbers','Phone number is too short']}
          maxLength={30}
          containerStyle={{ width: '100%' }}
      />
      <TextField
          validateOnBlur
          onChangeValidity={handleChangeValidity(SignUpField.Email)}
          placeholder={'Email'}
          floatingPlaceholder
          enableErrors
          validate={['required', 'email', (value: any) => value.length > 6]}
          validationMessage={['Field is required', 'Email is invalid', 'Password is too short']}
          maxLength={30}
          containerStyle={{ width: '100%' }}
      />
      <TextField
          validateOnBlur
          onChangeValidity={handleChangeValidity(SignUpField.Password)}
          secureTextEntry={true}
          placeholder={'Password'}
          floatingPlaceholder
          enableErrors
          validate={['required', (value: any) => value.length > 6]}
          validationMessage={['Field is required', 'Password is too short']}
          maxLength={30}
          containerStyle={{ width: '100%' }}
          onChange={handleChangeOriginPassword}
      />
      <TextField
          validateOnChange
          onChangeValidity={handleChangeValidity(SignUpField.ConfirmedPassword)}
          secureTextEntry={true}
          placeholder={'Confirm Password'}
          floatingPlaceholder
          enableErrors
          validate={['required', (value: any) => value.length > 6, (value: any) => value === currentPassword]}
          validationMessage={['Field is required', 'Password is too short', 'Passwords should be the same']}
          maxLength={30}
          containerStyle={{ width: '100%' }}
      />
      <View style={{ width: '100%', marginTop: 40 }}>
        <View style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
          <Checkbox labelStyle={{ fontSize: 14 }}/>
          <Text body style={{ fontSize: 14, marginLeft: 10 }}>I agree with
          <Text style={{ fontWeight: 'bold' }}> terms of policies</Text> and
          <Text style={{ fontWeight: 'bold' }}> rules of Game Point Center</Text></Text>
        </View>
      </View>
      <View style={{ padding: 40, width: '100%' }}>
        <Button label="Sign Up" body bg-primaryColor style={{ width: '100%' }} backgroundColor='#7F35B6' disabledBackgroundColor='gray' disabled={!isValidForSignUp}></Button>
      </View>
    </View>
  );
}