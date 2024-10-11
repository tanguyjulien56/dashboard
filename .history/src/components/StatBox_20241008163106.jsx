import { Box, useTheme } from '@mui/material';
import { tokens } from '../theme';

const StatBox = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    return (
        <div>StatBox</div>
    )
}

export default StatBox