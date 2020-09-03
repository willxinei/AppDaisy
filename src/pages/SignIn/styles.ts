import styled from 'styled-components/native'
import { Platform } from 'react-native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #f2f2f2;

  padding: 0 40px ${Platform.OS === 'android' ? 80 : 40}px;

`

export const Text = styled.Text`
  font-family: 'Tienne-Black';
  font-size: 20px;
  color: #508373;
  margin: 50px 0 14px;
`

export const EsquiciSenha = styled.TouchableOpacity`
   margin-top: 20px;
`

export const EsquiciSenhaText = styled.Text`
  font-family: 'Tienne-Regular';
  font-size: 16px;
  color: #508373;
`

export const CriarConta = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #f2f2f2f2;
  border-top-width: 1px;
  border-color: #c2c2c2;
  padding: 15px 0;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const CriarContaText = styled.Text`
  color: #508373;
  font-family: 'Tienne-Regular';
  font-size: 20px;
  margin-left: 16px;
`

export const FundoA = styled.View`
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0;
`

export const FundoB = styled.View`
position: absolute;
left: 68.56%;
right: -8.33%;
top: 55.72%;
bottom: 1.11%;
`

export const FundoC = styled.View`
position: absolute;
left: -8%;
right: 60%;
top: 70.72%;
bottom: 1.11%;
`

export const FundoD = styled.View`
position: absolute;
left: 80%;
right: 10%;
top: 0%;

`


