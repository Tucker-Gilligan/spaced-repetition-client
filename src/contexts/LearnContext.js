import React, { Component } from 'react';

const initialState = {
  totalScore: 0,
  wordCorrectCount: 0,
  wordIncorrectCount: 0,
  nextWord: null,
  guess: null,
  previousWord: null,
  isCorrect: null,
  answer: null,
  error: null,
  feedback: false,
};

const LearnContext = React.createContext({
  ...initialState,
  setTotalScore: () => {},
  setWordCorrectCount: () => {},
  setWordIncorrectCount: () => {},
  setNextWord: () => {},
  setGuess: () => {},
  setPreviousWord: () => {},
  setIsCorrect: () => {},
  setAnswer: () => {},
  setFeedback: () => {},
  setError: () => {},
  clearError: () => {},
  resetContext: () => {},
});
export default LearnContext;

export class LearnProvider extends Component {
  state = {
    ...initialState,
  };

  setTotalScore = totalScore => {
    this.setState({ totalScore });
  };
  setWordCorrectCount = wordCorrectCount => {
    this.setState({ wordCorrectCount });
  };
  setWordIncorrectCount = wordIncorrectCount => {
    this.setState({ wordIncorrectCount });
  };
  setNextWord = nextWord => {
    this.setState({ nextWord });
  };
  setGuess = guess => {
    this.setState({ guess });
  };
  setPreviousWord = previousWord => {
    this.setState({ previousWord });
  };
  setIsCorrect = isCorrect => {
    this.setState({ isCorrect });
  };
  setAnswer = answer => {
    this.setState({ answer });
  };
  setFeedback = myBoolean => {
    this.setState({ myBoolean });
  };
  setError = () => {
    this.setState({});
  };

  setError = error => {
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  resetContext = () => {
    this.setState({ ...initialState });
  };
  render() {
    const value = {
      totalScore: this.state.totalScore,
      wordCorrectCount: this.state.wordCorrectCount,
      wordIncorrectCount: this.state.wordIncorrectCount,
      nextWord: this.state.nextWord,
      guess: this.state.guess,
      previousWord: this.state.previousWord,
      isCorrect: this.state.isCorrect,
      answer: this.state.answer,
      error: this.state.error,
      feedback: this.state.feedback,
      setTotalScore: this.setTotalScore,
      setWordCorrectCount: this.setWordCorrectCount,
      setWordIncorrectCount: this.setWordIncorrectCount,
      setNextWord: this.setNextWord,
      setGuess: this.setGuess,
      setPreviousWord: this.setPreviousWord,
      setIsCorrect: this.setIsCorrect,
      setAnswer: this.setAnswer,
      setFeedback: this.setFeedback,
      setError: this.setError,
      clearError: this.clearError,
      resetContext: this.resetContext,
    };
    return (
      <LearnContext.Provider value={value}>
        {this.props.children}
      </LearnContext.Provider>
    );
  }
}
