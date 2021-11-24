
[Demo Video](https://www.youtube.com/watch?v=xfmSkLAL__Q)

# Schema Project 
App to learn Redux and more.. 
- redux
- react-redux
- redux-thunk
- react-router-dom


## Routers
- `/login`
-  `/`
   - `/add`
   - `/leaderboard`
   - `/questions:id`
- `/404`

## Components 
- navbar
- 404 Not Found 
- Login 
- Home (Router-> LeaderBoard or Login)
  - add 
  - LeaderBoard (Users are ordered +  Filter -> is state) 
  - questions (more info)

## Option 
- Loading 
- map login by username TO by password

## The Store and Reducers
```js
const store = {
  users: {},
  questions: {},
  login: 'id',
}

```

## Action
- Users
1. LOAD_USERS
2. soon
   1. ADD_USERS
   2. REMOVE_USERS
  
  
- Question
1. LOAD_QUESTIONS
2. ADD_QUESTION 
3. REMOVE_QUESTION 
   
- Authentication
1. LOGIN
2. LOGOUT

- Share 
1. ADD_ANSWER
2. REMOVE_ANSWER
3. addAnswer()
4. removeAnswer()
5. load()
  
