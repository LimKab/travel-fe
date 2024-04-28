import { useContext } from "react"
import TripForm from "../../forms/TripForm"
import TripSmallCard from './TripSmallCard'
import { Box } from "@mui/material"
import { colors } from "../../../utils/colors"
import TripDataContext from "../../../contexts/TripDataContext"
import DownloadJsonButton from "../../../utils/downloadData"

function TripResults() {
    const { formData, tripData } = useContext(TripDataContext)

    return (
        <>
            <Box
                minHeight={100}
                maxWidth={{ xs: '100%', sm: '100%', md: 'xl' }}
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
            {/* <DownloadJsonButton /> */}

            <Box
                width={{ xs: '90%', sm: '100vh' }}
                display="flex"
                flexDirection="column"
                gap={4}
                m='2rem auto'
            >
                {tripData && tripData.map((item) => <TripSmallCard key={item.cityInfo[0].cityCode} item={item} />)}
            </Box >
        </>
    )
}
export default TripResults