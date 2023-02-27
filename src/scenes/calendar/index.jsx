import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import timegridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { formatDate } from "@fullcalendar/core";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";
import Header from "../../component/Header";
import { tokens } from "../../theme";

const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);
    const handleDateClick = (selected) => {
        const title = prompt("Please a new title for your event.");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dataStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            });
        }
    };

    const handleEventClick = (selected) => {
        if (
            window.confirm(
                `Are you sure you want to delete the event '${selected.event.title}'`
            )
        ) {
            selected.event.remove();
        }
    };

    return (
        <Box m='20px'>
            <Header title='CALENDAR' subtitle='Full Calendar Intractive Page' />
            <Box display='flex' justifyContent='space-between' mt="15px">
                {/* <FullCalendar/> */}
                <Box
                    flex='1 1 20%'
                    backgroundColor={colors.primary[400]}
                    p='15px'
                    borderRadius='4px'
                    height="75vh"
                    overflow='auto'
                    >
                    <Typography variant='h5'>Events</Typography>
                    <List>
                        {currentEvents.map((event) => (
                            <ListItem
                                key={event.id}
                                sx={{
                                    backgroundColor: colors.greenAccent[500],
                                    m: "10px 0",
                                    borderRadius: "2px",
                                }}>
                                <ListItemText
                                    primary={event.title}
                                    secondary={
                                        <Typography>
                                            {formatDate(event.start, {
                                                month: 'short',
                                                year: 'numeric',
                                                day: 'numeric',
                                                // timeZoneName: 'short',
                                                timeZone: 'local',
                                                locale: 'local'
                                            })}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box flex='1 1 100%' ml='15px' sx={{
                    '& .fc-popover':{
                        backgroundColor:colors.primary[400]
                    },
                    '& .fc-button-primary':{
                        backgroundColor:colors.primary[400],
                        color:colors.primary[100],
                        border:"none"
                    },
                    '& .fc-theme-standard .fc-list-day-cushion':{
                        backgroundColor:colors.primary[400],
                    },
                    '& --fc-list-event-hover-bg-color':{
                        backgroundColor:colors.primary[100],
                    },
                }}>
                    <FullCalendar
                        height='75vh'
                        plugins={[
                            daygridPlugin,
                            timegridPlugin,
                            listPlugin,
                            interactionPlugin,
                        ]}
                        headerToolbar={{
                            left:"prev,next today",
                            center:"title",
                            right:"dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(event)=> setCurrentEvents(event)}
                        initialEvents={[
                            {id:"1234", title:"All day Event", date:"2023-02-22"}
                        ]} 
                        // themeSystem='bootstrap5'
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Calendar;
