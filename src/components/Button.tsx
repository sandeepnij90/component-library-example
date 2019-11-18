import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { styles } from 'components/styles'

interface IButtonProps {
    buttonStyle: string
    icon: any
}

const ButtonWrapper = styled.button<IButtonProps>`
    padding: 10 12px;
    cursor: pointer;
    border-radius: 4px;
    ${props => props.buttonStyle === 'primary' && `
        background-color: ${styles.colors.primaryColor}
        color: ${styles.colors.white}
        &:hover {
           
        }
    `}

    ${props => props.buttonStyle === 'secondary' && `
        background-color: ${styles.colors.white};
        color: ${styles.colors.primaryColor};
        border: 1px solid ${styles.colors.primaryColor};
    `}
`

interface IProps {
    text: string
    type: 'primary' | 'secondary' | 'delete' | 'add'
    disabled?: boolean
    onClick: any
    icon?: any
}

const Button: FunctionComponent<IProps> = ({ text, type, disabled = false, onClick, icon}) => {
    return (
        <ButtonWrapper onClick={onClick} buttonStyle={type} disabled={disabled} icon={icon}>
            {icon}{text}
        </ButtonWrapper>
    )
}

export { Button }
