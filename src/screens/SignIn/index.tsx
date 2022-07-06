import React from 'react'
import { Container } from './styles'
import { Input } from '../../components/input'
import { Button } from '../../components/Buttom'
import { KeyboardAvoidingView } from 'react-native'


export function SignIn() {

    return (
        <Container>
            <KeyboardAvoidingView>

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
                <Button
                    title='Entrar'
                    type='secondary'
                />
            </KeyboardAvoidingView>

        </Container>

    )
}