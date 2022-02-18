import React from 'react';
import {Text} from 'react-native';
import {Container, AppTitle, AppSubTitle} from './styles';

import AppLogo from '../../assets/baldLogo.svg';

export default () => {
  return (
    <Container>
      <AppLogo />
      <AppTitle>The Bald App</AppTitle>
      <AppSubTitle>by @</AppSubTitle>
    </Container>
  );
};
