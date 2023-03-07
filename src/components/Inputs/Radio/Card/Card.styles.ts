import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(theme => ({
    container: {
        paddingTop: 16,
        gap: 16
    },
    row: {
        flexDirection: 'row'
    },
    card: {
        border: '1px solid #CFD5E2',
        padding: 16,
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        '& > p': {
            wordBreak: 'break-word'
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