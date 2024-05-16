import { useState } from "react";
import "../App/App.module.css";
import RegistrationForm from "../RegistrationForm/RegistrationForm";


export default function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (newUser) => {
    setEvents((currEvents) => {
      return [...currEvents, newUser];
    });
  };

  

  return (
    <div>
      <RegistrationForm onAdd={addEvent} />
    </div>
  );
}
