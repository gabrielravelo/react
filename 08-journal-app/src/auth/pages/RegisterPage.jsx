import { Link as RouterLink } from 'react-router';
import { Google } from '@mui/icons-material';
import { Alert, Button, Grid2, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

const formData = {
    email: '',
    password: '',
    displayName: '',
}

const formValidations = {
    email: [(value) => value.includes('@'), 'El correo debe de tener un @'],
    password: [(value) => value.length >= 6, 'El password debe de tener más de 6 caracteres'],
    displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
}

export const RegisterPage = () => {

    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const { status, errorMessage } = useSelector( state => state.auth );
    const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

    const { 
        displayName, 
        displayNameValid, 
        email, 
        emailValid,
        formState,
        isFormValid,
        onInputChange, 
        password, 
        passwordValid,
    } = useForm(formData, formValidations);


    const onSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);

        if ( !isFormValid ) return;
        
        dispatch( startCreatingUserWithEmailPassword(formState) );
    }

    return (
        <AuthLayout title="Crear cuenta">
            <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
                <Grid2 container>
                    <Grid2 size={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label="Nombre completo" 
                            type="text" 
                            placeholder="Nombre completo"
                            fullWidth
                            name="displayName"
                            value={ displayName }
                            onChange={ onInputChange }
                            error={ !!displayNameValid && formSubmitted }
                            helperText={ displayNameValid }
                        />
                    </Grid2>
                    
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
                        <Grid2 size={ 12 }>
                            <Button
                                disabled={ isCheckingAuthentication } 
                                type='submit' 
                                variant="contained" 
                                fullWidth
                            >
                                Crear cuenta
                            </Button>
                        </Grid2>
                    </Grid2>

                    <Grid2 size={ 12 } container direction="row" justifyContent="end">
                        <Typography sx={{ mr: 1 }}>Ya tienes cuenta?</Typography>
                        <Link component={ RouterLink } color="inherit" to="/auth/login">
                            Ingresar
                        </Link>
                    </Grid2>
                </Grid2>
            </form>
        </AuthLayout>
    )
}
