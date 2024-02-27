import { ChangeEvent, ElementType } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { CheckInputProps } from "../Check";
import { CustomSwitch } from "./Standard.styles";

import CheckboxEmptyIcon from "./icons/checkbox_empty.svg"
import CheckboxIcon from "./icons/checkbox.svg"

type CheckStandardInputProps = CheckInputProps & {
    controlType: 'check' | 'switch'
}

const controlComponents: { [name: string]: ElementType } = {
    check: Checkbox,
    switch: CustomSwitch
}

export function CheckStandardInput({
    label,
    name,
    onChange,
    value,
    control,
    variant = 'standard',
    controlType = 'check',
    ...rest
}: CheckStandardInputProps) {
    const ControlComponent = controlComponents[controlType || 'check']
    const componentProps = controlType === 'switch' ? {} : {
        icon: <CheckboxEmptyIcon />,
        checkedIcon: <CheckboxIcon />
    }

    return (
        <FormControlLabel
            label={label}
            control={
                <ControlComponent
                    checked={Boolean(value)}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        onChange?.({ target: { name, value: event.target.checked } })
                    }}
                    {...componentProps}
                />
            }
            {...rest}
        />
    )
}