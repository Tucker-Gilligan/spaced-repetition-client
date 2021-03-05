# Spaced Repetition Client!
## Links
- Live Deployment: https://spaced-repetition-tucker.vercel.app/register
- Server Repository: https://github.com/Tucker-Gilligan/spaced-repetition-server
- Client Repository: https://github.com/Tucker-Gilligan/spaced-repetition-client

## Summary

This is a language learning application using the Spaced Repetition learning technique!

## User Stories

#### Landing Page
- Users start off on a landing page, where they are provided with the options to login or register

<img src="https://user-images.githubusercontent.com/72029209/110063754-bd737380-7d39-11eb-9fd2-880f6e7e7472.png" alt="login page" width="200px">
<img src="https://user-images.githubusercontent.com/72029209/110064478-2ad3d400-7d3b-11eb-8e32-1c5f4c126af9.png" alt="registration page" width="200px">


#### Dashboard

- On login - users are directed to their dashboard which displays their language, and a list of words to learn.
- Users can see their total score
- Users can see their incorrect count and correct count for each word

<img src="https://user-images.githubusercontent.com/72029209/110063756-be0c0a00-7d39-11eb-9f78-63addc5de556.png" alt="Dashboard" width="200px" />



#### Learn Page

- Users are shown one word at a time, and provided a prompt to submit their answer for the translation
- Users can see their total score
- Users can see the number of times they have answered the current word correctly and incorrectly

<img src="https://user-images.githubusercontent.com/72029209/110063757-be0c0a00-7d39-11eb-9747-65ea4662ca7d.png" alt="Learning Route" width="200px" />


#### Feedback Page
- After posting a guess, users are directed to a feedback page
###### On the feedback page users can see
- The word they were asked to translate
- The correct translation
- Their guess
- Feedback regarding if their guess was correct or incorrect
- New total score
- New correct answer count for that word
- New incorrect answer count for that word

<img src="https://user-images.githubusercontent.com/72029209/110063761-be0c0a00-7d39-11eb-9fc4-0eeff67a6a4a.png" alt="Feedback Page" width="200px" />

## Technology Used

### Client:

- ReactJS
- react-router-dom for routing and in-app navigation
- CSS (vanilla CSS)
- Babel
- Webpack
- Vercel for deployment
- Cypress for testing

### Backend:

- Express for handling API requests
- NodeJS for interacting with the file system
- Postgrator for database migration
- Mocha, Chai, Supertest for endpoints testing
- Knex.js for interfacing with PostgreSQL database
- Heroku for database and server deployment
