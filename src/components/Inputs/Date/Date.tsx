import { LocalizationProvider, DatePicker, DatePickerProps } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { InputType } from "src/types";
import { FormControl, FormLabel } from '@mui/material';

import 'dayjs/locale/es';
import { useStyles } from './Date.styles';
import dayjs from 'dayjs';

export type DateInputProps = Omit<DatePickerProps<string>, 'onChange'> & InputType;

export function DateInput({ label, onChange, value, name, error, touched, ...rest }: DateInputProps) {
    const classes = useStyles()

    return (
        // @ts-ignore
        <FormControl fullWidth error={touched && error}>
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
                    mask="__/__/____"
                    // @ts-ignore
                    value={dayjs(value)}
                    onChange={(newValue: string | null) => {
                        onChange?.({ target: { name, value: newValue } })
                    }}
                    size="small"
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