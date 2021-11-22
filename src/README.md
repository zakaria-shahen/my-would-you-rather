
[Demo Video](https://www.youtube.com/watch?v=xfmSkLAL__Q)

# Schema Project 
App to learn Redux and more.. 


## Routers
- `/login`
-  `/`
   - `/add`
   - `/leaderboard`
   - `/questions:id`
- `/404`

## Components 
- layout
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
- Answer
1. ADD_ANSWER
2. REMOVE_ANSWER
   
- Question
1. ADD_QUESTION 
2. REMOVE_QUESTION 

- Starter 
5. GET_USERS
6. GET_QUESTIONS

- Authentication
7. LOGIN
8. LOGOUT
