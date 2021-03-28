<template>
  <div>
    <div :key="user.auth0_id" v-for="user in users">
      <User @make-admin="$emit('make-admin', user.auth0_id)" :user="user" />
    </div>
  </div>
</template>

<script>
import User from "./User";

export default {
  name: "Users",
  props: {
    users: Array,
  },
  components: {
    User,
  },
  emits: ["make-admin"],
};
</script>

