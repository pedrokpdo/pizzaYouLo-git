import styled, { css } from 'styled-components/native'


export const Container = styled.TouchableOpacity`
    flex: 1;
    max-height: 56px;
    min-height: 56px;
    border-radius: 12px;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme, type }) => type === 'primary' ? theme.colors.SUCCESS_900 : theme.colors.PRIMARY_800};
`

export const Title = styled.Text`
    font-size: 14px;

    ${({ theme }) => css`
        color: ${theme.colors.TITLE};
        font-family: ${theme.fonts.TEXT};
    `}
`

export const Load = styled.ActivityIndicator.attrs(({theme}) => ({
    color: theme.colors.TITLE
}))