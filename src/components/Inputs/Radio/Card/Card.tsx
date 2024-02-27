import { FormLabel, Grid, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/CheckRounded";
import { FormControl } from "src/components/FormControl";
import { RadioInputProps } from "../Radio";
import { useStyles } from "./Card.styles"
import _ from "lodash"

export function RadioCardInput({
    label,
    name,
    error,
    touched,
    className,
    options,
    value,
    disabled,
    onChange,
    config,
    ...rest
}: RadioInputProps) {
    const { classes, cx } = useStyles()
    const row = rest.row ?? config?.row

    return (
        <FormControl
            error={error}
            touched={touched}
            {...rest}
        >
            <Grid container>

                {label && (
                    <Grid item xs={12}>
                        <FormLabel id={label}> {label} </FormLabel>
                    </Grid>
                )}
                <Grid item xs={12}>
                    <Grid
                        container
                        spacing={1}
                        className={cx(classes.container, className)}
                    >
                        {options?.map(option => {
                            const label = _.isString(option) ? option : option.label
                            const _value = _.isString(option) ? option : option.value

                            return (
                                <Grid
                                    key={_value}
                                    item
                                    xs={row ? config?.mobileWidth || 12 : 12}
                                    md={row ? options.length > 2 ? 3 : 6 : 12}
                                >
                                    <div
                                        tabIndex={0}
                                        className={cx(classes.card, {
                                            [classes.selected]: _value === value,
                                            [classes.disabled]: disabled
                                        })}
                                        onClick={() => {
                                            if (!disabled && onChange) {
                                                onChange({ target: { name, value: _value } })
                                            }
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' && !disabled)
                                                onChange?.({ target: { name, value: _value } })
                                        }}
                                    >
                                        <Typography> {label} </Typography>
                                        {_value === value && <CheckIcon fontSize="small" color="primary" />}
                                    </div>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>

        </FormControl>
    )
}