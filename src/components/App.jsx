import React, { Component } from 'react';

import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

import css from './App.module.css';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  render() {
    let good = this.state.good;
    let neutral = this.state.neutral;
    let bad = this.state.bad;
    let total = 0;

    const handleClick = e => {
      const key = e.target.value;
      this.setState(prevState => ({ [key]: prevState[key] + 1 }));
    };

    const countTotalFeedback = () => {
      total = good + neutral + bad;
      return total;
    };

    const countPositiveFeedbackPercentage = () => {
      return total === 0 ? 0 : Math.round((good * 100) / total);
    };

    return (
      <>
        <div className={css.mainBox}>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={handleClick}
            />
          </Section>
          <Section title="Statistics">
            {countTotalFeedback() ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </div>
      </>
    );
  }
}

export default App;
