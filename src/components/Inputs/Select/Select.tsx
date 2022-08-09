import {
    FormControl,
    MenuItem,
    MenuItemProps,
    TextField,
    FormLabel,
    FormLabelProps,
    StandardTextFieldProps,
    OutlinedTextFieldProps,
} from "@mui/material";
import { InputPropsType } from "src/types";
import { useStyles } from "./Select.styles"
import _ from "lodash"

interface SelectOptionType {
    label: string
    value: string
}

export type SelectInputProps = (StandardTextFieldProps | OutlinedTextFieldProps) & InputPropsType & {
    menuItemProps?: MenuItemProps
    options: SelectOptionType[]
    formLabelProps?: FormLabelProps,
}

export function SelectInput({
    name,
    label,
    placeholder,
    options,
    error,
    touched,
    SelectProps,
    menuItemProps,
    variant = "outlined",
    formLabelProps,
    ...rest
}: SelectInputProps) {
    const classes = useStyles()
    const { MenuProps, ...restSelectProps } = SelectProps || {}

    return (
        <FormControl fullWidth error={touched && error}>
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
                fullWidth
                select
                SelectProps={{
                    displayEmpty: true,
                    MenuProps: {
                        anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'left',
                        },
                        transformOrigin: {
                            vertical: 'top',
                            horizontal: 'left',
                        },
                        PaperProps: {
                            className: classes.scrollbar,
                            style: {
                                border: '1px solid #CFD5E2',
                                boxShadow: '0px 25px 50px rgba(208, 218, 232, 0.25)',
                                borderRadius: 4,
                                maxHeight: 224
                            }
                        },
                        style: {
                            zIndex: 1303
                        },
                        ...MenuProps,
                    },
                    ...restSelectProps
                }}
                error={touched && error}
                helperText={touched && error}
                {...rest}
            >
                {placeholder && (
                    <MenuItem
                        disabled
                        value=""
                        {...menuItemProps}
                    >
                        {placeholder}
                    </MenuItem>
                )}

                {options.map(({ label, value }: SelectOptionType) => (
                    <MenuItem key={value} value={value}>
                        {label}
                    </MenuItem>
                ))}
            </TextField>
        </FormControl>
    )
}