import { Box, Typography } from "@mui/material"
import TravelVideo from "./TravelVideo"
import { colors } from "../../../utils/colors"
import GenerateForm from "../../forms/GenerateForm"


function Home() {
    return (
        <>
            <Box
                height={250}
                width='xl'
                my={4}
                display="flex"
                flexDirection="column"
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
                <GenerateForm />
            </Box>
            <TravelVideo />
        </>
    )
}
export default Home