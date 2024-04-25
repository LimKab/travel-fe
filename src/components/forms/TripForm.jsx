import { Button, ButtonGroup, Stack } from "@mui/material"
import { colors } from "../../utils/colors"
import { useForm } from "react-hook-form"
import { useContext, useEffect, useState } from "react"
import { countryOptions } from "../../utils/arrays/countries"
import SelectionInput from "../smallerComponents/SelectionInput"
import { budget, experience, season } from "../../utils/arrays/optionsArrays"
import { useNavigate } from "react-router-dom"
// import axios from "axios"
import TripDataContext from "../../contexts/TripDataContext"


function TripForm({ initialFormData }) {
    const { control, handleSubmit, reset, formState: { isSubmitting } } = useForm({
        defaultValues: {
            destination: '',
            experience: '',
            season: '',
            budget: '',
            ...initialFormData
        }
    })

    useEffect(() => {
        reset(initialFormData)
    }, [initialFormData, reset])


    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const { formData, setFormData } = useContext(TripDataContext)

    useEffect(() => {
        console.log("Updated formData:", formData);
    }, [formData]);

    async function onSubmit(data) {
        console.log(data);
        const { destination, ...restData } = data
        const jsonDestination = JSON.parse(destination)
        setFormData({ destination: jsonDestination, ...restData })

        // DO NOT USE THE POST FOR FUN - WE HAVE SAVED OBJECTS FOR THAT
        // try {
        //     const response = await axios.post('http://localhost:3001/gpt/post', formData)
        //     const results = response.data

        //     console.log(results);
        // } catch (err) {
        //     console.error(err);
        // }
        navigate('/results')

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2} alignItems='center'>
                <ButtonGroup variant="contained" disableElevation>

                    < SelectionInput control={control} name={'destination'} arr={countryOptions} onError={(newError) => setError(newError)} />
                    < SelectionInput control={control} name={'experience'} arr={experience} onError={(newError) => setError(newError)} />
                    < SelectionInput control={control} name={'season'} arr={season} onError={(newError) => setError(newError)} />
                    < SelectionInput control={control} name={'budget'} arr={budget} onError={(newError) => setError(newError)} />

                </ButtonGroup>
                {error && <p >{error.message}</p>}

                <Button
                    disabled={isSubmitting}
                    type="submit"
                    sx={{ width: 310, background: colors.brandSand, '&:hover': { backgroundColor: colors.brandBrownish } }}>
                    ai, generate me a trip
                </Button>
            </Stack>
        </form >
    )
}
export default TripForm