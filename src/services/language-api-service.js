import config from '../config';
import TokenService from '../services/token-service';
const languageUrl = `${config.API_ENDPOINT}/language`;

const LanguageApiService = {
  getWords() {
    return fetch(`${languageUrl}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    }).then(res => {
      return !res.ok ? res.json().then(e => Promise.reject(e)) : res.json();
    });
  },
  getNextWord() {
    return fetch(`${languageUrl}/head`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    }).then(res => {
      return !res.ok ? res.json().then(e => Promise.reject(e)) : res.json();
    });
  },
  postGuess(guess) {
    return fetch(`${languageUrl}/guess`, {
      method: 'POST',
      body: JSON.stringify(guess),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    }).then(res => {
      return !res.ok ? res.json().then(e => Promise.reject(e)) : res.json();
    });
  },
};

export default LanguageApiService;
