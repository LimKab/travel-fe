
import { useForm } from 'react-hook-form';

export default function LoginForm({ onSubmit }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
                    value: 8,
                    message: "Password must be at leat 8 characters"
                }
            })}
                type='password'
                placeholder='Password'
            />
            {errors.password && (<p>{`${errors.password.message}`}</p>)}
            <input type="submit" />
        </form>
    );
}