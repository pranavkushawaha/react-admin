import { Box } from "@mui/material"
import Header from "../../component/Header";
import GeoChart from "../../component/GeoChart";
import { useTheme } from "@mui/system";
import { tokens } from "../../theme";

const Geo  = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Header title  = "Geography Chart" subtitle="Simple Geography Chart"/>
            <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
                <GeoChart/>
            </Box>
        </Box>
    )
}

export default Geo;