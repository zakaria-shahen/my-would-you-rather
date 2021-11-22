
[Demo Video](https://www.youtube.com/watch?v=xfmSkLAL__Q)


## Routers
- `/login`
-  `/`
   - `/add`
   - `/leaderboard`
   - `/questions:id`
 - `/404`

## Components 
`/login` Login Component
    - `/` Home Component
        - Filter -> is state
    - `/add` add Component
    - `/leaderboard` LeaderBoard Component 
      - Users are ordered 
    - `/questions:id` questions more info
- 404 Not Found Component

## The Store and Reducers
```js
const store = {
  users: {},
  questions: {},
  login: 'id',
}

```

## Action
1. ADD_ANSWER
2. REMOVE_ANSWER
3. ADD_QUESTION 
4. REMOVE_QUESTION 
5. GET_USERS
6. GET_QUESTIONS
7. LOGIN
8. LOGOUT
