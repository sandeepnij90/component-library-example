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
    prefix?: string
    suffix?: string
    required?: boolean
}

interface InputWrapperProps {
    maxWidth?: number
    errorMessage?: string
    disabled?: boolean
    prefix?: string
    suffix?: string
}

interface IInputContainerProps {
    prefix?: string
    suffix?: string
    errorMessage?: string
}

const InputContainer = styled.div<IInputContainerProps>`
    display: grid;
    margin-top: 8px;
    position: relative;
    grid-auto-flow: column;
    align-items: center;

    ${props => props.suffix &&`
        grid-template-columns: max-content;
        border-right: 0;
        &:after {
            content: "${props.suffix}";
            border: 1px solid #788A9A;
            border-left: 0;
            padding: 10px;
            border-color: ${props.errorMessage ? `red` : `#788A9A`};
            text-align: right;
            color: #788A9A;
        }
    `}

    ${props => props.prefix &&`
    grid-template-columns: min-content;
    &:before {
        content: "${props.prefix}";
        border: 1px solid #788A9A;
        border-right: 0;
        padding: 10px;
        border-color: ${props.errorMessage ? `red` : `#788A9A`};
        color: #788A9A;
    }
`}

    ${props => props.prefix &&`
    &:before {
        content: "${props.prefix}";
    }
`}
`   

const Label = styled.label`
    font-size: 14px;
`

const InputWrapper = styled.input<InputWrapperProps>`
    width: 100%;
    border: ${props => props.errorMessage && !props.disabled ? `1px solid red` : `1px solid #788A9A`};
    height: 42px;
    border-radius: 4px;
    padding-left: 16px;
    box-sizing: border-box;
    font-size: 16px;
    outline: none;
    ${props => props.maxWidth && `
        max-width: ${props.maxWidth}px;
    `}
    ${props => props.suffix && `
        border-right: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    `}
    ${props => props.prefix && `
    border-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
`}
    &:hover {
        border: 1px solid #3483C5;
    }

    &:focus {
        border: 2px solid #3483C5;
    };
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

const RequiredLabel = styled.span`
    color: #788A9A;
`

const Input: FunctionComponent<IProps> = ({ maxWidth, maxLength, type, label, errorMessage, onChange, onBlur, placeholder, disabled = false, tooltip, prefix, suffix, required = false }) => {

    const handleOnChange = (e: any) => {
        onChange(e.target.value)
    }

    const renderLabel = () => {
        if (tooltip) {
            return (
                <LabelContainer>
                    <Label>{label} {required ? <RequiredLabel>(required)</RequiredLabel> : ''}</Label>
                    <Tooltip message={tooltip} />
                </LabelContainer>
            )
        }
        return (
            <Label>{label} {required ? <RequiredLabel>(required)</RequiredLabel> : ''}</Label>
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
            <InputContainer prefix={prefix} suffix={suffix} errorMessage={errorMessage}>
                <InputWrapper
                    maxWidth={maxWidth}
                    maxLength={maxLength}
                    type={type}
                    onChange={handleOnChange}
                    onBlur={onBlur}
                    errorMessage={errorMessage}
                    placeholder={placeholder}
                    disabled={disabled}
                    prefix={prefix}
                    suffix={suffix}
                />
            </InputContainer>
            {renderError()}
        </div>
    )
}

export { Input }