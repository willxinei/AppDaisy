import styled from 'styled-components/native'
import { Platform } from 'react-native'

export const Container = styled.View`
  height: 1150px;
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #f2f2f2f2;

  padding: 0 30px ${Platform.OS === 'android' ? 120 : 40}px;

`

export const Text = styled.Text`
  font-family: 'Tienne-Black';
  font-size: 20px;
  color: #508373;
  margin: 64px 0 24px;
`

export const VoltarLogin = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #000000;
  border-top-width: 1px;
  border-color: #c2c2c2;
  padding: 15px 0;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const VoltarLoginText = styled.Text`
  color: #508373;
  font-family: 'Tienne-Regular';
  font-size: 20px;
  margin-left: 16px;
`
