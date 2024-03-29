import { Autocomplete, AutocompleteChangeReason, AutocompleteProps, ChipTypeMap, Paper } from "@mui/material";
import ExpandIcon from "@mui/icons-material/ExpandMoreRounded"
import { SelectOptionType, TextInput } from "..";
import { InputPropsType } from "src/types";
import { useStyles } from "./Autocomplete.styles";

export type AutocompleteInputProps<
    Value,
    Multiple extends boolean | undefined,
    DisableClearable extends boolean | undefined,
    FreeSolo extends boolean | undefined,
    ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent']
> = Omit<Omit<AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo, ChipComponent>, 'renderInput'>, 'value'> & InputPropsType & {
    value: any
    control?: any
    options: SelectOptionType[]
    renderInput?: AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo, ChipComponent>['renderInput']
}

export function AutocompleteInput<
    Value,
    Multiple extends boolean | undefined = false,
    DisableClearable extends boolean | undefined = false,
    FreeSolo extends boolean | undefined = false,
    ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent']
>({
    inputRef,
    name,
    label,
    renderInput,
    onChange,
    options,
    value,
    control,
    ...rest
}: AutocompleteInputProps<
    Value,
    Multiple,
    DisableClearable,
    FreeSolo,
    ChipComponent
>) {
    const { classes, cx } = useStyles()
    const parsedValue = options.find((option: SelectOptionType) => option.value === value)

    function handleChange(e: any, value: any, reason: AutocompleteChangeReason) {
        onChange?.({
            target: {
                name,
                value: reason === 'selectOption' ? value?.value : ''
            }
        })
    }

    return (
        <Autocomplete
            ref={inputRef}
            autoHighlight
            autoComplete={false}
            size="small"
            popupIcon={<ExpandIcon />}
            noOptionsText="No hay opciones"
            options={options}
            onChange={handleChange}
            control={control}
            // @ts-ignore
            value={parsedValue || {
                label: '',
                value: '',
            }}
            classes={{
                popper: classes.list,
            }}
            renderInput={(params) => (
                <TextInput
                    {...params}
                    name={name}
                    label={label}
                />
            )}
            PaperComponent={({ children }) => (
                <Paper className={classes.scrollbar}>
                    {children}
                </Paper>
            )}
            {...rest}
        />
    )
}