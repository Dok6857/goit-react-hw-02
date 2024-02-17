import styles from './Feedback.module.css';

export const Feedback = ({ feedback: { good, neutral, bad } }) => {
  const totalFeedback = good + neutral + bad;

  return (
    <ul className={styles.fbList}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {good + neutral + bad}</li>
      <li>
        Positive:{' '}
        {isNaN((good * 100) / totalFeedback)
          ? 0
          : Math.round((good * 100) / totalFeedback)}
        %
      </li>
    </ul>
  );
};
