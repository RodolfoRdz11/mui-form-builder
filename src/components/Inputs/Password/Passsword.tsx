import { useState } from "react";
import { TextInput, TextInputProps } from "../Text"
import VisibilityIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOffOutlined";
import { InputAdornment } from "@mui/material";

export type PasswordInputProps = TextInputProps

export function PasswordInput({ InputProps, ...rest }: PasswordInputProps) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <TextInput
            autoCapitalize="off"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        {showPassword ? (
                            <VisibilityIcon
                                onClick={() => setShowPassword(false)}
                                sx={{ cursor: "pointer" }}
                            />
                        ) : (
                            <VisibilityOffIcon
                                onClick={() => setShowPassword(true)}
                                sx={{ cursor: "pointer" }}
                            />
                        )}
                    </InputAdornment>
                ),
                ...InputProps
            }}
            {...rest}
        />
    )
}