import { Calendar, Views } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarEvent, Navbar } from '../';
import { addHours } from 'date-fns';
import { getMessagesES, localizer } from '../../helpers';
import { useState } from 'react';

const events = [{
    title: 'Cumple Valen',
    notes: 'Comprar regalo',
    start: new Date(),
    end: addHours( new Date(), 2 ),
    bgColor: '#fafafa',
    user: {
        _id: '123',
        name: 'Gabo'
    }
}]

export const CalendarPage = () => {

    const [language, setLanguage] = useState(true);
    const [currentView, setCurrentView] = useState(Views.MONTH);
    const [currentDate, setCurrentDate] = useState(new Date());

    const onChangeLanguage = () => {
        setLanguage(current => !current);
    }

    const eventStyleGetter = ( event, start, end, isSelected ) => {
        const style = {
            backgroundColor: '#347CF7',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white',
        }

        return {
            style
        }
    }

    return (
        <>
            <Navbar onChangeLanguage={ onChangeLanguage } />

            <Calendar
                culture={ language && 'es' }
                messages={ language && getMessagesES() }
                localizer={ localizer }
                events={ events }
                startAccessor="start"
                endAccessor="end"
                date={ currentDate }
                view={ currentView }
                onView={ setCurrentView }
                onNavigate={ setCurrentDate }
                style={{ height: 'calc(100vh - 80px)' }}
                eventPropGetter={ eventStyleGetter }
                components={{ 
                    event: CalendarEvent
                }}
            />
        </>
    )
}

