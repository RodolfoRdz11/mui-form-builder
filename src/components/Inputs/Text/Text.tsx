import { ComponentType } from "react"
import {
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    OutlinedInput,
    StandardTextFieldProps,
    OutlinedTextFieldProps,
    FormLabelProps
} from "@mui/material"
import { InputPropsType } from "src/types"
import { useStyles } from "./Text.styles"

export type TextInputProps = (StandardTextFieldProps | OutlinedTextFieldProps) & InputPropsType & {
    error?: any
    variant?: 'standard' | 'outlined',
    formLabelProps?: FormLabelProps,
}

interface VariantComponentType {
    [name: string]: ComponentType
}

const variantComponent: VariantComponentType = {
    standard: Input,
    outlined: OutlinedInput
}

export function TextInput({
    name,
    label,
    helperText,
    variant = 'outlined',
    touched,
    error,
    formLabelProps,
    ...rest
}: TextInputProps) {
    const classes = useStyles()
    const InputComponent = variantComponent[variant]

    return (
        <FormControl fullWidth error={touched && Boolean(error)}>
            {label && (
                <FormLabel
                    htmlFor={name}
                    className={classes.label}
                    {...formLabelProps}
                >
                    {label}
                </FormLabel>
            )}

            <InputComponent {...rest} />

            {touched && error && (
                <FormHelperText> {error} </FormHelperText>
            )}
        </FormControl>
    )
}