import { useState } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedBackOptions from './FeedBackoptions/FeedBackOptions';

export const App = () => { 
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countPositiveFeedbackPercentage = total => ((good / total) * 100).toFixed(0);

  const countTotalFeedback = () => good + neutral + bad;

  const LeaveFeedBack = e => { 
    switch (e.currentTarget.textContent.toLowerCase()) {
      case 'good':
        setGood(good + 1)
        break;
      
      case 'neutral':
        setNeutral(neutral + 1)
        break;
      
      case 'bad':
        setBad(bad + 1)
        break;

      default:
        return;
    }
  };

return (
      <>
        <Section title="Please leave feedback">
          <FeedBackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedBack={LeaveFeedBack}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage(countTotalFeedback())}
          />
        </Section>
      </>
    );
};



