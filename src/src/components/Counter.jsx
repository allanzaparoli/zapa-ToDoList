import styles from './Counter.module.css';

export function Counter({ comments }) {
  const checkedComments = comments.filter((comment) => comment.isChecked);

  return (
    <header className={styles.CommentsCounter}>
      <div>
        <em className={styles.tarefaCriada}>Tarefa Criada</em>
        {' '}
        <span>{comments.length}</span>
      </div>
      <div>
        <em className={styles.concluidas}>Concluídas</em>
        {' '}
        <span>{checkedComments.length}</span>
      </div>
    </header>
  );
}
