import css from "../ParticipantCard/ParticipantCard.module.css";

export default function ParticipantCard({ participants: { username, email } }) {
  return (
    <div className={css.participants}>
      <p className={css.name}>{username}</p>
      <p>{email}</p>
    </div>
  );
}
