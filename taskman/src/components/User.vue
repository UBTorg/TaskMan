<template>
  <div class="user">
    <h3>{{ user.first }} </h3>
    <p>{{ user.email }}</p>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    task: Object,
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

.user h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>