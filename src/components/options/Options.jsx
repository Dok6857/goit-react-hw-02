import styles from './Options.module.css';

export const Options = ({ updateFeedback, resetFeedback }) => {
  return (
    <div className={styles.optContainer}>
      <button
        onClick={() => {
          updateFeedback('good');
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          updateFeedback('neutral');
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          updateFeedback('bad');
        }}
      >
        Bad
      </button>
      <button onClick={resetFeedback}>Reset</button>
    </div>
  );
};
