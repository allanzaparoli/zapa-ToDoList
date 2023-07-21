import Header from './components/Header.jsx';
import { Form } from './components/form.jsx';
import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <main>
      <header className={styles.header}>
        <Header />
      </header>
      <article className={styles.wrapper}>
        <Form />
      </article>
    </main>
  );
}
