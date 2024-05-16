import css from "../EventsCard/EventsCard.module.css";

export default function Contact( {events: { title, description, date, organizer }}) {
  return (
    <div className={css.events}>
			<h3>{ title}</h3>
			<p>{ description}</p>
			<p>{ date}</p>
			<p>{organizer}</p>
			<button>Register</button>
			<button>View</button>
    </div>
  );
}
