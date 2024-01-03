import React, { Component, useCallback, useState } from 'react';
import { View, Text, Card, Button, TextField } from 'react-native-ui-lib';

import { styles } from './styles';

export const ReservationScreen = () => {
  const [isExtended, setIsExtended] = useState(false);

  const handleCardClick = useCallback(() => setIsExtended(true), [setIsExtended]);

  const handleGoBackClick = useCallback(() => setIsExtended(false), [setIsExtended]);

  if (isExtended) {
    return (
      <View flex padding-page style={{ flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 30 }}>
        <Card height={100} center padding-s4 marginB-s4 style={{ width: '100%', }}>
          <Text body style={{ color: '#7F35B6' }}>SOME PCS MAP</Text>
        </Card>
        <Card height={100} center padding-s4 marginB-s4 style={{ width: '100%', }} onTouchEnd={handleGoBackClick}>
          <Text body style={{ color: '#7F35B6' }}>Go back</Text>
        </Card>
      </View>
    )
  }

  return (
    <View flex padding-page style={{ flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 30 }}>
       <Card height={100} center padding-s4 marginB-s4 style={{ width: '100%' }} onTouchEnd={handleCardClick}>
        <Text body style={{ color: '#7F35B6' }}>Regular PC Room</Text>
       </Card>
       <Card height={100} center padding-s4 marginB-s4 style={{ width: '100%', }} onTouchEnd={handleCardClick}>
        <Text body style={{ color: '#7F35B6' }}>Pro PC Room</Text>
       </Card>
    </View>
  );
}