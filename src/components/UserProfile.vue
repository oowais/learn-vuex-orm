<template>
  <h1>User Profile</h1>
  <h2>{{ user.name }}</h2>
  <p>{{ user.email }}</p>
  <p>{{ user.profile.bio }}</p>
  <p>Goal: {{ profile.life_goal }}</p>
</template>

<script>
"use strict";
import User from "../classes/User";
import Profile from "../classes/Profile";

export default {
  name: "UserProfile",
  computed: {
    user() {
      return User.query().with("profile").find(324);
    },
    profile() {
      return Profile.query().with("user").find(123);
    },
  },
  beforeMount() {
    User.insert({
      data: {
        id: 324,
        name: "Owais",
        email: "name@email.com",
        profile: {
          id: 123,
          bio: "Dev",
          life_goal: "Enjoy",
        },
      },
    });
  },
};
</script>