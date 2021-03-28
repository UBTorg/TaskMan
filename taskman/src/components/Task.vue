<template>
  <div class="task" @dblclick="$emit('toggle-reminder', task._id)">
    <h3>
      {{ task.text }}
      <i @click="$emit('delete-task', task._id)" class="fas fa-minus"></i>
    </h3>
    <p>
      <span style="font-weight: bold">Description: </span>
      {{ task.description }}
    </p>
    <p><span style="font-weight: bold">Time: </span>{{ task.day }}</p>
    <p><span style="font-weight: bold">Priority: </span>{{ task.priority }}</p>
  </div>
</template>
<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
};
</script>



