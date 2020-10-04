import React from 'react';
import { Image } from 'react-native';

import logoImg from '../../assets/logo.png'

import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Title } from './styles'


const SignIn: React.FC = () => {
  return (  
    <Container>
      <Image source={logoImg} />

      <Title>Faça seu login</Title>

      <Input name="email" icon="mail" placeholder="Email" />
      <Input name="password" icon="lock" placeholder="Senha" />

      <Button onPress={() => {}}>Entrar</Button>
    </Container>
    
  )
}

export default SignIn;