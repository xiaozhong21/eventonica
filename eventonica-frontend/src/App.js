import React from "react";
import "./App.css";
import calendarImg from './images/calendar.png';
import Users from "./components/Users";
import Events from "./components/Events";
import FindEvents from "./components/FindEvents";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <img src={calendarImg} alt="Calendar Star Logo" />
        <h1>Eventonica</h1>
      </header>
      <main>
        <div className="user-and-events">
          <Users />          
          <Events />
        </div>
        <aside className="search-toolbar">
          <FindEvents />
        </aside>
      </main>     
      <Footer />     
    </div>
  );
}

export default App;