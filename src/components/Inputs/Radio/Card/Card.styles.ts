import { TssStyles } from "src/types";
import { tss } from "tss-react/mui";

export const useStyles: TssStyles = tss.create(({ theme }) => ({
    container: {
        paddingTop: 8,
    },
    row: {
        flexDirection: 'row'
    },
    card: {
        border: '1px solid #CFD5E2',
        padding: '8px 16px',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        minHeight: 40,
        '& > p': {
            wordBreak: 'break-word',
            fontSize: 14,
        }
    },
    selected: {
        border: `1px solid ${theme.palette.primary.main} !important`,
        justifyContent: 'space-between',
        '& > p': {
            color: theme.palette.primary.main
        }
    },
    disabled: {
        border: '1px solid rgba(0, 0, 0, 0.38)',
        cursor: 'default',
        '& > p': {
            color: 'rgba(0, 0, 0, 0.38)'
        }
    }
}))