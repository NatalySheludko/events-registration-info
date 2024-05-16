import css from "../EventlList/EventList.module.css";
import EventsCard from "../EventsCard/EventsCard";

export default function EventList({ events }) {
  return (
    <ul className={css.menuList}>
      {events.map((event) => (
        <li className={css.item} key={event.id}>
          <EventsCard events={event} />
        </li>
      ))}
    </ul>
  );
}
