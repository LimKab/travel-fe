import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { Controller } from "react-hook-form"
import { colors } from "../../utils/colors"

function SelectionInput({ control, name, arr, onError }) {
    return (
        <>
            <Button sx={{
                background: colors.brandWhite, mx: 0.5, p: 0
                , '&:hover': {
                    backgroundColor: colors.brandGreen,
                    color: colors.brandWhite,
                    '& .MuiInputLabel-root': {
                        color: colors.brandWhite,
                    },
                    '& .MuiSvgIcon-root': {
                        color: colors.brandWhite,
                    }
                }
            }} >
                <FormControl variant="filled" sx={{ minWidth: 150 }} size="small">
                    <InputLabel >{name}</InputLabel>
                    <Controller
                        name={name}
                        control={control}
                        rules={{ required: `${name} is required` }}
                        render={({ field, fieldState: { error } }) => {
                            onError(error)
                            return (
                                <Select
                                    id={name}
                                    label={name}
                                    {...field}
                                    error={!!error}
                                    sx={{
                                        '&:hover': {
                                            '.MuiSelect-select': {
                                                color: colors.brandWhite
                                            }
                                        }
                                    }}
                                >
                                    <MenuItem value="Surprise me">
                                        <em>Surprise me</em>
                                    </MenuItem>
                                    {arr.map((item) => (
                                        <MenuItem key={item.name} value={name === 'destination' ? item.code : item.name}>
                                            {item.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            )
                        }}
                    />
                </FormControl >
            </Button>
        </>
    )
}
export default SelectionInput