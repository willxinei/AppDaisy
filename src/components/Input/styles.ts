import styled, { css } from 'styled-components/native'
import FeatherIcon from 'react-native-vector-icons/Feather'

interface ContainerProps {
  isFocused: boolean
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #f2f2f2f2;
  border-radius: 15px;
  border-width: 2px;
  margin-bottom: 10px;

  border-color: #1C998A;

  flex-direction: row;
  align-items: center;

  ${props => props.isFocused && css`
    border-color: #FF31A0;
  `}

`

export const InputText = styled.TextInput`
  flex: 1;
  color: #363636;
  font-size: 20px;
`

export const Icon = styled(FeatherIcon)`
  margin-right: 14px;
`


