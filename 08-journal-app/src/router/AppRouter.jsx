import { Route, Routes } from 'react-router';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { useSelector } from 'react-redux';
import { CheckingAuth } from '../ui';
import { useEffect } from 'react';

export const AppRouter = () => {
    
    const { status } = useSelector( state => state.auth );

    // if ( status === 'checking' ) {
    //     return <CheckingAuth />
    // }

    useEffect(() => {
    
    }, [])
    

    return (
        <Routes>
            {/* Login y registro */}
            <Route path="/auth/*" element={ <AuthRoutes/> } />

            {/* Journal App */}
            <Route path="/*" element={ <JournalRoutes/> } />
        </Routes>
    )
}


