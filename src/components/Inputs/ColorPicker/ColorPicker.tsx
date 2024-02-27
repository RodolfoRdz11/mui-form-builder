import { useState } from "react";
import { InputPropsType } from "src/types";
import { FormControl, Popover, Grid, Button } from "@mui/material";
import { SketchPicker } from 'react-color'
import { useStyles } from "./ColorPicker.styles";
import { TextInput } from "..";

export type ColorPickerInputProps = InputPropsType

export function ColorPickerInput({ label, value, name, onChange }: ColorPickerInputProps) {
    const { classes, cx } = useStyles()
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

    return (
        <FormControl fullWidth>

            <TextInput
                label={label}
                name="color"
                value={value}
                onChange={() => { }}
                onClick={e => setAnchorEl(e.currentTarget)}
                InputProps={{
                    endAdornment: (
                        <div
                            style={{ background: value }}
                            className={classes.colorPreview}
                        />
                    )
                }}
            />

            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                slotProps={{
                    paper: {
                        className: classes.popover
                    }
                }}
            >
                <SketchPicker
                    className={classes.picker}
                    color={value}
                    onChangeComplete={(color) => {
                        onChange?.({
                            target: {
                                name,
                                value: color.hex
                            }
                        })
                    }}
                    disableAlpha
                    presetColors={[]}
                />
                <Grid container alignItems="center" justifyContent="flex-end">
                    <Button
                        size="small"
                        fullWidth
                        onClick={() => setAnchorEl(null)}
                        style={{ marginTop: 16 }}
                    >
                        Aceptar
                    </Button>
                </Grid>
            </Popover>

        </FormControl>
    )
}