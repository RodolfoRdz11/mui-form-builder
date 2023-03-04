import { Grid, Typography } from "@mui/material"
import CheckIcon from "@mui/icons-material/CheckCircle"
import { CheckInputProps } from "../Check";
import { useStyles } from "./Card.styles"

export function CheckCardInput({ name, label, value, disabled, onChange }: CheckInputProps) {
    const { classes, cx } = useStyles()

    return (
        <Grid
            id="check-chip-container"
            container
            className={classes.cardContainer}
        >
            <Grid
                item
                xs={12}
                className={cx(classes.card, {
                    [classes.selected]: Boolean(value),
                    [classes.disabled]: disabled
                })}
                onClick={() => {
                    if (!disabled) {
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