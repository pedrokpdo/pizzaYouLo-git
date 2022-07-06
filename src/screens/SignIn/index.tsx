import React from 'react'
import { Container, Content, Title, Brand, ForgotPasswordButton, ForgotPasswordLabel } from './styles'
import brandImg from '../../assets/brand.png'
import { Input } from '../../components/input'
import { Button } from '../../components/Buttom'
import { KeyboardAvoidingView, Platform } from 'react-native'


export function SignIn() {

    return (
        <Container>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <Content>
                    <Brand source={brandImg} />
                    <Title>LOGIN</Title>
                    <Input
                        placeholder='E-mail'
                        type='secondary'
                        autoCorrect={false}
                        autoCapitalize='none'
                    />
                    <Input
                        placeholder='E-mail'
                        type='secondary'
                        autoCorrect={false}
                        autoCapitalize='none'
                    />
                    <ForgotPasswordButton>
                        <ForgotPasswordLabel>Esqueci minha Senha</ForgotPasswordLabel>
                    </ForgotPasswordButton>
                    <Button
                        title='Entrar'
                        type='secondary'
                    />
                </Content>
            </KeyboardAvoidingView>

        </Container>

    )
}