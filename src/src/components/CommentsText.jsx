import trash from '../assets/trash.svg';
import styles from './CommentsText.module.css';

export function CommentsText({
  content,
}) {
  return (
    <section className={styles.CommentsText}>
      <div className={styles.checkText}>
        <input
          type="checkbox"
        />
        <p>{content}</p>
      </div>
      <button type="button" className={styles.trash}>
        <img src={trash} alt="lixo" />
      </button>
    </section>
  );
}
