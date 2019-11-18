import React, { FunctionComponent } from 'react'

interface IProps {
    name: string
}

const Icon: FunctionComponent<IProps> = ({ name }) => {

    const getIcon = (iconName: string) => {
        switch(iconName) {
            case 'lock': return 'fa-lock'
            default: return 'fa-key'
        }
    }

    return (
        <i className={`fas ${getIcon(name)}`}></i>
    )
}

export { Icon }