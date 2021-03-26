<template>
  <div class="user">
    <h3>
      {{ user.email }}
      <i @click="$emit('delete-user', user.auth0_id)" class="fas fa-times"></i>
    </h3>
    <p class="bold" v-if="user.isAdmin == true">This user is an admin</p>
    <button @click="$emit('make-admin', user.auth0_id)" v-else>
      Make admin
    </button>
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    user: Object,
  },
};
</script>

<style scoped>
.fas {
  color: red;
}
.user {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: 200ms transform ease;
}
.user:hover {
  transform: translate(2px, -2px);
}
.user h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
button {
  background: #4682b4;
  color: white;
  font-weight: 500;
  padding: 5px 21px;
  font-stretch: 6px;
  border-radius: 5px;
}
.bold {
  font-weight: 700;
}
</style>