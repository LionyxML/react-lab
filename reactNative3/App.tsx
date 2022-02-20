import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';
import {ThemeProvider} from 'styled-components/native';
import {defaultTheme} from './src/themes';

export default () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </ThemeProvider>
  );
};
