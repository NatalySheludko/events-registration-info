import css from "../EventsCard/EventsCard.module.css";

export default function Contact({
  defaultEvents: { title, description, date, organizer },
  onClick,
  onBtn,
}) {
  return (
    <div className={css.events}>
      <div className={css.description}>
        <h3 className={css.title}>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={css.info}>
        <p>{new Date(date).toLocaleDateString()}</p>
        <p>{organizer}</p>
      </div>
      <div className={css.links}>
        <a href="#" onClick={onBtn} className={css.linkButton}>
          Register
        </a>
        <a href="#" onClick={onClick} className={css.linkButton}>
          View
        </a>
      </div>
    </div>
  );
}
