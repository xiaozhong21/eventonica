import React, { useState, useReducer } from 'react';

const initialState = {
  id: "",
  name: "",
  date: "",
  description: "",
  category: ""
};

const reducer = (state, action) => {
  console.log(action, "this is the action");
  switch (action.type) {
    case "editId":
      return {...state, id: action.payload};     
    case "editName":
      console.log("Logged if the editName action is being dispatched")
      return { ...state, name: action.payload };
    case "editDate":
      return {...state, date: action.payload};
    case "editDescription":
      return { ...state, description: action.payload };
    case "editCategory":
      return { ...state, category: action.payload };
    default:
      return state;
  }
};

export default function Events() {
  const sampleEvents = [
    {
      id: 1,
      name: "Birthday",
      date: "2021-09-01",
      description: "A birthday party for my best friend",
      category: "Celebration"
    },
    {
      id: 2,
      name: "Graduation",
      date: "2021-08-01",
      description: "The class of 2021 graduates from East High",
      category: "Education"
    },
    {
      id: 3,
      name: "JS Study Session",
      date: "2021-10-01",
      description: "A chance to practice Javascript interview questions",
      category: "Education"
    }
  ];

  //State for event list
  const [events, setEvents] = useState(sampleEvents);
  //States for adding new event
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
      type: "editId",
      payload: ""
    });
    dispatch({
      type: "editName",
      payload: ""
    });
    dispatch({
      type: "editDate",
      payload: ""
    });
    dispatch({
      type: "editDescription",
      payload: ""
    });
    dispatch({
      type: "editCategory",
      payload: ""
    })
  }

  return (
    <section className="event-management">
      <h2>Event Management</h2>
      <div>
        <h3>All Events</h3>
        <ul id="events-list">
          {eventList}
        </ul>

        <h3>Add Event</h3>
        <form id="add-event" action="#" onSubmit={handleAddEventForm}>
          <fieldset>
          <label>Event ID&nbsp;
              <input
                type="number"
                id="add-event-id"
                min="0"
                value={state.id}
                onChange={e => 
                dispatch({
                  type: "editId",
                  payload: e.target.value
                })}
              />
            </label><br/><br/>
            <label>Name&nbsp;
              <input
                type="text"
                id="add-event-name"
                value={state.name}
                onChange={e => 
                  dispatch({
                    type: "editName",
                    payload: e.target.value
                  })}                
              />
            </label><br/><br/>
            <label>Date&nbsp;
              <input
                type="date"
                id="add-event-date"
                value={state.date}
                onChange={e => 
                  dispatch({
                    type: "editDate",
                    payload: e.target.value
                  })} 
              />
            </label><br/><br/>
            <label>Description&nbsp;
              <input
                type="text"
                id="add-event-description"
                value={state.description}
                onChange={e => 
                  dispatch({
                    type: "editDescription",
                    payload: e.target.value
                  })} 
              />
            </label><br/><br/>
            <label>Category&nbsp;
              <input
                type="text"
                id="add-event-category"
                value={state.category}
                onChange={e => 
                  dispatch({
                    type: "editCategory",
                    payload: e.target.value
                  })} 
              />
            </label><br/><br/>
          </fieldset>
          {/* Add more form fields here */}
          <input type="submit" />
        </form>
      </div>

      <div>
        <h3>Delete Event</h3>
        <form id="delete-event" action="#">
          <fieldset>
            <label>Event ID&nbsp;
              <input type="number" min="1" id="delete-event-id" />
            </label>
          </fieldset>
          <input type="submit" />
        </form>
      </div>
    </section>
  )
}
