Vuex is state management library.
It serves centralizeddata store for all component in an application.

vue instance and vuex instance is partially common
vuex                vue
state               data
getters             computed
actions             methods      (which fetch the data from the api)
mutation wich persist data into state 


1. Mutation : will be responsible for update the state
2. getters : will have 2 params  1. state and 2. other getters.
3. actions : will have 2 params as well 
    1. context api 
    2. payload 

we can directly called actions and getters from the lifecycle hooks and computed properties of the 
components

vue component will dispatch the action
action will commit the mutation
mutate will update the state 
and updated state will rerender the components


single state tree :
mapState : 
mapGetters:
mapActions :




# vuex-store

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
