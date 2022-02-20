import React, {useEffect} from 'react';
import {Container, LoadingIcon, Title} from './styles';
import ZazenLogo from '../../assets/images/Enso.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {miliSecondsDelay} from '../../utils';

export const Preload = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        // TODO: validate token
      } else {
        await miliSecondsDelay(2000);
        navigation.navigate('SignIn');
      }
    };
    checkToken();
  }, []);

  return (
    <Container>
      <ZazenLogo width="140px" height="150px" fill="#FFF" />
      <Title>zaZen</Title>
      <LoadingIcon size="large" color="#FFF" />
    </Container>
  );
};
