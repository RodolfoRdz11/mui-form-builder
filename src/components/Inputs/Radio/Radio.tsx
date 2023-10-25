import { ElementType } from "react";
import { InputPropsType } from "src/types";
import { FormControlProps } from "./../../FormControl";

import { RadioStandardInput } from "./Standard";
import { RadioChipInput } from "./Chip";
import { RadioCardInput } from "./Card";

export type RadioInputProps = InputPropsType & FormControlProps & {
    variant: 'standard' | 'chip' | 'card'
    /**
     * Disaply options horizontally
     */
    row?: boolean
}

const radioInputVariant: { [name: string]: ElementType } = {
    standard: RadioStandardInput,
    chip: RadioChipInput,
    card: RadioCardInput
}

export function RadioInput({ variant, ...rest }: RadioInputProps) {
    const RadioComponent = radioInputVariant[variant || rest.config?.variant || 'standard']
    return <RadioComponent {...rest} />
}