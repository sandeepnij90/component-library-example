import React, { FunctionComponent, useState } from 'react'
import { Input } from '../src/components/Input'
import { Button } from '../src/components/Button'
import styled from 'styled-components'

export default {
    title: 'Form Example'
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 500px;
    align-items: center;
    justify-content: center;
    margin-top: 200px;
`

const InputContainer = styled.div`
    display: grid;
    grid-auto-flow: columns;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 16px;
`

const Form: FunctionComponent = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [nameError, setNameError] = useState('')
    const [ageError, setAgeError] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')


    const validateName = () => {
        if (!name) {
            return setNameError('You must enter a name')
        }
    }

    const handleName = (name: string) => {
        setName(name)
        setNameError('')
    }

    const handleAge = (age: number) => {
        setAge(age)
        setAgeError('')
    }

    const handleEmail = (email: string) => {
        setEmail(email)
        setEmailError('')
    }
 
    const validateEmail = () => {
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!regex.test(email)) {
           setEmailError('Please enter a valid email')
        }
    }

    const validateAge = () => {
        if (age === 0) {
           return setAgeError('You must enter an age')
        }
        
        if (age < 18) {
            return setAgeError('You must be 18 or over')
        }

        if (isNaN(age)) {
            return setAgeError('You must enter a number')
        }

        return ''
    }

    


    return (
        <Container>
            <InputContainer>
            <Input 
                label="Name"
                type="text"
                onChange={handleName}
                onBlur={validateName}
                errorMessage={nameError}
            />
            <Input 
                label="Age"
                type="number"
                onChange={handleAge}
                onBlur={validateAge}
                errorMessage={ageError}
            />
            </InputContainer>
            <Input
                label="Email"
                type="email"
                onChange={handleEmail}
                onBlur={validateEmail}
                tooltip="We won't ever share your email with any third parties"
                errorMessage={emailError}
            />
        </Container>
    )
}

export const FormWithOnTheFlyValidation = () => <Form />