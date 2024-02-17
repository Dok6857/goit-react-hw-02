import './App.css';
import { Description } from './description/Description';
import { Feedback } from './feedback/Feedback';
import { Notification } from './notification/Notification';
import { Options } from './options/Options';
import { useState, useEffect } from 'react';

export function App() {
  const storedFeedback = window.localStorage.getItem('feedback');

  const [feedback, setFeedback] = useState(
    storedFeedback
      ? JSON.parse(storedFeedback)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        }
  );

  useEffect(() => {
    window.localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  function updateFeedback(type) {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  }

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const hasPositiveValue = Object.values(feedback).some(value => value > 0);

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        hasPositiveValue={hasPositiveValue}
      />
      {hasPositiveValue ? (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
}
