import React from 'react';
import {Text} from 'react-native';
import {Container, AppTitle, AppSubTitle} from './styles';
import SvgUri from 'react-native-svg-uri';

import AppLogo from './baldLogo.svg';

export default () => {
  return (
    <Container>
      <SvgUri width="25" height="25" source={require('./baldLogo.svg')} />
      <AppLogo width="100" height="100" />
      <AppTitle>The Bald App</AppTitle>
      <AppSubTitle>by @</AppSubTitle>
    </Container>
  );
};
