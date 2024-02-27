import { InputPropsType } from "src/types";
import { TextInput, TextInputProps } from "..";
import { CurrencyFormat } from "./Currency.format";
import { useStyles } from "./Currency.styles";
import { InputAdornment } from "@mui/material";

type CurrencyInputProps = TextInputProps & InputPropsType

export function CurrencyInput(props: CurrencyInputProps) {
    const { classes, cx } = useStyles()

    return (
        <TextInput
            placeholder="0.00"
            {...props}
            inputProps={{
                pattern: "[0-9]*",
                'aria-labelledby': props.label,
                "autoComplete": "off"
            }}
            InputProps={{
                ...props.InputProps,
                inputComponent: CurrencyFormat as any,
                inputMode: 'numeric',
                className: classes.input,
                startAdornment: (
                    <InputAdornment className={classes.inputAdornment} position="start">
                        $
                    </InputAdornment>
                )
            }}
        />
    )
}