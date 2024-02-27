import {
    FormControl,
    FormLabel,
    FormHelperText,
    StandardTextFieldProps,
    OutlinedTextFieldProps,
    FormLabelProps,
    TextField,
} from "@mui/material"
import { InputPropsType } from "src/types"
import { useStyles } from "./Text.styles"

export type TextInputProps = (StandardTextFieldProps | Omit<OutlinedTextFieldProps, 'variant'>) & InputPropsType & {
    error?: any
    variant?: 'standard' | 'outlined',
    formLabelProps?: FormLabelProps,
}

export function TextInput({
    inputRef,
    name,
    label,
    helperText,
    variant = 'outlined',
    touched,
    error,
    formLabelProps,
    value,
    ...rest
}: TextInputProps) {
    const { classes, cx } = useStyles()

    return (
        <FormControl
            fullWidth
            error={touched && Boolean(error)}
            className={rest.className}
        >
            {label && (
                <FormLabel
                    htmlFor={name}
                    className={classes.label}
                    {...formLabelProps}
                >
                    {label}
                </FormLabel>
            )}

            <TextField
                inputRef={inputRef}
                fullWidth
                size="small"
                name={name}
                value={value || ''}
                {...rest}
            />

            {touched && error && (
                <FormHelperText> {error} </FormHelperText>
            )}
        </FormControl>
    )
}