import css from "../ParticipantsList/ParticipantsList.module.css";
import ParticipantCard from "../ParticipantCard/ParticipantCard";

export default function ParticipantsList({ participants, onBack }) {
  return (
		<div className={css.participants}>
			<button className={css.backBtn} onClick={onBack}>Back</button>
      <h3>&quot;Awesome Event&quot; participants</h3>
      <ul className={css.menuList}>
        {participants.map((participant) => (
          <li className={css.item} key={participant.id}>
            <ParticipantCard participants={participant} />
          </li>
        ))}
      </ul>
    </div>
  );
}
