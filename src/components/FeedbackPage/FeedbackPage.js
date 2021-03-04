import React, { Component } from 'react';

class FeedbackPage extends Component {
  render() {
    let {
      guess,
      answer,
      totalScore,
      previousCorrectCount,
      previousIncorrectCount,
      isCorrect,
      previousWord,
      handleNextWord,
    } = this.props;
    let newCorrect = previousCorrectCount;
    let newIncorrect = previousIncorrectCount;
    isCorrect === true ? (newCorrect += 1) : (newIncorrect += 1);
    return (
      <div className="next__word__page">
        <h2 className="next__word__header">
          {isCorrect
            ? 'You were correct! :D'
            : 'Good try, but not quite right :('}
        </h2>
        <span className="next__word__value">{previousWord}</span>
        <div className="DisplayFeedback">
          <p className="feedback">
            The correct translation{' '}
            <span className="span__span">
              for {<span className="current__word">{previousWord}</span>} was{' '}
            </span>
            <span className="correct__text">{answer}</span> and you chose{' '}
            <span
              className={
                isCorrect === true ? 'correct__text' : 'incorrect__text'
              }
            >
              {guess}!
            </span>
          </p>
          <button className="next__word__button" onClick={handleNextWord}>
            Try another word!
          </button>
        </div>

        <div className="stat__track">
          <div className="DisplayScore">
            <p className="word__stats">
              Your total score is:{' '}
              <span className="stat__target">{totalScore}</span>
            </p>
          </div>
          <p className="word__stats">
            You have answered this word correctly{' '}
            <span className="stat__target">{newCorrect}</span> times.
          </p>
          <p className="word__stats">
            You have answered this word incorrectly{' '}
            <span className="stat__target">{newIncorrect}</span> times.
          </p>
        </div>
      </div>
    );
  }
}

export default FeedbackPage;
