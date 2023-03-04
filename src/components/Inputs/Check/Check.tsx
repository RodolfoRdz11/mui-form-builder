import { ElementType } from "react";
import { FormControlLabelProps } from "@mui/material";
import { InputPropsType } from "src/types";

import { CheckStandardInput } from "./Standard";
import { CheckChipInput } from "./Chip";
import { CheckCardInput } from "./Card";

export type CheckInputProps = Omit<FormControlLabelProps, 'onChange'> & InputPropsType & {
    variant: 'standard' | 'chip' | 'card' | 'switch',
}

const checkInputVariant: { [name: string]: ElementType } = {
    standard: CheckStandardInput,
    switch: CheckStandardInput,
    chip: CheckChipInput,
    card: CheckCardInput
}

export function CheckInput(props: CheckInputProps) {
    const CheckComponent = checkInputVariant[props.variant]
    return <CheckComponent {...props} />
}