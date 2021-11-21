<template>
  <h2>User Profile</h2>
  <h3>{{ user.name }}</h3>
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
          bio: "Bio: Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aspernatur amet veniam vero atque dicta.",
          life_goal:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aspernatur amet veniam vero atque dicta.",
        },
      },
    });
  },
};
</script>
