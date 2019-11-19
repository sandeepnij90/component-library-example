import React from 'react'
import { Button } from '../src/components/Button'
import { action } from '@storybook/addon-actions';
import { Icon } from '../src/components/Icons'
export default {
    title: 'Button'
}

export const PrimaryButton = () => <Button text="Testing Button" type="primary" onClick={action('Clicked')}/>
export const SecondaryButton = () => <Button text="Testing Button" type="secondary" onClick={action('Clicked')}/>
export const ButtonWithIcon = () => <Button text="Locked button" type="primary" icon={<Icon name="lock" />} onClick={action('Clicked')}/>
export const disabledPrimaryButton = () => <Button text="Locked button" disabled type="primary" icon={<Icon name="lock" />} onClick={action('Clicked')}/>
export const disabledSecondaryButton = () => <Button text="Locked button" disabled type="secondary" icon={<Icon name="lock" />} onClick={action('Clicked')}/>
