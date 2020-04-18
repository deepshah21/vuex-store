## global componenet creating and registration

## slot api

    1. default slot
for example there is a global component <BaseButton></BaseButton>
within BaseButton component 
// BaseButton
<tmeplate>
    <div>
        <button><slot></slot></button>
    </div>
</template>

// FormComponent
<template>
    <BaseButton>Save</BaseButton>
</template>

than <slot></slot> will be replace with <slot>save</slot>

    2.Named slots
named slots is used when child componenet used with multiple slots


## axios configuration is used for
    Do GET, POST, PUT, and DELETE requests
    Add authentication to each request
    Set timeouts if requests take too long
    Configure defaults for every request
    Intercept requests to create middleware
    Handle errors and cancel requests properly
    Properly serialize and deserialize requests & responses

when we directly use axios in component it will create new instance for each components.
    so in src/service/serviceName.js
    within that 

    import axios from 'axios';
    const apiClient = axios.create({
        baseURl: 'http://localhost:3000/event',
        withCredentials: false,
        headers: {
            Accept: 'application/json',
            'Content-Type':'application/json'
        }
    })

    export default{
        getEvents(){
            return apiClient.get('/events');
        },
        getEventId(id){
            return apiClient.get('/events/'+id);
        }
    }

componenet lifecycle for when we have to call axios api
    we have to create axios call from created() lifecycle hook

creating services check
npm install -g json-server
json-server --watch db.json

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

# mutation
When adding new properties to an Object, you should either:
    1.Use Vue.set(obj, 'newProp', 123), or
    2.Replace that Object with a fresh one. For example, using the object spread syntax we can write it like this:
    state.obj = { ...state.obj, newProp: 123 }

mutation must be synchronous
    this.$store.commit('increment')
To handle asynchronous operations we use actions

mutations should not be called from other vuex modules
Mutation should be called from the actions inside the current modules
# actions

We can perform asynchronous operation inseide an action.
    // dispatch with a payload
    store.dispatch('incrementAsync', {
    amount: 10
    })

    // dispatch with an object
    store.dispatch({
    type: 'incrementAsync',
    amount: 10
    })

how to dispatch action 1 module from other module's action

  dispatch('moduleName/actionToCall',payLoad,{root:true})



# context api
    context api have several 

state: {
    count: 1,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }


single state tree : The data you store in Vuex follows the same rules as the data in a Vue instance, 
mapState : 
mapGetters:
     ...mapGetters([
      'doneTodosCount',
      'anotherGetter',
      // ...
    ])
mapMutations :
    methods: {
      ...mapMutations([
        'increment', // map `this.increment()` to `this.$store.commit('increment')`
        // `mapMutations` also supports payloads:
        'incrementBy' // map `this.incrementBy(amount)` to `this.$store.commit('incrementBy', amount)`
      ]),
      ...mapMutations({
        add: 'increment' // map `this.add()` to `this.$store.commit('increment')`
      })
    }
mapActions :
  methods: {
    ...mapActions([
      'increment', // map `this.increment()` to `this.$store.dispatch('increment')`
       // `mapActions` also supports payloads:
      'incrementBy' // map `this.incrementBy(amount)` to `this.$store.dispatch('incrementBy', amount)`
    ]),
    ...mapActions({
      add: 'increment' // map `this.add()` to `this.$store.dispatch('increment')`
    })
  }

## strict code
const store = new Vuex.Store({
  // ...
  strict: true
})
In strict mode, whenever Vuex state is mutated outside of mutation handlers, an error will be thrown. This ensures that all state mutations can be explicitly tracked by debugging tools.

## form handling for strict mode

## plugins

I also want to add .asyn functionality from vue
please check it out live demo on 

.......................html file
<script src="https://unpkg.com/vue"></script>
<div id="app">
  {{ foo }}
  <comp :foo.sync="foo"></comp>
</div>

......................js file
Vue.component('comp', {
  props: ['foo'],
	template: `
    <div>
      {{ foo }}
      <button v-on:click="changeFooBar">Longer</button>
      <input type="text" v-model = "foo" v-on:change="changeFooBar">
    </div> 
  `,
  methods: {
  	changeFooBar: function () {
    	console.log(this.foo);
    	this.$emit('update:foo', this.foo + '!')
    }
  }
})

new Vue({
	el: '#app',
  data: {
    foo: 'foo',
    bar: 'bar'
  }
})

## vuex modules 

vuex module keeps vuex store more isolated and help to scale.
vuex store modules is developed within store folder

Note: action mutation and geters are always registered with global namespace.
a.k.a the root which is $store even when using the modules
so we can have multiple Actions/Mutations with same name. which can end up with naming collisions.
that's why we using vuex namespacing modules
so in moduleA.js u will get namespace : true

so the difference for namespacing is false for modules 
  computer:{
    getEventById(){
      return this.$store.getters.getEventbyId
    }
  }
  and with mapGetters
  computed: mapGetters(['getEventById])

and when namespacing is true 

  computer:{
    getEventById(){
      return this.$store.getters['events/getEventById']
    }
  }
  and with mapGetters
  computed: mapGetters(''event,['getEventById])



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
