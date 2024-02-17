import './App.css';
import { Description } from './description/Description';
import { Feedback } from './feedback/Feedback';
import { Notification } from './notification/Notification';
import { Options } from './options/Options';
import { useState } from 'react';

export function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function updateFeedback(type) {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  }

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
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} />
      {hasPositiveValue ? <Feedback feedback={feedback} /> : <Notification />}
    </div>
  );
}
