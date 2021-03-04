import React, { Component } from 'react';
import LanguageApiService from '../../services/language-api-service';
import LearnContext from '../../contexts/LearnContext';
import NextWordPage from '../../components/NextWordPage/NextWordPage';
import './LearningRoute.css';
import FeedbackPage from '../../components/FeedbackPage/FeedbackPage';
class LearningRoute extends Component {
  static contextType = LearnContext;
  state = {
    userResponse: '',
    feedback: false,
    previousIncorrectCount: 0,
    previousCorrectCount: 0,
  };
  // constructor(props) {
  //   super(props);
  //   this.handleSubmitAnswer = this.handleSubmitAnswer.bind(this);
  // }

  componentDidMount() {
    this.context.clearError();
    LanguageApiService.getNextWord()
      .then(res => {
        this.context.setNextWord(res.nextWord);
        this.context.setTotalScore(res.totalScore);
        this.context.setWordCorrectCount(res.wordCorrectCount);
        this.context.setWordIncorrectCount(res.wordIncorrectCount);
      })
      .catch(this.context.setError);
  }

  handleChange = evt => {
    evt.preventDefault();
    let userInput = evt.target.value;
    this.setState({ userResponse: userInput });
  };

  handleSubmitAnswer = evt => {
    evt.preventDefault();
    const guess = { guess: this.state.userResponse };
    LanguageApiService.getNextWord()
      .then(res => {
        this.context.setPreviousWord(res.nextWord);
        this.setState({ previousCorrectCount: res.wordCorrectCount });
        this.setState({ previousIncorrectCount: res.wordIncorrectCount });
      })
      .catch(this.context.setError)
      .then(
        LanguageApiService.postGuess(guess)
          .then(res => {
            this.context.clearError();
            this.setState({ feedback: true });
            this.context.setIsCorrect(res.isCorrect);
            this.context.setNextWord(res.nextWord);
            this.context.setTotalScore(res.totalScore);
            this.context.setWordCorrectCount(res.wordCorrectCount);
            this.context.setWordIncorrectCount(res.wordIncorrectCount);
            this.context.setAnswer(res.answer);
            this.context.setGuess(this.state.userResponse);
          })
          .catch(this.context.errror)
      );
  };

  handleNextWord = evt => {
    evt.preventDefault();
    this.setState({ feedback: false });
    this.setState({ userResponse: '' });
  };

  renderNextWord() {
    if (this.state.feedback === true) {
      return (
        <FeedbackPage
          guess={this.context.guess}
          answer={this.context.answer}
          totalScore={this.context.totalScore}
          previousCorrectCount={this.state.previousCorrectCount}
          previousIncorrectCount={this.state.previousIncorrectCount}
          isCorrect={this.context.isCorrect}
          previousWord={this.context.previousWord}
          handleNextWord={this.handleNextWord}
        />
      );
    } else {
      return (
        <NextWordPage
          previousWord={this.context.previousWord}
          nextWord={this.context.nextWord}
          userResponse={this.state.userResponse}
          totalScore={this.context.totalScore}
          wordCorrectCount={this.context.wordCorrectCount}
          wordIncorrectCount={this.context.wordIncorrectCount}
          handleSubmitAnswer={this.handleSubmitAnswer}
          handleChange={this.handleChange}
        />
      );
    }
  }
  render() {
    return (
      <section className="learning__page">{this.renderNextWord()}</section>
    );
  }
}

export default LearningRoute;
