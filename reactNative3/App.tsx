import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';
import {ThemeProvider} from 'styled-components/native';
import {defaultTheme} from './src/themes';
import UserContextProvider from './src/contexts/UserContext';

export default () => {
  return (
    <UserContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </ThemeProvider>
    </UserContextProvider>
  );
};
