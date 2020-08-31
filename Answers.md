1. What problem does the context API help solve?
   Helps avoid prop drilling. Since there is a central context, the components that need it will only subscribe to the "context" they care about.
2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   The store is basically the app level state. It hold all the state that your app has. Every action (usually triggered by user input/event but not necessarily) needs to go (in order) through redux and then calls a reducer based of whatever action was taken. Reducers are pure functions though, which means that if the reducer gets called twice with the exact same state and the exact same action, the result should be the same.
3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
   State is considered application level if more than one components needs access to that data. Component level state is usually only for state that one component is interested in (for example text field state)
4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   Redux Thunk allows us to make async operations in our action creators. (Gives us the ability to make api calls and call other actions)
5. What is your favorite state management system you've learned and this sprint? Please explain why!
   The context api is extremely useful, but redux (right now) is king.
