import { Box } from "@mui/material"
import TripSmallCard from "../resultsPage/TripSmallCard"
import { useState } from "react"
import { thailand } from "../../../utils/data/thailand2"

function MyTrips() {

    const [tripData, setTripData] = useState(thailand.response)


    return (
        <>
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
export default MyTrips