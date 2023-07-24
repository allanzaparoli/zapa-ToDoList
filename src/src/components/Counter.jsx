import styles from './Counter.module.css';

export function Counter() {
  return (
    <header className={styles.CommentsCounter}>
      <div>
        <em className={styles.tarefaCriada}>Tarefa Criada</em>
        {' '}
        <span>0</span>
      </div>
      <div>
        <em className={styles.concluidas}>Concluídas</em>
        {' '}
        <span>0</span>
      </div>
    </header>
  );
}
