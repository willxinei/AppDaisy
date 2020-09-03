import React, { useCallback, useRef, useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { Form } from '@unform/mobile'
import {
  Container,
  Text,
  EsquiciSenha,
  EsquiciSenhaText,
  CriarConta, CriarContaText,
  FundoA, FundoB, FundoC, FundoD
} from './styles'

import logo from '../../assets/Logo.png'
import fundo1 from '../../assets/fundo1.png'
import fundo2 from '../../assets/fundo2.png'
import fundo3 from '../../assets/fundo3.png'
import fundo4 from '../../assets/fundo4.png'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { FormHandles } from '@unform/core'

const SignIn: React.FC = () => {
  const navigation = useNavigation()

  const formRef = useRef<FormHandles>(null)
  const handleSingnIn = useCallback((data) => {
    console.log(data)
  }, [])

  return (
      <>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          enabled
        >
          <ScrollView
            keyboardShouldPersistTaps='handled'
            contentContainerStyle={{ flex: 1}}
          >
            <Container>
            <FundoA>
                <Image source={fundo1} />
              </FundoA>
              <FundoB>
                <Image source={fundo4} />
              </FundoB>

              <FundoC>
                <Image source={fundo3} />
              </FundoC>

              <FundoD>
                <Image source={fundo2} />
              </FundoD>

              <Image source={logo} />
                <Text>Entre com um conta</Text>

              <Form
                ref={formRef}
                onSubmit={handleSingnIn}
              >
                <Input
                  autoCapitalize='none'
                  autoCorrect={false}
                  keyboardType='email-address'
                  name='email'
                  icon='mail'
                  placeholder='E-mail'
                />
                <Input
                  secureTextEntry
                  name='password'
                  icon='lock'
                  placeholder='Senha'
                />

              </Form>
              <Button
                onPress={() => {
                  formRef.current?.submitForm()
                }}
              >
                Entrar
              </Button>
              <EsquiciSenha>
                <EsquiciSenhaText>Esqui minha senha</EsquiciSenhaText>
              </EsquiciSenha>
            </Container>
          </ScrollView>
        </KeyboardAvoidingView>

        <CriarConta onPress={() => navigation.navigate('SignUp') } >
          <Icon  name='log-in' size={20} color='#FF31A0' />
          <CriarContaText>Criar uma conta</CriarContaText>
        </CriarConta>
      </>
  )
}

export default SignIn
