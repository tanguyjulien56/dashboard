import { Box, useTheme } from '@mui/material';
import { tokens } from '../theme';

const ProgressCircle = ({ progress = '0.75', size = '40' }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            m='20px'
        >
        </Box>
    )
}

export default ProgressCircle;