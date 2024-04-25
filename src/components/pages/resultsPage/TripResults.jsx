import { useContext, useState } from "react"
import TripForm from "../../forms/TripForm"
import TripSmallCard from "./TripSmallCard"
import { Box } from "@mui/material"
import { colors } from "../../../utils/colors"
import TripDataContext from "../../../contexts/TripDataContext"

function TripResults() {
    const { formData } = useContext(TripDataContext)

    const [trips, setTrips] = useState({
        country: 'Brazil',
        cities: [{
            cityName: "Rio de Janeiro",
            description: "Rio de Janeiro is known for its stunning beaches, vibrant culture, and iconic landmarks like Christ the Redeemer Statue and Sugarloaf Mountain.",
            topAttractions: [{
                name: "Christ the Redeemer",
                description: "Iconic statue overlooking the city from the peak of Corcovado Mountain, offering panoramic views of Rio de Janeiro.",
                url: 'https://santuariocristoredentor.com.br/',
                image: 'https://lh3.googleusercontent.com/p/AF1QipMzAJtDqbSYNAY_2gTWNOcB9a-Ao4qMuN3n5psO=s1360-w1360-h1020',
                address: 'Parque Nacional da Tijuca - Alto da Boa Vista, Rio de Janeiro - RJ, Brazil'
            },
            {
                name: 'Copacabana Beach',
                description: 'One of the most famous beaches in the world, known… sands, lively atmosphere, and beachfront kiosks.',
                url: 'https://copacabanajomtien.com/en/',
                image: 'https://images.squarespace-cdn.com/content/v1/63b42d68124e4755513cecb9/c4833e41-a256-41d8-8dd9-815a683a2ed3/copacabana-beach.jpg',
                address: 'Copacabana, sector of the city of Rio de Janeiro, Brazil'
            },
            {
                name: 'Sugarloaf Mountain',
                description: 'A granite peak rising from the waterfront, accessi…ing stunning views of the city and Guanabara Bay.',
                url: 'https://www.sugarloaf.com/',
                image: 'https://nowinrio.com/wp-content/uploads/2017/04/Sugarloaf-Mountain-Rio-de-Janeiro-Brazil.jpg',
                address: '5092 Sugarloaf Access Rd. Carrabassett Valley'
            }],
            topHotels: [{
                name: "Christ the Redeemer",
                description: "Iconic statue overlooking the city from the peak of Corcovado Mountain, offering panoramic views of Rio de Janeiro.",
                url: 'https://santuariocristoredentor.com.br/',
                image: 'https://lh3.googleusercontent.com/p/AF1QipMzAJtDqbSYNAY_2gTWNOcB9a-Ao4qMuN3n5psO=s1360-w1360-h1020',
                address: 'Parque Nacional da Tijuca - Alto da Boa Vista, Rio de Janeiro - RJ, Brazil'
            },
            {
                name: 'Copacabana Beach',
                description: 'One of the most famous beaches in the world, known… sands, lively atmosphere, and beachfront kiosks.',
                url: 'https://copacabanajomtien.com/en/',
                image: 'https://images.squarespace-cdn.com/content/v1/63b42d68124e4755513cecb9/c4833e41-a256-41d8-8dd9-815a683a2ed3/copacabana-beach.jpg',
                address: 'Copacabana, sector of the city of Rio de Janeiro, Brazil'
            },
            {
                name: 'Sugarloaf Mountain',
                description: 'A granite peak rising from the waterfront, accessi…ing stunning views of the city and Guanabara Bay.',
                url: 'https://www.sugarloaf.com/',
                image: 'https://nowinrio.com/wp-content/uploads/2017/04/Sugarloaf-Mountain-Rio-de-Janeiro-Brazil.jpg',
                address: '5092 Sugarloaf Access Rd. Carrabassett Valley'
            }],
            topRestaurants: [{
                name: "Christ the Redeemer",
                description: "Iconic statue overlooking the city from the peak of Corcovado Mountain, offering panoramic views of Rio de Janeiro.",
                url: 'https://santuariocristoredentor.com.br/',
                image: 'https://lh3.googleusercontent.com/p/AF1QipMzAJtDqbSYNAY_2gTWNOcB9a-Ao4qMuN3n5psO=s1360-w1360-h1020',
                address: 'Parque Nacional da Tijuca - Alto da Boa Vista, Rio de Janeiro - RJ, Brazil'
            },
            {
                name: 'Copacabana Beach',
                description: 'One of the most famous beaches in the world, known… sands, lively atmosphere, and beachfront kiosks.',
                url: 'https://copacabanajomtien.com/en/',
                image: 'https://images.squarespace-cdn.com/content/v1/63b42d68124e4755513cecb9/c4833e41-a256-41d8-8dd9-815a683a2ed3/copacabana-beach.jpg',
                address: 'Copacabana, sector of the city of Rio de Janeiro, Brazil'
            },
            {
                name: 'Sugarloaf Mountain',
                description: 'A granite peak rising from the waterfront, accessi…ing stunning views of the city and Guanabara Bay.',
                url: 'https://www.sugarloaf.com/',
                image: 'https://nowinrio.com/wp-content/uploads/2017/04/Sugarloaf-Mountain-Rio-de-Janeiro-Brazil.jpg',
                address: '5092 Sugarloaf Access Rd. Carrabassett Valley'
            }]
        },
        {
            cityName: 'São Paulo',
            description: "As Brazil's largest city, São Paulo is a bustling …institutions like São Paulo Museum of Art (MASP).",
            topAttractions: [{
                name: "Christ the Redeemer",
                description: "Iconic statue overlooking the city from the peak of Corcovado Mountain, offering panoramic views of Rio de Janeiro.",
                url: 'https://santuariocristoredentor.com.br/',
                image: 'https://lh3.googleusercontent.com/p/AF1QipMzAJtDqbSYNAY_2gTWNOcB9a-Ao4qMuN3n5psO=s1360-w1360-h1020',
                address: 'Parque Nacional da Tijuca - Alto da Boa Vista, Rio de Janeiro - RJ, Brazil'
            },
            {
                name: 'Copacabana Beach',
                description: 'One of the most famous beaches in the world, known… sands, lively atmosphere, and beachfront kiosks.',
                url: 'https://copacabanajomtien.com/en/',
                image: 'https://images.squarespace-cdn.com/content/v1/63b42d68124e4755513cecb9/c4833e41-a256-41d8-8dd9-815a683a2ed3/copacabana-beach.jpg',
                address: 'Copacabana, sector of the city of Rio de Janeiro, Brazil'
            },
            {
                name: 'Sugarloaf Mountain',
                description: 'A granite peak rising from the waterfront, accessi…ing stunning views of the city and Guanabara Bay.',
                url: 'https://www.sugarloaf.com/',
                image: 'https://nowinrio.com/wp-content/uploads/2017/04/Sugarloaf-Mountain-Rio-de-Janeiro-Brazil.jpg',
                address: '5092 Sugarloaf Access Rd. Carrabassett Valley'
            }],
            topHotels: [{
                name: "Christ the Redeemer",
                description: "Iconic statue overlooking the city from the peak of Corcovado Mountain, offering panoramic views of Rio de Janeiro.",
                url: 'https://santuariocristoredentor.com.br/',
                image: 'https://lh3.googleusercontent.com/p/AF1QipMzAJtDqbSYNAY_2gTWNOcB9a-Ao4qMuN3n5psO=s1360-w1360-h1020',
                address: 'Parque Nacional da Tijuca - Alto da Boa Vista, Rio de Janeiro - RJ, Brazil'
            },
            {
                name: 'Copacabana Beach',
                description: 'One of the most famous beaches in the world, known… sands, lively atmosphere, and beachfront kiosks.',
                url: 'https://copacabanajomtien.com/en/',
                image: 'https://images.squarespace-cdn.com/content/v1/63b42d68124e4755513cecb9/c4833e41-a256-41d8-8dd9-815a683a2ed3/copacabana-beach.jpg',
                address: 'Copacabana, sector of the city of Rio de Janeiro, Brazil'
            },
            {
                name: 'Sugarloaf Mountain',
                description: 'A granite peak rising from the waterfront, accessi…ing stunning views of the city and Guanabara Bay.',
                url: 'https://www.sugarloaf.com/',
                image: 'https://nowinrio.com/wp-content/uploads/2017/04/Sugarloaf-Mountain-Rio-de-Janeiro-Brazil.jpg',
                address: '5092 Sugarloaf Access Rd. Carrabassett Valley'
            }],
            topRestaurants: [{
                name: "Christ the Redeemer",
                description: "Iconic statue overlooking the city from the peak of Corcovado Mountain, offering panoramic views of Rio de Janeiro.",
                url: 'https://santuariocristoredentor.com.br/',
                image: 'https://lh3.googleusercontent.com/p/AF1QipMzAJtDqbSYNAY_2gTWNOcB9a-Ao4qMuN3n5psO=s1360-w1360-h1020',
                address: 'Parque Nacional da Tijuca - Alto da Boa Vista, Rio de Janeiro - RJ, Brazil'
            },
            {
                name: 'Copacabana Beach',
                description: 'One of the most famous beaches in the world, known… sands, lively atmosphere, and beachfront kiosks.',
                url: 'https://copacabanajomtien.com/en/',
                image: 'https://images.squarespace-cdn.com/content/v1/63b42d68124e4755513cecb9/c4833e41-a256-41d8-8dd9-815a683a2ed3/copacabana-beach.jpg',
                address: 'Copacabana, sector of the city of Rio de Janeiro, Brazil'
            },
            {
                name: 'Sugarloaf Mountain',
                description: 'A granite peak rising from the waterfront, accessi…ing stunning views of the city and Guanabara Bay.',
                url: 'https://www.sugarloaf.com/',
                image: 'https://nowinrio.com/wp-content/uploads/2017/04/Sugarloaf-Mountain-Rio-de-Janeiro-Brazil.jpg',
                address: '5092 Sugarloaf Access Rd. Carrabassett Valley'
            }]
        }
        ]
    })


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

                <TripSmallCard trips={trips} />
            </Box>
        </>
    )
}
export default TripResults