import Clipboard from '../assets/Clipboard.png';
import styles from './NotCommentsText.module.css';

export function NotCommentsText() {
  return (
    <section className={styles.section}>
      <header className={styles.Clipboard}>
        <img src={Clipboard} alt="Clipboard" />
      </header>
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </section>
  );
}
