import { NumericFormat, NumericFormatProps } from "react-number-format";

export const CurrencyFormat = (props: NumericFormatProps & { onChange: any, inputRef: any }) => {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumericFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={values => {
                onChange({
                    target: {
                        name: other.name,
                        value: values.floatValue,
                    },
                });
            }}
            thousandSeparator
        // isNumericString
        />
    );
}

