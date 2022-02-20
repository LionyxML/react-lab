import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.blue[600]};
`;

export const Title = styled.Text`
  font-size: 60px;
  font-family: 'Lobster-Regular';
  color: ${({theme}) => theme.colors.white};
`;

export const InputArea = styled.View`
  width: 100%;
  padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
  height: 60px;
  background-color: ${({theme}) => theme.colors.blue[500]};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const CustomButtomText = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.colors.white};
`;

export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const SignMessageButtonText = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.colors.white};
`;

export const SignMessageButtonTextBold = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-left: 5px;
  color: ${({theme}) => theme.colors.white};
`;
