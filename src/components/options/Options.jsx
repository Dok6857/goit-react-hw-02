import styles from './Options.module.css';

export const Options = ({
  updateFeedback,
  resetFeedback,
  hasPositiveValue,
}) => {
  return (
    <div className={styles.optContainer}>
      <button
        className={styles.btn}
        onClick={() => {
          updateFeedback('good');
        }}
      >
        <span>Good</span>{' '}
      </button>
      <button
        className={styles.btn}
        onClick={() => {
          updateFeedback('neutral');
        }}
      >
        <span>Neutral</span>
      </button>
      <button
        className={styles.btn}
        onClick={() => {
          updateFeedback('bad');
        }}
      >
        <span>Bad</span>
      </button>
      {hasPositiveValue && (
        <button className={styles.btn} onClick={resetFeedback}>
          <span>Reset</span>
        </button>
      )}
    </div>
  );
};
