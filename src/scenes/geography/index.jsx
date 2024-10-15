import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";

const Geography = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            m='20px'
        >
            <Header
                title='Graphique Géo'
                subtitle='Simple Graphique Géo'
            />
            <Box
                sx={{
                    height: { xs: '60vh', md: '75vh' },
                    width: { xs: '100%', md: 'auto' },
                    border: { xs:`2px solid ${colors.grey[100]}`, md: `1px solid ${colors.grey[100]}` }
                }}
                borderRadius='4px'
            >
                <GeographyChart />
            </Box>
        </Box>
    )
}

export default Geography;