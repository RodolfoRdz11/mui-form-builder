import { alpha } from "@mui/material";
import { TssStyles } from "src/types";
import { tss } from "tss-react/mui";

export const useStyles: TssStyles = tss.create(({ theme }) => ({
    input: {
        fontWeight: 400,
        background: '#fff',
        paddingLeft: 0,
        '& .MuiOutlinedInput-input': {
            paddingLeft: 14
        }
    },
    inputAdornment: {
        width: 40,
        height: 40,
        background: "rgba(117, 139, 183, 0.08)",
        maxHeight: 'unset',
        maxWidth: 'unset',
        justifyContent: 'center',
        marginRight: '0px !important',
        "& p": {
            fontSize: 17,
            fontWeight: 500,
            color: 'black'
        }
    },
}))