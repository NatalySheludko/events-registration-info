import { useState, useEffect } from "react";
import "../App/App.module.css";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import defaultEvents from "../../defaultEvents.json";
import EventList from "../EventlList/EventList";

export default function App() {
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem("saved-events");
    if (savedEvents !== null) {
      return JSON.parse(savedEvents);
    }
    return defaultEvents;
  });

  const addEvent = (newUser) => {
    setEvents((currEvents) => {
      return [...currEvents, newUser];
    });
  };

  useEffect(() => {
    localStorage.setItem("saved-events", JSON.stringify(events));
  }, [events]);

  return (
    <div>
      <h1>Events</h1>
      <EventList events={events} />
      <RegistrationForm onAdd={addEvent} />
    </div>
  );
}
