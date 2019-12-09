import React from 'react'
import  {Input}  from '../src/components/Input'
import { action } from '@storybook/addon-actions'
import { Button } from 'components/Button'
import styled from 'styled-components'
export default {
    title: 'Input'
}

const Container = styled.div`
    width: 300px;
`

const TooltipMargin = styled.div`
    margin-top: 80px;
`


export const DefaultInput = () => <Input errorMessage="" type="text" label="Default Input field" />
export const RequiredInput = () => <Input errorMessage="" type="text" label="Default Input field" required />
export const InputWithMaxLengh = () => <Input errorMessage="" maxLength={3} type="text" label="Input with max length set to 3" />
export const InputWithMaxWidth = () => <Input errorMessage="" maxWidth={100} maxLength={3} type="text" label="Input with max width set to 100px" />
export const InputWithPlaceholder = () => <Input errorMessage="" type="text" label="Input field with a placeholder" placeholder="Placeholder here" />
export const InputWithError = () => <Input errorMessage="Error message here" type="text" label="Input field with an error" />
export const InputisDisabled = () => <Input errorMessage="" type="text" label="Input field which is disabled" disabled />
export const disabledWithError = () => <Input errorMessage="Error message here" type="text" label="Input field with an error and is disabled" disabled />
export const InputWithTooltip = () => <TooltipMargin><Input label="Your name" errorMessage="" placeholder="Sandeep Nijjar" type="text" tooltip="We need your name to identify you" /></TooltipMargin>
export const InputWithTooltipWithRequired = () => <TooltipMargin><Input label="Your name" errorMessage="" placeholder="Sandeep Nijjar" type="text" tooltip="We need your name to identify you" required /></TooltipMargin>
export const InputWithSuffix = () => <Container><Input label="Your name" errorMessage="" placeholder="Sandeep Nijjar" type="text" suffix="@integrate.com" /></Container>
export const InputWithPrefix = () => <Container><Input label="Your name" errorMessage="" placeholder="Sandeep Nijjar" type="text" prefix="Mr" /></Container>