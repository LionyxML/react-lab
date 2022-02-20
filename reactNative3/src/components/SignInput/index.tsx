import React from 'react';
import {SvgProps} from 'react-native-svg';
import {useTheme} from 'styled-components/native';
import {Input, InputArea} from './styles';

export const SignInput = ({
  SvgIcon,
  placeholder,
  value,
  onChangeText,
  isPassword,
}: {
  SvgIcon: React.FC<SvgProps>;
  placeholder: string;
  value: string;
  onChangeText: React.Dispatch<React.SetStateAction<string>>;
  isPassword?: boolean;
}) => {
  const theme = useTheme();

  return (
    <InputArea>
      <SvgIcon width="24" height="24" fill={theme.colors.blue[600]} />
      <Input
        placeholder={placeholder}
        placeholderTextColor={theme.colors.blue[600]}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        secureTextEntry={isPassword}
      />
    </InputArea>
  );
};
