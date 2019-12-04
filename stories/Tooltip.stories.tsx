import React from 'react'
import { Tooltip } from '../src/components/Tooltip'

export default {
    title: 'Tooltip'
}

export const TooltipWithShortMessage = () => <Tooltip message="this is a short message" />
export const TooltipWithMediumMessage = () => <Tooltip message="this is a medium message and the point is to test two lines" />
export const TooltipWithLongMessage = () => <Tooltip message="this is a long message and will be three lines long. It should still display correctly. this is a long message and will be three lines long" />