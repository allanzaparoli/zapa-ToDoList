import styles from './Counter.module.css';

export function Counter({ comments }) {
  const checkedComments = comments.filter((comment) => comment.isChecked);
  const TotalCounter = comments.length;
  const FinishTasks = checkedComments.length;

  return (
    <header className={styles.CommentsCounter}>
      <div>
        <em className={styles.tarefaCriada}>Tarefa Criada</em>
        {' '}
        <span>{TotalCounter}</span>
      </div>
      <div>
        <em className={styles.concluidas}>Concluídas</em>
        {' '}
        <span>{`${FinishTasks} de ${TotalCounter}`}</span>
      </div>
    </header>
  );
}
