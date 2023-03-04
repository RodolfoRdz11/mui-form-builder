import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(theme => ({
    cardContainer: {
        paddingTop: 16,
        gap: 16
    },
    card: {
        border: '1px solid #CFD5E2',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        '& > p': {
            wordBreak: 'break-word'
        }
    },
    selected: {
        border: `1px solid ${theme.palette.primary.main} !important`,
        justifyContent: 'space-between'
    },
    disabled: {
        border: '1px solid rgba(0, 0, 0, 0.38)',
        cursor: 'default',
        '& > p': {
            color: 'rgba(0, 0, 0, 0.38)'
        }
    },
}));