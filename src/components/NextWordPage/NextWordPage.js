import React, { Component } from 'react';
import LanguageApiService from '../../services/language-api-service';

class NextWordPage extends Component {
  render() {
    let {
      nextWord,
      totalScore,
      userResponse,
      wordCorrectCount,
      wordIncorrectCount,
      handleSubmitAnswer,
      handleChange,
    } = this.props;
    return (
      <div className="next__word__page">
        <h2 className="next__word__header">Translate the word:</h2>
        <span className="next__word__value">{nextWord}</span>
        <form className="quiz__form" onSubmit={handleSubmitAnswer}>
          <label
            htmlFor="learn-guess-input"
            className="learn__guess__input__label"
          >
            What's the translation for this word?
          </label>
          <input
            name="guess"
            id="learn-guess-input"
            className="learn-guess-input"
            type="text"
            placeholder="Translation"
            value={userResponse}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit__answer">
            Submit your answer
          </button>
        </form>
        <div className="stat__track">
          <div className="DisplayScore">
            <p className="word__stats">
              Your total score is:{' '}
              <span className="stat__target">{totalScore}</span>
            </p>
          </div>
          <p className="word__stats">
            You have answered this word correctly{' '}
            <span className="stat__target">{wordCorrectCount}</span> times.
          </p>
          <p className="word__stats">
            You have answered this word incorrectly{' '}
            <span className="stat__target">{wordIncorrectCount}</span> times.
          </p>
        </div>
      </div>
    );
  }
}

export default NextWordPage;
