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

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 200px;
`;
