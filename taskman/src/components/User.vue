<template>

  <div class="user">
     <h3>
      {{ user.name }}
      <i @click="$emit('delete-user', user.id)" class="fas fa-times"></i>
    </h3>
    <p>{{ user.email }}</p>
    <p v-if="user.isAdmin == true">
        This user is an admin
    </p>
    <button @click="makeAdmin" v-else>Make admin</button>
  </div>

   <!-- <div :class="[user.isAdmin ? 'isAdmin' : '']">
     <h3>
      {{ user.name }}
      <i @click="$emit('delete-user', user.id)" class="fas fa-times"></i>
    </h3>
    <p>{{ user.email }}</p>
  </div> -->
</template>

<script>
export default {
  name: 'User',
  props: {
    user: Object,
  },
}
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
}
.user.reminder {
  border-left: 5px solid green;
}
.user h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>