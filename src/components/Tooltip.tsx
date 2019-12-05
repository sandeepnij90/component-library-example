import React, { FunctionComponent, useState } from 'react'
import styled from 'styled-components'

const TooltipWrapper = styled.div`
    position: relative;
`

const HelpIcon = styled.div`
    background: #788A9A;
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
        &:after {
            width: 100%;
            max-width: 256px;
            background-color: black;
            position: absolute;
            content: 'This is a test of the tool tip to see how long it actually goes above the text';
            bottom: 30px;
            background: #22272B;
            color: white;
            border-radius: 4px;
            padding: 10px;
            font-size: 12px;
            left: 0;
        }
        &:before {
            width: 0; 
            height: 0; 
            border-left: 10px solid transparent;
            border-right: 10px solid transparent; 
            border-top: 10px solid #22272B;
            content: '';
            bottom: 22px;
            left: 8px;
            position: absolute;            
        }
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

    return (
        <TooltipWrapper>
            <HelpIcon onMouseOver={handleHover} onMouseLeave={handleLeaveHover} ><i>i</i></HelpIcon>
        </TooltipWrapper>
    )
} 

export { Tooltip}