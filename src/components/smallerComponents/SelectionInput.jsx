import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { Controller } from "react-hook-form"
import { colors } from "../../utils/colors"

function SelectionInput({ control, name, arr, onError }) {
    return (
        <>
            <Button sx={{
                background: colors.brandWhite, m: 0.3, p: 0
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
                <FormControl variant="filled" sx={{ minWidth: 200, maxWidth: '100%' }} size="small">
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
                                    {/* <MenuItem value={null}>
                                        <em>Surprise me</em>
                                    </MenuItem> */}
                                    {arr.map((item) => (
                                        <MenuItem
                                            key={item.name}
                                            value={name === 'destination' ? JSON.stringify({ name: item.name, code: item.code }) : item.name}
                                        >
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