import styles from './form.module.css';
import plusButton from '../assets/plusButton.svg';
import { Counter } from './Counter';

export function Form() {
  return (
    <article>
      <form className={styles.form}>
        <input
          type="text"
          name="lista de tarefas"
          placeholder="Adicionar uma nova tarefa"
          required
        />
        <footer className={styles.footer}>
          <button type="submit">
            Criar
            {' '}
            <img src={plusButton} alt="imagem" />
          </button>
        </footer>
      </form>
      <div>
        <Counter />
      </div>
    </article>
  );
}
