import { Grid, Typography } from "@mui/material"
import CheckIcon from "@mui/icons-material/CheckCircle"
import { CheckInputProps } from "../Check";
import { useStyles } from "./Chip.styles"
import clsx from "clsx";

export function CheckChipInput({ name, label, value, disabled, onChange }: CheckInputProps) {
    const classes = useStyles()

    return (
        <Grid
            id="check-chip-container"
            container
            className={classes.chipContainer}
        >
            <Grid
                item
                xs={12}
                className={clsx(classes.chip, {
                    [classes.selected]: Boolean(value),
                    [classes.disabled]: disabled
                })}
                onClick={() => {
                    if (!disabled && onChange) {
                        onChange({ target: { name, value: !Boolean(value) } })
                    }
                }}
            >
                <Typography> {label} </Typography>
                {Boolean(value) && <CheckIcon color="primary" />}
            </Grid>
        </Grid>
    )
}