import React, { useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

const Calendar = () => {
    const calendarRef = useRef(null);

    const handleDateClick = (info) => {
        alert('Data clicada: ' + info.dateStr);
    };

    return (

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <FullCalendar
                ref={calendarRef}
                plugins={[dayGridPlugin, interactionPlugin]}
                editable={true}
                events={[
                    { title: 'Exame de rotina', date: '2024-09-20' },
                    { title: 'Consulta com o Nutricionista', date: '2024-09-25' }
                ]}
                dateClick={handleDateClick}
            />
        </div>

    );    
}
export default Calendar;