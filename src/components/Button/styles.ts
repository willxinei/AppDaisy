import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`

  width: 100%;
  height: 50px;
  background: #1C998A;
  border-radius: 15px;

  align-items: center;
  justify-content: center;
  margin-top: 20px;
`

export const ButtonText = styled.Text`
  font-family: 'Tienne-Bold';
  font-size: 20px;
  line-height: 27px;
  color: #000000;
`
