import { ElementType } from "react";
import { FormControlLabelProps } from "@mui/material";
import { InputPropsType } from "src/types";

import { CheckStandardInput } from "./Standard";
import { CheckChipInput } from "./Chip";
import { CheckCardInput } from "./Card";

export type CheckInputProps = Omit<Omit<FormControlLabelProps, 'onChange'>, 'control'> & InputPropsType & {
    control?: any
    variant?: 'standard' | 'chip' | 'card' | 'switch',
}

const checkInputVariant: { [name: string]: ElementType<CheckInputProps> } = {
    standard: props => <CheckStandardInput {...props} controlType="check" />,
    switch: props => <CheckStandardInput {...props} controlType="switch" />,
    chip: CheckChipInput,
    card: CheckCardInput
}

export function CheckInput(props: CheckInputProps) {
    const CheckComponent = checkInputVariant[props.variant || 'standard']
    return <CheckComponent {...props} />
}