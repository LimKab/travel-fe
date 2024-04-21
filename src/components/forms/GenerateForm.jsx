import { Button, ButtonGroup, Stack } from "@mui/material"
import { colors } from "../../utils/colors"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { countryOptions } from "../../utils/arrays/countries"
import SelectionInput from "../smallerComponents/SelectionInput"
import { budget, experience, season } from "../../utils/arrays/optionsArrays"


function GenerateForm() {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            destination: '',
            experience: '',
            season: '',
            budget: ''
        }
    })
    const [error, setError] = useState(null)

    function onSubmit(formData) {
        console.log(formData);
        //http://localhost:3001/gpt/post
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

                <Button type="submit" sx={{ width: 310, background: colors.brandSand, '&:hover': { backgroundColor: colors.brandBrownish } }}>ai generate me a trip</Button>
            </Stack>
        </form >
    )
}
export default GenerateForm