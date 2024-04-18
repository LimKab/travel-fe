import { Box, Typography } from "@mui/material"
// import SearchForm from "../search/SearchForm"
import TravelVideo from "./TravelVideo"
import { colors } from "../../utils/colors"


function Home() {
    return (
        <>
            <Box
                height={200}
                width='xl'
                my={4}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
                m={0}
                bgcolor={colors.brandDarkGreen}
                justifyContent="center"
            >
                <Typography variant="h3" display="block" gutterBottom color={colors.brandWhite}>
                    Experience your AI generated trip!
                </Typography>
                {/* <SearchForm /> */}
            </Box>
            <TravelVideo />
        </>
    )
}
export default Home