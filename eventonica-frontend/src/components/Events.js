import React, { useState, useReducer } from 'react';
import AddEvent from './AddEvent';
import DeleteEvent from './DeleteEvent';

//Define initialState and reducer function to track fields of newly added events
const initialState = {
  id: "",
  name: "",
  date: "",
  description: "",
  category: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "editId":
      return {...state, id: action.payload};     
    case "editName":
      return { ...state, name: action.payload };
    case "editDate":
      return {...state, date: action.payload};
    case "editDescription":
      return { ...state, description: action.payload };
    case "editCategory":
      return { ...state, category: action.payload };
    case "clearForm":
      return initialState;
    default:
      return state;
  }
};

export default function Events() {
  const sampleEvents = [
    {
      id: "1",
      name: "Birthday",
      date: "2021-09-01",
      description: "A birthday party for my best friend",
      category: "Celebration"
    },
    {
      id: "2",
      name: "Graduation",
      date: "2021-08-01",
      description: "The class of 2021 graduates from East High",
      category: "Education"
    },
    {
      id: "3",
      name: "JS Study Session",
      date: "2021-10-01",
      description: "A chance to practice Javascript interview questions",
      category: "Education"
    }
  ];

  const [events, setEvents] = useState(sampleEvents);
  const [deleteEventId, setDeleteEventId] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const eventList = events.map((event) =>
    <li key={event.id}>
      Event ID: {event.id}<br/>
      Name: {event.name}<br/>
      Date: {event.date}<br/>
      Description: {event.description}<br/>
      Category: {event.category}<br/><br/>
    </li>
  );

  const handleAddEventForm = eventFormSubmit => {
    eventFormSubmit.preventDefault();
    const newEvent = {
      id: state.id,
      name: state.name,
      date: state.date,
      description: state.description,
      category: state.category
    };
    setEvents([...events, newEvent]);
    dispatch({
      type: "clearForm"
    });
  };

  const handleDeleteEventForm = deleteIdSubmit => {
    deleteIdSubmit.preventDefault();
    const newEvents = events.filter(event => event.id !== deleteEventId);
    setEvents(newEvents);
    setDeleteEventId("");
  };

  return (
    <section className="event-management">
      <h2>Event Management</h2>
      <h3>All Events</h3>
      <ul id="events-list">
        {eventList}
      </ul>
      <AddEvent 
        state={state} 
        dispatch={dispatch} 
        handleAddEventForm={handleAddEventForm} 
      />
      <DeleteEvent 
        deleteEventId={deleteEventId} 
        setDeleteEventId={setDeleteEventId} 
        handleDeleteEventForm={handleDeleteEventForm} 
      />
    </section>
  )
}
