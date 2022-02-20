import React, {useState} from 'react';
import EmailIcon from '../../assets/images/email.svg';
import PassIcon from '../../assets/images/lock.svg';
import PersonIcon from '../../assets/images/person.svg';
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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export const SignUp = () => {
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const [nameField, setNameField] = useState('');

  const navigation = useNavigation();

  const handleSignInButtonClick = () => {};
  const handleMessageButtonClick = () => {
    navigation.reset({routes: [{name: 'SignIn'}]});
  };

  return (
    <Container>
      <ZazenLogo width="140px" height="150px" fill="#FFF" />
      <Title>zaZen</Title>
      <InputArea>
        <KeyboardAwareScrollView>
          <SignInput
            SvgIcon={PersonIcon}
            placeholder="Digite o seu nome"
            value={nameField}
            onChangeText={setNameField}
          />
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
            <CustomButtomText>CADASTRAR</CustomButtomText>
          </CustomButton>
        </KeyboardAwareScrollView>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Faça login.</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
