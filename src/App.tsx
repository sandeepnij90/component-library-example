import React, { Fragment, useState } from 'react'
import { Button } from 'components/Button'
import { Icon } from 'components/Icons'
import { Input } from 'components/Input'
import { Tooltip } from 'components/Tooltip'

import './overrides.scss'
const App = () => {
    const [value, setValue] = useState('')
    const [hasError, setHasError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleClick = () => {
        console.log('clicked')
    }

    const handleChange= (e: string) => {
        setValue(e)
        setErrorMessage('')
    }

    const validation = () => {
        console.log('validation')
        if (value.length < 3) {
            setHasError(true)
            return setErrorMessage('length must be greater than 3')
        }

        if (value.length < 5) {
            setHasError(true)
            return setErrorMessage('length must be greater than 5')
        }

        return setErrorMessage('')
    }



    return (
        <Fragment>
        <Input type="text" tooltip="this is a very long message with some long text" label="Your name" onChange={handleChange} errorMessage={errorMessage} onBlur={validation} placeholder="Sandeep Nijjar" />
        {/* <Tooltip message="testing" /> */}
        {/* <Button onClick={handleClick} icon={<Icon name="lock"/>} text="My button 2" type="primary" /> */}
        </Fragment>
    )
}

export { App }