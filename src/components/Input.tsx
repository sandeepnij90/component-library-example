import React, { FunctionComponent, Fragment, useState, useEffect  } from 'react'
import styled from 'styled-components'
import { Tooltip } from './Tooltip'
import '../overrides.scss'
interface IProps {
    maxWidth?: number
    maxLength?: number
    type: 'text' | 'password' | 'number' | 'email'
    label: string
    errorMessage: string
    onChange?: (e: any) => void
    onBlur?: (e: any) => void
    placeholder?: string
    disabled?: boolean
    tooltip?: string
}

interface InputWrapperProps {
    maxWidth?: number
    errorMessage?: string
    disabled?: boolean
}

const InputContainer = styled.div`
    display: grid;
    margin-top: 8px;

`

const Label = styled.label`
    font-size: 14px;
`

const InputWrapper = styled.input<InputWrapperProps>`
    width: 100%;
    border: ${props => props.errorMessage && !props.disabled ? `1px solid red` : `1px solid #788A9A`};
    height: 42px;
    margin-bottom: 8px;
    border-radius: 4px;
    padding-left: 16px;
    box-sizing: border-box;
    font-size: 16px;
    outline: none;
    &:hover {
        border: 1px solid #3483C5;
    }

    &:focus {
        border: 2px solid #3483C5;
    };
    ${props => props.maxWidth && `
        max-width: ${props.maxWidth}px
    `}
`

const Error = styled.span`
    font-size: 12px;
    color: #FF6E6E;
    font-size: 14px;
`

const LabelContainer = styled.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    align-items: flex-end;
`

const Input: FunctionComponent<IProps> = ({ maxWidth, maxLength, type, label, errorMessage, onChange, onBlur, placeholder, disabled = false, tooltip }) => {

    const handleOnChange = (e: any) => {
        onChange(e.target.value)
    }

    const renderLabel = () => {
        if (tooltip) {
            return (
                <LabelContainer>
                    <Label>{label}</Label>
                    <Tooltip message={tooltip} />
                </LabelContainer>
            )
        }
        return (
            <Label>{label}</Label>
        )
    }

    const renderError = () => {
        if (errorMessage && !disabled) {
            return <Error>{errorMessage}</Error>
        }
    }
    return (
        <div>
           {renderLabel()}
            <InputContainer>
                <InputWrapper
                    maxWidth={maxWidth}
                    maxLength={maxLength}
                    type={type}
                    onChange={handleOnChange}
                    onBlur={onBlur}
                    errorMessage={errorMessage}
                    placeholder={placeholder}
                    disabled={disabled}
                />
            </InputContainer>
            {renderError()}
        </div>
    )
}

export { Input }