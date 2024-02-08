import React, { Component, useCallback, useState } from 'react';
import { View, Text, Card, Button, TextField } from 'react-native-ui-lib';

import { styles } from './styles';

export const ReservationScreen = () => {
  const [isExtended, setIsExtended] = useState(false);

  const handleCardClick = useCallback(() => setIsExtended(true), [setIsExtended]);

  const handleGoBackClick = useCallback(() => setIsExtended(false), [setIsExtended]);

  const pcs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  if (isExtended) {
    return (
      <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexWrap: 'wrap', width: '100%', height: '100%' }}>
        {pcs.map(item => {
          return (
            <Card center padding-s4 marginB-s4 style={{ height: '30px', width: '30px' }}>
              <Text body style={{ color: '#7F35B6' }}>pc {item}</Text>
            </Card>
          )
        })}
        <View>
          {pcs.map(item => {
            return (
              <Card center padding-s4 marginB-s4 style={{ height: '30px', width: '30px' }}>
                <Text body style={{ color: '#7F35B6' }}>pc {item}</Text>
              </Card>
            )
          })}
        </View>+
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