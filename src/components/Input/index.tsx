import React, { useRef, useEffect, useState, useCallback } from 'react'
import { TextInputProps } from 'react-native'

import { Container, InputText, Icon } from './styles'
import { useField } from '@unform/core'

interface InputProps extends TextInputProps {
  name: string
  icon: string
}

interface InputValueReference {
  value: string
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest}) => {
  const [isFocused, setsFocused] = useState(false)
  const [isFilled, setsFilled] = useState(false)

  const handleInput = useCallback(() => {
    setsFocused(true)

  }, [])

  const handleBlur = useCallback(() => {
    setsFocused(false)
    setsFilled(!!inpuValueRef.current.value)

  }, [])

  const inputElementRef = useRef<any>(null)

  const { registerField, defaultValue= '', fieldName, error } = useField(name)
  const inpuValueRef = useRef<InputValueReference>({ value: defaultValue})

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inpuValueRef.current,
      path: 'value',
      setValue(ref: any, value) {
        inpuValueRef.current.value = value
        inputElementRef.current.setNativeProps({ text: value })
      },
      clearValue() {
        inpuValueRef.current.value = ''
        inputElementRef.current.clear()
      }
    })
  }, [fieldName, registerField])

  return (
    <Container isFocused={isFocused} >
      <Icon name={icon} size={20} color={isFocused || isFilled ? '#ff31a0' : '#6F6F6F'} />
      <InputText
        ref={inputElementRef}
        keyboardAppearance='dark'
        placeholderTextColor='#6F6F6F'
        onFocus={handleInput}
        onBlur={handleBlur}
        defaultValue={ defaultValue }
        onChangeText={ value => {
          inpuValueRef.current.value = value
        }}
        {...rest }
      />
    </Container>
  )
}

export default Input
