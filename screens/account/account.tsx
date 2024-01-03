import React, { Component, useCallback, useState } from 'react';
import { View, Text, Card, Button, TextField, Checkbox } from 'react-native-ui-lib';

import { styles } from './styles';
import { LoginScreen } from '../login';
import { SignupScreen } from '../signup';

export const AccountScreen = () => {
  const [isLoginScreen, setIsLoginScreen] = useState(true);

  const handleSignUpClick = useCallback(() => setIsLoginScreen(false), [setIsLoginScreen]);

  if (isLoginScreen) {
    return (
      <LoginScreen onSignUpClick={handleSignUpClick} />
    );
  }

  return (
    <SignupScreen />
  );
}