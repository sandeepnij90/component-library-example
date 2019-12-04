import React, { FunctionComponent, useState } from 'react'
import styled from 'styled-components'

const TooltipWrapper = styled.div`
    position: relative;
    display: grid;
    align-item: center;
    grid-template-columns: max-content;
    grid-template-rows: auto 20px;
    grid-row-gap: 12px;
`

interface ITooltipDescriptionProps {
    isVisible: boolean
}

const TooltipDescription = styled.div<ITooltipDescriptionProps>`
    width: auto;
    background: #22272B;
    color: white;
    border-radius: 4px;
    padding: 10px;
    font-size: 12px;
    max-width: 256px;
    visibility: ${props => props.isVisible ? 'visible' : 'hidden'}
    grid-row: 1;
    position: relative;
    &:after {
        width: 0; 
        height: 0; 
        border-left: 10px solid transparent;
        border-right: 10px solid transparent; 
        border-top: 10px solid #22272B;
        content: '';
        bottom: -9px;
        left: 8px;;
        position: absolute;
    }
`

const HelpIcon = styled.div`
    background: #788A9A;
    position: absolute;
    width:20px;
    height: 20px;
    border-radius: 50%;
    text-align: center;
    color: white;
    grid-row: 2;
    transition: 0.7s;
    cursor: auto;
    margin-left: 8px;
    &:hover {
        background: #3483C5;
    }
`

interface IProps {
    message?: string
}


const Tooltip: FunctionComponent<IProps> = ({ message="" }) => {
    const [isVisible, setIsVisible] = useState(false)

    const handleHover = () => {
        setIsVisible(true)
    }

    const handleLeaveHover = () => {
        setIsVisible(false)
    }

    const renderTip = () => {
        return (
        <TooltipDescription isVisible={isVisible} onMouseOver={handleHover} onMouseLeave={handleLeaveHover}>{message}</TooltipDescription>
        )
    }

    return (
        <TooltipWrapper>
            {renderTip()}
            <HelpIcon onMouseOver={handleHover} onMouseLeave={handleLeaveHover}><i>i</i></HelpIcon>
        </TooltipWrapper>
    )
} 

export { Tooltip}