
import { Box, Button, Container, Grid, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

export default function LoginForm({ onSubmit }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    return (
        <Container>
            <Box
                sx={{
                    marginTop: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10rem'
                }}
            >
                <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>

                            <TextField id="email" label="Email" variant="outlined" size="small"
                                {...register('email', {
                                    required: "Email is required",
                                })}
                                type='email'
                                placeholder='Email'
                            />
                            {errors.email && (<p>{`${errors.email.message}`}</p>)}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="password" label="Password" variant="outlined" size="small"
                                {...register('password', {
                                    required: "Password is required",
                                })}
                                type='password'
                                placeholder='Password'
                            />
                            {errors.password && (<p>{`${errors.password.message}`}</p>)}
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}>
                            Sign in
                        </Button>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}