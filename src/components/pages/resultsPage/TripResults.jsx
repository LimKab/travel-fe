import { useContext } from "react"
import TripForm from "../../forms/TripForm"
// import TripSmallCard from "./TripSmallCard"
import { Box } from "@mui/material"
import { colors } from "../../../utils/colors"
import TripDataContext from "../../../contexts/TripDataContext"
import DownloadJsonButton from "../../../utils/downloadData"

function TripResults() {
    const { formData } = useContext(TripDataContext)

    return (
        <>
            <Box
                height={100}
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
                <TripForm initialFormData={formData} />
            </Box>
        //map on trip rsults
            <DownloadJsonButton />
            <Box
                width='md'
                my={4}
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={4}
                p={2}
                m={0}
                // bgcolor={colors.brandDarkGreen}
                justifyContent="center"
            >
                {/* <TripSmallCard /> */}
            </Box>
        </>
    )
}
export default TripResults