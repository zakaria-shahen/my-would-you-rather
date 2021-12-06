
<!-- [Demo Video](https://www.youtube.com/watch?v=xfmSkLAL__Q) -->

# My Would You Rather (redux, react,..) 
website to vote for questions
This project is an application of what you learned in 
- redux,
- other: react-router v6, react, material ui, and more..✌️

A site to vote on questions contains the following features
- login
- add question
- answer question
- view score users 
- view votes 
- add user 
- loading view

## Routers
- `/`
   - `/add`
   - `/LeaderBoard`
   - `/questions:id`
   - `/newUser`
- `/404`

## Components 

- AppRouter 
- App 
- Home
- LeaderBoard
- Login
- NewUser
- NotFound
- Navbar
- Add
- Questions
- Question
- QuestionDetails
- LinearProgressWithLabel
- UserCard



## The Store and Reducers

```js
const store = {
  users: {},
  questions: {},
  Authentication: '',
}

```

## Action
- Users
1. LOAD_USERS
2. soon
   1. ADD_USERS or NEW_USER
  
  
- Question
1. LOAD_QUESTIONS
2. ADD_QUESTION 
3. REMOVE_QUESTION 
   
- Authentication
1. LOGIN
2. LOGOUT

<!-- - Share 
1. ADD_ANSWER
2. REMOVE_ANSWER
3. addAnswer()
4. removeAnswer()
5. load()
   -->
