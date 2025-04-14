
import { CircularProgress, Grid2 } from '@mui/material';

export const CheckingAuth = () => {
    return (
        <Grid2
            container
            spacing={ 0 }
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >
            <Grid2
                // size={ 8 }
                sx={{ 
                    // backgroundColor: 'white', 
                    // padding: 3, 
                    // borderRadius: 2, 
                    width: { md: 450 }  
                }} 
            >
                <CircularProgress color='warning' />
            </Grid2>
        </Grid2>
    )
}
