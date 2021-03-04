import React, { Component } from 'react';
import LanguageApiService from '../../services/language-api-service';
import LanguageContext from '../../contexts/LanguageContext';
import './DashboardRoute.css';
import WordList from '../../components/WordList/WordList';
import { Link } from 'react-router-dom';
class DashboardRoute extends Component {
  static contextType = LanguageContext;

  componentDidMount() {
    this.context.clearError();
    LanguageApiService.getWords()
      .then(res => {
        this.context.setLanguage(res.language);
        this.context.setWords(res.words);
      })
      .catch(this.context.setError);
  }

  renderWords() {
    const { words = [] } = this.context;
    if (words.length === 0) {
      return <p>Looks like there's nothin' to practice :(</p>;
    }

    return words.map(word => (
      <WordList
        key={word.id}
        word={word.original}
        count={word.correct_count}
        incorrectCount={word.incorrect_count}
      />
    ));
  }

  render() {
    return (
      <section className="dashboard">
        <h2 className="language__name">
          Let's practice {this.context.language.name}!
        </h2>
        <Link to="/learn">
          <button className="start__practicing">Start practicing</button>
        </Link>
        <p className="total__correct">
          Total correct answers: {this.context.language.total_score}
        </p>
        <h3 className="words__header">Words to practice</h3>
        <ul className="word__list">{this.renderWords()}</ul>
      </section>
    );
  }
}

export default DashboardRoute;
