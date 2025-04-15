import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router';
import { Google } from '@mui/icons-material';
import { Alert, Button, Grid2, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';

const formData = {
    email: '',
    password: '',
}

const formValidations = {
    email: [(value) => value.includes('@'), 'El correo debe de tener un @'],
    password: [(value) => value.length >= 6, 'El password debe de tener más de 6 caracteres'],
}

export const LoginPage = () => {

    const { status, errorMessage } = useSelector( state => state.auth );

    const [formSubmitted, setFormSubmitted] = useState(false);
    const dispatch = useDispatch();

    const { 
        email, 
        emailValid,
        formState, 
        isFormValid, 
        onInputChange, 
        password, 
        passwordValid,
    } = useForm(formData, formValidations);

    const isAuthenticating = useMemo( () => status === 'checking', [status]);

    const onSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);

        if ( !isFormValid ) return;

        dispatch( startLoginWithEmailPassword(formState) );
    }

    const onGoogleSignIn = () => {
        // console.log('onGoogleSignIn');
        dispatch( startGoogleSignIn() );
    }

    return (
        <AuthLayout title="Login">
            <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
                <Grid2 container>
                    <Grid2 size={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label="Correo" 
                            type="email" 
                            placeholder="correo@google.com"
                            fullWidth 
                            name="email"
                            value={ email }
                            onChange={ onInputChange }
                            error={ !!emailValid && formSubmitted }
                            helperText={ emailValid }
                        />
                    </Grid2>
                    
                    <Grid2 size={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label="Contraseña" 
                            type="password" 
                            placeholder="contraseña"
                            fullWidth 
                            name="password"
                            value={ password }
                            onChange={ onInputChange }
                            error={ !!passwordValid && formSubmitted }
                            helperText={ passwordValid }
                        />
                    </Grid2>

                    <Grid2 size={ 12 } container spacing={ 2 } sx={{ mb: 2, mt: 2 }}>
                        <Grid2 size={ 12 } display={ !!errorMessage ? '' : 'none' }>
                            <Alert severity='error'>{ errorMessage }</Alert>
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 6 }}>
                            <Button
                                disabled={ isAuthenticating } 
                                type='submit'
                                variant="contained" 
                                fullWidth
                            >
                                Login
                            </Button>
                        </Grid2>
                        
                        <Grid2 size={{ xs: 12, sm: 6 }}>
                            <Button 
                                disabled={ isAuthenticating }
                                variant="contained" 
                                fullWidth
                                onClick={ onGoogleSignIn }
                            >
                                <Google />
                                <Typography sx={{  ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid2>
                    </Grid2>

                    <Grid2 size={ 12 } container direction="row" justifyContent="end">
                        <Link component={ RouterLink } color="inherit" to="/auth/register">
                            Crear una cuenta
                        </Link>
                    </Grid2>
                </Grid2>
            </form>
        </AuthLayout>
    )
}
