import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.blue[600]};
`;

export const Title = styled.Text`
  font-size: 40;
  color: ${({theme}) => theme.colors.white};
`;
