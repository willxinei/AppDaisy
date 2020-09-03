import React, { useRef } from 'react'
import Icon from 'react-native-vector-icons/Feather'

import {
  Container,
  Text,
  VoltarLogin, VoltarLoginText } from './styles'

import { Image, KeyboardAvoidingView, ScrollView, Platform, _ScrollView } from 'react-native'
import logo from '../../assets/Logo.png'
import fundo from '../../assets/fundo.png'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import api from '../../services/api'

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const navigation = useNavigation()
  return (
      <>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          enabled
        >
          <ScrollView
            keyboardShouldPersistTaps='handled'
          >
            <Container>
              <Image source={logo} />


              <Text>Criar uma conta</Text>

              <Form
                ref={formRef}
                onSubmit={() =>{}}
              >
                <Input
                  autoCorrect={false}
                  name='name'
                  icon='user'
                  placeholder='Nome'
                />
                <Input
                  autoCapitalize='none'
                  autoCorrect={false}
                  keyboardType='email-address'
                  name='email'
                  icon='mail'
                  placeholder='E-mail'
                />
                <Input
                  name='password'
                  icon='lock'
                  placeholder='Senha'
                />
                <Input
                  name='tell'
                  icon='phone'
                  placeholder='Telefone'
                  keyboardType='numeric'
                />


              </Form>
              <Button
                onPress={() => {
                  console.log('deu')
                }}
              >Criar</Button>
            </Container>
          </ScrollView>
        </KeyboardAvoidingView>

        <VoltarLogin onPress={() => navigation.goBack() } >
          <Icon  name='log-in' size={20} color='#FF31A0' />
          <VoltarLoginText>Voltar para o login</VoltarLoginText>
        </VoltarLogin>
      </>
  )
}

export default SignUp
