import todo from '../assets/todo.svg';
import rocket from '../assets/rocket.svg';
import styles from './form.module.css';

export default function Header() {
  return (
    <div>
      <header className={styles.header}>
        <img src={rocket} alt="rocket" />
        <img src={todo} alt="todo" />
      </header>
    </div>
  );
}
