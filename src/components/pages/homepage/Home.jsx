import { Box, Typography } from "@mui/material"
import TravelVideo from "./TravelVideo"
import { colors } from "../../../utils/colors"
import TripForm from "../../forms/TripForm"
import VideoBackground from "./VideoBackground"
import './home.css'
import Logo from '../../../utils/images/logopng.png';

function Home() {
    return (
        <>
            <div className="video-background">
                <div className="video-foreground">
                    <VideoBackground />
                </div>
            </div>
            <Box
                minHeight={400}
                height={610}
                maxWidth='100%'
                my={4}
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={4}
                p={2}
                m={0}
                bgcolor={`rgb(16,64,59, 0.3)`}
                justifyContent="center"
                sx={{ position: 'relative', zIndex: 2, bgcolor: { xs: colors.brandDarkGreen, md: `rgb(16,64,59, 0.3)` } }}
            >
                <img src={Logo} alt="Logo" className="bigLogoStyle" />
                <Typography variant="h3" display="block" gutterBottom color={colors.brandWhite}>
                    Experience your AI generated trip!
                </Typography>
                <TripForm />
            </Box >

            <TravelVideo />
        </>
    )
}
export default Home