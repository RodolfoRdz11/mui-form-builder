
import _ from "lodash"
import { RadioInputProps } from "../Radio";
import { FormControl } from "../../../FormControl"
import {
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    RadioGroupProps,
    FormControlLabelProps
} from "@mui/material";

export type RadioStandardInputProps = RadioInputProps & {
    radioGroupProps: RadioGroupProps
    formControlLabelProps: FormControlLabelProps
}

export function RadioStandardInput({
    label,
    name,
    value,
    options,
    error,
    touched,
    onChange,
    radioGroupProps,
    formControlLabelProps,
    row,
    ...rest
}: RadioStandardInputProps) {

    return (
        <FormControl error={error} touched={touched} {...rest}>
            {label && <FormLabel id={label} htmlFor={name}> {label} </FormLabel>}
            <RadioGroup
                value={value}
                aria-label={name}
                aria-labelledby={label}
                name={name}
                onChange={onChange}
                row={row}
                {...radioGroupProps}
            >
                {options?.map(option => {
                    const label = _.isString(option) ? option : option.label
                    const value = _.isString(option) ? option : option.value

                    return (
                        <FormControlLabel
                            {...formControlLabelProps}
                            key={value}
                            value={value}
                            control={<Radio />}
                            label={label}
                        />
                    )
                })}
            </RadioGroup>
        </FormControl>
    )
}