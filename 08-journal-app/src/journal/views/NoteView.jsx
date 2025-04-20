import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Button, Grid2, IconButton, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks';
import { useEffect, useMemo, useRef } from 'react';
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from '../../store/journal';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () => {

    const dispatch = useDispatch();
    const { active:note, messageSaved, isSaving } = useSelector( state => state.journal );

    const { 
        body, 
        date, 
        formState, 
        onInputChange, 
        title, 
    } = useForm( note );

    const dateString = useMemo(() => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    }, [date]);

    const fileInputRef = useRef();

    useEffect(() => {
        dispatch( setActiveNote(formState) );
    
    }, [formState]);

    useEffect(() => {
        if ( messageSaved.length > 0 ) {
            Swal.fire({
                title: 'Nota actualizada',
                text: messageSaved,
                icon: 'success'
            });
        }
    }, [messageSaved])
    

    const onSaveNote = () => {
        dispatch( startSaveNote() );
    }

    const onFileInputChange = ({ target }) => {
        if ( target.files === 0 ) return;

        console.log('subiendo archivos...');
        dispatch( startUploadingFiles( target.files ) );
    }

    const onDelete = () => {
        dispatch( startDeletingNote() );
    }

    return (
        <Grid2 
            container 
            direction='row' 
            justifyContent='space-between' 
            alignItems='center' 
            sx={{ mb: 1 }} 
            className='animate__animated animate__fadeIn animate__faster'
        >
            <Grid2>
                <Typography fontSize={ 39 } fontWeight='light'>
                    { dateString }
                </Typography>
            </Grid2>

            <Grid2>

                <input 
                    type='file'
                    multiple
                    onChange={ onFileInputChange }
                    style={{ display: 'none' }}
                    ref={ fileInputRef }
                />

                <IconButton
                    color='primary'
                    disabled={ isSaving }
                    onClick={ () => fileInputRef.current.click() }
                >
                    <UploadOutlined />
                </IconButton>

                <Button
                    onClick={ onSaveNote } 
                    color="primary" 
                    sx={{ padding: 2 }}
                    disabled={ isSaving }
                >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid2>

            <Grid2 container size={ 12 }>
                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un titulo"
                    label="Titulo"
                    sx={{ border: 'none', mb: 1 }}
                    name="title"
                    value={ title }
                    onChange={ onInputChange }
                />
                
                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="Que sucedio hoy?"
                    minRows={ 5 }
                    name="body"
                    value={ body }
                    onChange={ onInputChange }
                />
            </Grid2>

            <Grid2
                justifyContent="end"
            >
                <Button
                    onClick={ onDelete }
                    sx={{ mt: 2 }}
                    color='error'
                >
                    <DeleteOutline />
                    Borrar
                </Button>

            </Grid2>

            <ImageGallery images={ note.imageUrls } />
        </Grid2>
    )
}
