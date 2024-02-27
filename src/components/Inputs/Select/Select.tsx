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
import ExpandIcon from "@mui/icons-material/ExpandMoreRounded"
import { InputPropsType } from "src/types";
import { useStyles } from "./Select.styles"
import { TextInput } from "..";

export interface SelectOptionType {
    label: string
    value: string
}

export type SelectInputProps = (StandardTextFieldProps | OutlinedTextFieldProps) & InputPropsType & {
    menuItemProps?: MenuItemProps
    options: SelectOptionType[]
    formLabelProps?: FormLabelProps,
}

export function SelectInput({
    inputRef,
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
    value,
    ...rest
}: SelectInputProps) {
    const { classes, cx } = useStyles()
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
                ref={inputRef}
                fullWidth
                select
                size="small"
                name={name}
                SelectProps={{
                    displayEmpty: true,
                    IconComponent: ExpandIcon,
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
                        },
                        style: {
                            zIndex: 1303
                        },
                        disableScrollLock: true,
                        ...MenuProps,
                    },
                    ...restSelectProps
                }}
                error={touched && error}
                helperText={touched && error}
                value={value || ""}
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

                {options?.map(({ label, value }: SelectOptionType) => (
                    <MenuItem key={value} value={value}>
                        {label}
                    </MenuItem>
                ))}
            </TextField>
        </FormControl>
    )
}