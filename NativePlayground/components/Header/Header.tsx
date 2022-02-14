import React from 'react';
import {View, Text} from 'react-native';

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: 'rgba(0,0,0,0.8)',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: '600',
          color: 'rgba(255,255,255,1)',
        }}>
        Rahul`s Native Playground!
      </Text>
    </View>
  );
};

export default Header;
