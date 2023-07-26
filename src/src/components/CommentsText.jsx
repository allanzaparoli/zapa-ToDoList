import trash from '../assets/trash.svg';
import styles from './CommentsText.module.css';

export function CommentsText({
  content, id, deleteComment, isChecked, handleCheckbox,
}) {
  function handleDeleteComment() {
    deleteComment(id);
  }

  return (
    <section className={styles.CommentsText}>
      <div className={styles.checkText}>
        <input
          onChange={(e) => handleCheckbox(e, id)}
          type="checkbox"
          id="button"
          name="selecionar"
          checked={isChecked}
        />
        <p className={isChecked
          ? styles.linethrough : styles.noline}
        >
          {content}

        </p>
      </div>
      <button onClick={handleDeleteComment} title="Deletar comentário" type="button" className={styles.trash}>
        <img src={trash} alt="lixo" />
      </button>
    </section>
  );
}
