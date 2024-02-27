import React, { useState } from 'react'
import { Tooltip as MuiTooltip, TooltipProps } from '@mui/material'
import { useStyles } from './Tooltip.styles'
import { useIsMobile } from 'src/helpers'

interface ITooltipProps extends TooltipProps { }

/**
 * Tooltip component with internal open state for handling mobile devices
 */
export function Tooltip({ children, ...rest }: ITooltipProps) {
    const { classes, cx } = useStyles()
    const isMobile = useIsMobile('xs')
    const [open, setOpen] = useState(false)

    return (
        <MuiTooltip
            arrow
            open={open}
            placement="bottom"
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            classes={{
                tooltip: classes.tooltip,
            }}
            {...rest}
        >
            <div
                className={classes.chilrenContainer}
                onClick={() => setOpen(!open)}
            >
                {children}
            </div>
        </MuiTooltip>
    )
}