import React, { Component } from 'react';

class WordList extends Component {
  render() {
    return (
      <li className="word__list__item">
        <h4 className="word__name">{this.props.word}</h4>
        <p className="word__details__item">
          correct answer count: {this.props.count}
        </p>
        <p className="word__details__item">
          incorrect answer count: {this.props.incorrectCount}
        </p>
      </li>
    );
  }
}

export default WordList;
