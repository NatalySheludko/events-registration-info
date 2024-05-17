import { useState, useEffect } from "react";
import "../App/App.module.css";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import defaultEvents from "../../defaultEvents.json";
import EventList from "../EventList/EventList";
import ParticipantsList from "../ParticipantsList/ParticipantsList";
import css from "../App/App.module.css";

export default function App() {
  const [participants, setParticipants] = useState(() => {
    const savedParticipants = localStorage.getItem("saved-participants");
    if (savedParticipants !== null) {
      return JSON.parse(savedParticipants);
    }
    return [];
  });

  const [activePage, setActivePage] = useState("EventList");

  const addParticipant = (newUser) => {
    setParticipants((currParticipants) => {
      return [...currParticipants, newUser];
    });
  };

  useEffect(() => {
    localStorage.setItem("saved-participants", JSON.stringify(participants));
  }, [participants]);

  return (
    <div className={css.app}>
      {activePage === "EventList" && (
        <EventList
          defaultEvents={defaultEvents}
          onClick={() => setActivePage("Participants")}
          onBtn={() => setActivePage("Registration")}
        />
      )}
      {activePage === "Registration" && (
        <RegistrationForm
          onAdd={addParticipant}
          onBack={() => setActivePage("EventList")}
        />
      )}
      {activePage === "Participants" && (
        <ParticipantsList
          participants={participants}
          onBack={() => setActivePage("EventList")}
        />
      )}
    </div>
  );
}
