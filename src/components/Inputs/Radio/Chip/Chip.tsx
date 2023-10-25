import { FormLabel, Grid, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/CheckCircle";
import { FormControl } from "../../../FormControl";
import { RadioInputProps } from "../Radio";
import { useStyles } from "./Chip.styles"
import _ from "lodash"
import clsx from "clsx";

export function RadioChipInput({
    label,
    name,
    error,
    touched,
    className,
    options,
    value,
    disabled,
    onChange,
    row,
    ...rest
}: RadioInputProps) {
    const classes = useStyles()

    return (
        <FormControl
            error={error}
            touched={touched}
            {...rest}
        >
            {label && <FormLabel id={label}> {label} </FormLabel>}
            <Grid
                container
                spacing={4}
                className={clsx(classes.container, { [classes.row]: row }, className)}
            >
                {options?.map(option => {
                    const label = _.isString(option) ? option : option.label
                    const _value = _.isString(option) ? option : option.value

                    return (
                        <Grid
                            key={_value}
                            item
                            className={clsx(classes.chip, {
                                [classes.selected]: _value === value,
                                [classes.disabled]: disabled
                            })}
                            onClick={() => {
                                if (!disabled && onChange) {
                                    onChange({ target: { name, value: _value } })
                                }
                            }}
                        >
                            <Typography> {label} </Typography>
                            {_value === value && <CheckIcon color="primary" />}
                        </Grid>
                    )
                })}
            </Grid>
        </FormControl>
    )
}