import { TssStyles } from "src/types";
import { tss } from "tss-react/mui";

export const useStyles: TssStyles = tss.create(({ theme }) => ({
    picker: {
        boxShadow: 'none !important',
        padding: '0 !important',
        cursor: 'pointer',
        "& .saturation-white > div > div": {
            width: '6px !important',
            height: '6px !important',
        },
        "& .hue-horizontal > div > div": {
            width: '8px !important',
            height: '8px !important',
            borderRadius: '50% !important',
        },
    },
    popover: {
        padding: 12,
        zIndex: 1301,
    },
    container: {
        display: 'flex',
        gap: 16,
    },
    colorPreview: {
        width: 28,
        height: 24,
        borderRadius: 4,
    },
    label: {
        fontSize: 14,
        lineHeight: '20px',
        fontWeight: 500,
        letterSpacing: '0.25px'
    }
}))