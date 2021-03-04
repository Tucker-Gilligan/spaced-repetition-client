import React, { Component } from 'react';
const LanguageContext = React.createContext({
  language: [],
  words: [],
  nextWord: [],
  isCorrect: false,
  error: null,
  setError: () => {},
  clearError: () => {},
  setLanguage: () => {},
  setWords: () => {},
  setNextWord: () => {},
  setIsCorrect: () => {},
});
export default LanguageContext;

export class LanguageProvider extends Component {
  state = {
    language: [],
    words: [],
    nextWord: [],
    isCorrect: false,
    error: null,
  };

  setLanguage = language => {
    this.setState({ language });
  };

  setWords = words => {
    this.setState({ words });
  };

  setNextWord = nextWord => {
    this.setState({ nextWord });
  };

  setIsCorrect = myBoolean => {
    this.setState({ isCorrect: myBoolean });
  };

  setError = error => {
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      language: this.state.language,
      words: this.state.words,
      nextWord: this.state.nextWord,
      isCorrect: this.state.isCorrect,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setLanguage: this.setLanguage,
      setWords: this.setWords,
      setNextWord: this.setNextWord,
      setIsCorrect: this.setIsCorrect,
    };
    return (
      <LanguageContext.Provider value={value}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
