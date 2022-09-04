import { Checkbox, FormControlLabel } from "@mui/material";
import { ChangeEvent } from "react";

export interface CheckInputProps {
    name: string;
    label: string;
    value: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function CheckInput({ label, name, onChange, value, ...rest }: CheckInputProps) {
    return (
        <FormControlLabel
            label={label}
            control={
                <Checkbox
                    checked={value}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        //@ts-ignore
                        onChange({ target: { name, value: event.target.checked } })
                    }}
                />
            }
            {...rest}
        />
    )
}