import { useState } from 'react';
import styles from './form.module.css';
import plusButton from '../assets/plusButton.svg';
import { Counter } from './Counter.jsx';
import { CommentsText } from './CommentsText.jsx';
import { NotCommentsText } from './NotCommentsText';

export function Form() {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const lastId = comments[comments.length - 1]?.id ?? 0;
      setComments([...comments, { id: lastId + 1, content: newCommentText, isChecked: false }]);
      setNewCommentText('');
    } catch (error) {
      alert('Erro ao criar nota');
    }
  };

  function handleNewCommentCharge(event) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity('Digite um texto válido');
  }

  const deleteComment = (commentToDelete) => {
    try {
      const commentWithoutDeleted = comments.filter((comment) => comment.id !== commentToDelete);
      setComments(commentWithoutDeleted);
    } catch (error) {
      alert('Erro ao deletar nota');
    }
  };

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="lista de tarefas"
          placeholder="Adicionar uma nova tarefa"
          value={newCommentText}
          onChange={handleNewCommentCharge}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer className={styles.footer}>
          <button type="submit" disabled={isNewCommentEmpty}>
            Criar
            {' '}
            <img src={plusButton} alt="imagem" />
          </button>
        </footer>
      </form>
      <div>
        <Counter comments={comments} />
        {
          comments.length > 0
            ? comments.map((comment, index) => (
              <CommentsText
                key={comment.id}
                id={comment.id}
                index={index}
                content={comment.content}
                isChecked={comment.isChecked}
                deleteComment={deleteComment}
              />
            ))
            : <NotCommentsText />
        }
      </div>
    </article>
  );
}
