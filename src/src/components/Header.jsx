import todo from '../assets/todo.svg';
import rocket from '../assets/rocket.svg';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div>
      <header className={styles.header}>
        <img className={styles.rocket} src={rocket} alt="rocket" />
        <img className={styles.todo} src={todo} alt="todo" />
      </header>
    </div>
  );
}
