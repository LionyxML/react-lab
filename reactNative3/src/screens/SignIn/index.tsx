import React, {useState} from 'react';
import EmailIcon from '../../assets/images/email.svg';
import PassIcon from '../../assets/images/lock.svg';
import ZazenLogo from '../../assets/images/Enso.svg';
import {SignInput} from '../../components';
import {
  Container,
  Title,
  InputArea,
  CustomButton,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
  CustomButtomText,
} from './styles';
import {useNavigation} from '@react-navigation/native';

export const SignIn = () => {
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const navigation = useNavigation();

  const handleSignInButtonClick = () => {};
  const handleMessageButtonClick = () => {
    navigation.reset({routes: [{name: 'SignUp'}]});
  };

  return (
    <Container>
      <ZazenLogo width="140px" height="150px" fill="#FFF" />
      <Title>zaZen</Title>
      <InputArea>
        <SignInput
          SvgIcon={EmailIcon}
          placeholder="Digite o seu e-mail"
          value={emailField}
          onChangeText={setEmailField}
        />
        <SignInput
          SvgIcon={PassIcon}
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={setPasswordField}
          isPassword
        />
        <CustomButton onPress={handleSignInButtonClick}>
          <CustomButtomText>LOGIN</CustomButtomText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>Ainda não tem conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se.</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
