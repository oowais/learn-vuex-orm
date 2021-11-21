<template>
  <input v-model="form.body" />
  <button @click="addItem">Add Item</button>
  <li v-for="item in items" :key="item.$id" v-text="item.body" />
  <UserProfile />
</template>


<script>
import Item from "./classes/item";
import UserProfile from "./components/UserProfile.vue";

export default {
  name: "App",
  components: {
    UserProfile,
  },

  data() {
    return {
      form: {
        body: "",
      },
    };
  },

  computed: {
    items() {
      return Item.all();
    },
  },
  
  methods: {
    addItem() {
      Item.insert({ data: this.form });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");

#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
