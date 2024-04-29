import { Button, ButtonGroup, Stack, Typography } from "@mui/material"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { colors } from "../../utils/colors"
import { useForm } from "react-hook-form"
import { useContext, useEffect, useState } from "react"
import { countryOptions } from "../../utils/arrays/countries"
import SelectionInput from "../smallerComponents/SelectionInput"
import { budget, experience, season } from "../../utils/arrays/optionsArrays"
import { useNavigate } from "react-router-dom"
// import axios from "axios";
import TripDataContext from "../../contexts/TripDataContext"
import { toast } from "react-toastify";
import { toastTopCenter } from "../../utils/toasts";
import { thailand } from '../../utils/data/thailand2';
import loadingGif from '../../assets/loadingGif.gif'

function TripForm({ initialFormData }) {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('sm'))

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
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const {
        // formData,
        setFormData
        // , tripData
        , setTripData
    } = useContext(TripDataContext)

    const notify = (err) => toast.error(err, toastTopCenter)

    async function onSubmit(data) {
        setLoading(true)
        console.log(data);
        setFormData(data)
        const { destination, ...restData } = data
        const jsonDestination = JSON.parse(destination)
        const formDataWJson = { destination: jsonDestination, ...restData }
        console.log(formDataWJson);
        // DO NOT USE THE POST FOR FUN - WE HAVE SAVED OBJECTS FOR THAT
        try {
            // const response = await axios.post('http://localhost:3001/gpt/post', formDataWJson)
            // const results = response.data
            // console.log(results);
            // setTripData(results.response)

            setTimeout(() => {
                setTripData(thailand.response)
                console.log('after timeout')
                setLoading(false)
                navigate('/results')
            }, 30000)
            // console.log(tripData.response);
        } catch (err) {
            console.error(err);
            setError('Something went worng with search so checkout Thailand for now (;')
            setTripData(thailand.response)
            notify(err)
            setLoading(false)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2} alignItems='center'>
                    <ButtonGroup
                        variant="contained"
                        disableElevation
                        orientation={matches ? 'vertical' : 'horizontal'}
                    >

                        < SelectionInput control={control} name={'destination'} arr={countryOptions} onError={(newError) => setError(newError)} />
                        < SelectionInput control={control} name={'experience'} arr={experience} onError={(newError) => setError(newError)} />
                        < SelectionInput control={control} name={'season'} arr={season} onError={(newError) => setError(newError)} />
                        < SelectionInput control={control} name={'budget'} arr={budget} onError={(newError) => setError(newError)} />

                    </ButtonGroup>
                    {error && <p >{error.message}</p>}

                    <Button
                        disabled={isSubmitting}
                        type="submit"
                        sx={{ width: matches ? '100%' : 405, background: colors.brandGreen, color: 'white', '&:hover': { backgroundColor: colors.brandSand }, borderRadius: '8px' }}>
                        {initialFormData ? 'change my trip' : 'ai, generate me a trip'}
                    </Button>
                </Stack>

            </form >
            {loading && <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
                zIndex: 9999 // Make sure it's on top of other content
            }}>
                <img src={loadingGif} alt="Loading..." style={{ width: '80%', opacity: 0.8, borderRadius: 15 }} />
                <div style={{
                    position: 'absolute', // Position absolutely within the fixed container
                    bottom: '10%', // Push 10% from the bottom
                    textAlign: 'center', // Center-align text
                    width: '100%' // Take full width to center content
                }}>
                    <Typography component="div" variant="h5" color={colors.brandDarkGreen} m={2}>
                        Want faster results?
                    </Typography>
                    <Button variant="contained" color="primary">subscribe</Button>
                </div>
            </div>}
        </>
    )
}
export default TripForm