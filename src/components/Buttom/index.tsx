import React from 'react'
import { Container, Title } from './styles'

interface Props {
    type: any;
    title: string;
}

export function Button({ title, type = 'primary' }: Props) {

    return (
        <Container
            type={type}
        >
            <Title>{title}</Title>
        </Container>
    )
}