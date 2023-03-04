import { ChangeEvent, ElementType } from "react";
import { Checkbox, Switch, FormControlLabel } from "@mui/material";
import { CheckInputProps } from "../Check";

type CheckStandardInput = CheckInputProps & {
    controlType: 'check' | 'switch'
}

const controlComponents: { [name: string]: ElementType } = {
    standard: Checkbox,
    switch: Switch
}

export function CheckStandardInput({
    label,
    name,
    onChange,
    value,
    control,
    variant = 'standard',
    ...rest
}: CheckInputProps) {
    const ControlComponent = controlComponents[variant]

    return (
        <FormControlLabel
            label={label}
            control={
                <ControlComponent
                    checked={Boolean(value)}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        onChange({ target: { name, value: event.target.checked } })
                    }}
                />
            }
            {...rest}
        />
    )
}