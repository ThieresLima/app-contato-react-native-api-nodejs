import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background-color: #FFF;
  border-radius: 10px;

  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #6B70C2;
  font-size: 18px;
`;
