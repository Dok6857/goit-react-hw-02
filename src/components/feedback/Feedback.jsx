import styles from './Feedback.module.css';

export const Feedback = ({
  feedback: { good, neutral, bad },
  totalFeedback,
}) => {
  return (
    <ul className={styles.fbList}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>
        Positive:{' '}
        {isNaN(((good + neutral) / totalFeedback) * 100)
          ? 0
          : Math.round(((good + neutral) / totalFeedback) * 100)}
        %
      </li>
    </ul>
  );
};
