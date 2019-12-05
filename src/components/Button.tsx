import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { styles } from './styles'
import { darken } from 'polished'

interface IButtonProps {
    buttonStyle: string
    icon: any
    disabled: boolean
}

const hoverStyles = {
    primaryHover: darken(0.05, styles.colors.primary)
}

const ButtonWrapper = styled.button<IButtonProps>`
    padding: 10px 12px;
    cursor: pointer;
    border-radius: 4px;
    transition: 0.7s
    ${props => props.disabled && `
        opacity: 0.5;
    `}
    ${props => props.buttonStyle === 'primary' && `
        background-color: ${styles.colors.primary}
        border: 0;
        color: ${styles.colors.white}
        &:hover {
            background: ${hoverStyles.primaryHover};
        }
    `}

    ${props => props.buttonStyle === 'secondary' && `
        background-color: ${styles.colors.white};
        color: ${styles.colors.primary};
        border: 1px solid ${styles.colors.primary};
        &:hover {
            border: 1px solid ${hoverStyles.primaryHover};
        }
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
