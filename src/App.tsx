import React from 'react'
import { Button } from 'components/Button'
import { Icon } from 'components/Icons'
import './overrides.scss'
const App = () => {

    const handleClick = () => {
        console.log('clicked')
    }

    return (
        <Button onClick={handleClick} icon={<Icon name="lock"/>} text="My button 2" type="primary" />
    )
}

export { App }