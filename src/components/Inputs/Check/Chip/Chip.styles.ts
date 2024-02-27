import { TssStyles } from "src/types";
import { tss } from "tss-react/mui";

export const useStyles: TssStyles = tss.create(({ theme }) => ({
    chipContainer: {
        paddingTop: 16,
        gap: 16
    },
    chip: {
        border: '1px solid #CFD5E2',
        padding: '6px 10px 6px 16px',
        borderRadius: 30,
        marginBottom: 16,
        display: 'flex',
        alignItems: 'end',
        cursor: 'pointer',
        minWidth: 113,
        height: 36,
        '& > p': {
            wordBreak: 'break-word',
            marginRight: 14,
            fontSize: 14,
        },
        '& svg': {
            marginLeft: 'auto',
            width: 16,
        }
    },
    selected: {
        border: `1px solid ${theme.palette.primary.main} !important`,
        justifyContent: 'space-between',
        '& > p': {
            color: theme.palette.primary.main,
        }
    },
    disabled: {
        border: '1px solid rgba(0, 0, 0, 0.38)',
        cursor: 'default',
        '& > p': {
            color: 'rgba(0, 0, 0, 0.38)'
        }
    },
}));