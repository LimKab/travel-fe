
import { useForm } from 'react-hook-form';

export default function SignUpForm({ onSubmit }) {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm();


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('username', {
                required: "username is required",
            })}
                type='string'
                placeholder='Username'
            />
            {errors.email && (<p>{`${errors.email.message}`}</p>)}
            <input {...register('email', {
                required: "Email is required",
            })}
                type='email'
                placeholder='Email'
            />
            {errors.email && (<p>{`${errors.email.message}`}</p>)}
            <input {...register('password', {
                required: "Password is required",
                minLength: {
                    value: 10,
                    message: "Password must be at leat 10 characters"
                }
            })}
                type='password'
                placeholder='Password'
            />
            {errors.password && (<p>{`${errors.password.message}`}</p>)}
            <input {...register('confirmPassword', {
                required: "Confirm password is required",
                validate: (value) =>
                    value === getValues("password") || "Passwords must match"
            })}
                type="password"
                placeholder='Confirm password'
            />
            {errors.confirmPassword && (<p>{`${errors.confirmPassword.message}`}</p>)}
            <input type="submit" />
        </form>
    );
}