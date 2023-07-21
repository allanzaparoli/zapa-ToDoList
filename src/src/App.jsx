import Header from './components/Header.jsx';
import { Form } from './components/form.jsx';

import './global.css';

export function App() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <article>
        <Form />
      </article>
    </main>
  );
}
