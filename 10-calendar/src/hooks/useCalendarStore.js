import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from "../store";
import { calendarApi } from "../api";
import { convertEventsToDateEvents } from "../helpers";
import Swal from "sweetalert2";

export const useCalendarStore = () => {
    
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector( state => state.calendar );
    const { user } = useSelector( state => state.auth );

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) );
    }

    const startSavingEvent = async( calendarEvent ) => {
        try {
            if ( calendarEvent.id ) {
                await calendarApi.put(`/events/${ calendarEvent.id }`, calendarEvent);
                dispatch( onUpdateEvent({ ...calendarEvent, user }) );
                return 
            } 
            const { data } = await calendarApi.post('/events', calendarEvent);
            dispatch( onAddNewEvent({ ...calendarEvent, id: data.evento.id, user }) );   
            Swal.fire('Evento agregado exitosamente', 'El evento se agregó de forma correcta', 'success');
        } catch (err) {
            console.log(err);
            Swal.fire('Error al guardar', err.response.data.msg, 'error');            
        }
    }

    const startDeletingEvent = async() => {
        try {
            await calendarApi.delete(`/events/${ activeEvent.id }`);
            dispatch( onDeleteEvent() );
            Swal.fire('Evento eliminado exitosamente', 'El evento se eliminó de forma correcta', 'success');
        } catch (err) {
            console.log(err);
            Swal.fire('Error al eliminar', err.response.data.msg, 'error');
        }
    }

    const startLoadingEvents = async() => {
        try {
            const { data: { eventos } } = await calendarApi.get('/events');
            const events = convertEventsToDateEvents( eventos ); 
            dispatch( onLoadEvents( events ) );
        } catch (err) {
            console.log(err);
            console.log('Error cargando eventos');
        }
    }

    return {
        //* Propiedades
        activeEvent,
        events,
        hasEventSelected: !!activeEvent,

        //* Metodo
        setActiveEvent,
        startDeletingEvent,
        startLoadingEvents,
        startSavingEvent,
    }
}
