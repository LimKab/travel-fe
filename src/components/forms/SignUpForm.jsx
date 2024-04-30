
import { Box, Button, Container, Grid, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

export default function SignUpForm({ onSubmit }) {
    const {
        register,
        handleSubmit,
        getValues,
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
                            <TextField id="username" label="Username" variant="outlined" size="small"
                                {...register('username', {
                                    required: "username is required",
                                })}
                                type='string'
                                placeholder='Username'
                            />
                            {errors.email && (<p>{`${errors.email.message}`}</p>)}
                        </Grid>
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
                                    minLength: {
                                        value: 8,
                                        message: "Password must be at leat 8 characters"
                                    }
                                })}
                                type='password'
                                placeholder='Password'
                            />
                            {errors.password && (<p>{`${errors.password.message}`}</p>)}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="confirmPassword" label="Confirm password" variant="outlined" size="small"
                                {...register('confirmPassword', {
                                    required: "Confirm password is required",
                                    validate: (value) =>
                                        value === getValues("password") || "Passwords must match"
                                })}
                                type="password"
                                placeholder='Confirm password'
                            />
                            {errors.confirmPassword && (<p>{`${errors.confirmPassword.message}`}</p>)}
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}