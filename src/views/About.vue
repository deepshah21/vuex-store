<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <p>{{ mapCount }}</p>
    <p>
      <button @click="mapincrement">+</button>
      <button @click="mapdecrement">-</button>
    </p>
    <p> Total lennght of Todos is : {{ doneTodosCount }}</p>
    <p>{{ doneTodos }}</p>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["mapCount"]),
    count() {
      return this.$store.state.count;
    },
    doneTodos() {
      return this.$store.getters.doneTodos;
    },
    ...mapGetters("moduleA",{
      doneTodosCount: "doneTodosCount"
    }),
    ...mapGetters("moduleA",{
      doneTodos: "doneTodos"
    })
  },
  methods: {
    ...mapActions([
      "increment",
      "mapincrement" // map `this.add()` to `this.$store.dispatch('increment')`
    ]),
    decrement() {
      this.$store.dispatch("decrement");
    },
    mapdecrement() {
      console.log("Hello World");
      this.$store.commit("mapdecrement");
    }
  }
};
</script>
