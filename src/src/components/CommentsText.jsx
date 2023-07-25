import trash from '../assets/trash.svg';
import check from '../assets/check.svg';
import styles from './CommentsText.module.css';

export function CommentsText({
  content,
}) {
  return (
    <section className={styles.CommentsText}>
      <div className={styles.checkText}>
        <img src={check} alt="check" />
        <p>{content}</p>
      </div>
      <div className={styles.trash}>
        <img src={trash} alt="lixo" />
      </div>
    </section>
  );
}
