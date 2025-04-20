import { TurnedInNot } from '@mui/icons-material'
import { Grid2, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal';


export const SideBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {
    
    const dispatch = useDispatch();

    const newTitle = useMemo( () => {
        return title.length > 15
            ? title.substring(0,15) + '...'
            : title;
    }, [ title ]);

    const onClickNote = () => {
        dispatch( setActiveNote({title, body, id, date, imageUrls}) )
    }

    return (
        <ListItem
            onClick={ onClickNote }
            disablePadding
        >
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>

                <Grid2 container>
                    <ListItemText primary={ newTitle } />
                    <ListItemText secondary={ body } />
                </Grid2>
            </ListItemButton>
        </ListItem>
    )
}
