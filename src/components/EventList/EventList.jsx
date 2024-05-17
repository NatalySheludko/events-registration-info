import css from "../EventList/EventList.module.css";
import EventsCard from "../EventsCard/EventsCard";

export default function EventList({ defaultEvents, onClick, onBtn }) {
	return (
    <div>
      <h1 className={css.title}>Events</h1>
      <ul className={css.menuList}>
        {defaultEvents.map((defaultEvent) => (
          <li className={css.item} key={defaultEvent.id}>
            <EventsCard
              defaultEvents={defaultEvent}
              onClick={onClick}
              onBtn={onBtn}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
