import esLocale from "date-fns/locale/es";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker, { DatePickerProps } from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { TextInput, TextInputProps } from '../Text';
import { InputType } from "src/types";

export type DateInputProps = DatePickerProps<string> & InputType;

export function DateInput({ label, onChange, value, name, ...rest }: DateInputProps) {
    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDateFns} locale={esLocale}>
                <DatePicker
                    mask="__/__/____"
                    value={value}
                    //@ts-ignore
                    onChange={(newValue: Date) => onChange({ target: { name, value: newValue } })}
                    renderInput={(params: TextInputProps) => <TextInput {...params} label={label} />}
                    {...rest}
                />
            </LocalizationProvider>
        </div>
    );
}