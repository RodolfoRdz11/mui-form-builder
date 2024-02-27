import { LocalizationProvider, DatePicker, DatePickerProps } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { InputPropsType, onChangeEventType } from "src/types";
import { FormControl, FormLabel } from '@mui/material';
import { useStyles } from './Date.styles';
import dayjs from "dayjs"

export type DateInputProps = Omit<Omit<DatePickerProps<typeof dayjs>, 'value'>, 'onChange'> & InputPropsType & {
    value: Date
    onChange: (event: onChangeEventType) => void
}

export function DateInput({ label, onChange, value, name, error, touched, ...rest }: DateInputProps) {
    const { classes, cx } = useStyles()

    return (
        <FormControl fullWidth error={Boolean(touched && error)}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">

                {label && (
                    <FormLabel
                        htmlFor={name}
                        className={classes.label}
                    >
                        {label}
                    </FormLabel>
                )}

                <DatePicker
                    // @ts-ignore
                    value={dayjs(value)}
                    // @ts-ignore
                    onChange={(newValue: Date) => onChange({ target: { name, value: newValue } })}
                    // @ts-ignore
                    slotProps={{
                        textField: {
                            size: "small",
                        }
                    }}
                    {...rest}
                />
            </LocalizationProvider>
        </FormControl>
    );
}