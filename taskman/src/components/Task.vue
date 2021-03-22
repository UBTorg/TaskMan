<template>
    <div class="taskk" @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">
        <h3>
            {{task.text}}
            <i @click="$emit('delete-task',task.id)" class="fas fa-times"></i>
        </h3>
        <p>{{task.description}}</p>
        <p>{{task.day}}</p>
        <p>{{task.priority}}</p>
    </div>
</template>


<script>
export default {
    name: 'Task',
    props: {
        task: Object,
    },
}
</script>
<style scoped>

.fas {
  color: rgb(78, 78, 78);
}

.task {
  background: #f4f4f4;
  margin: 12px;
  padding: 10px 20px;
  cursor: pointer;
  min-height: 250px;
  border-radius: 10px;
  transition: transform 200ms ease 0s;
  
}

.task:hover {
  transform: translate(2px, -2px);
}

.task.reminder {
  border-left: 5px solid #55C6F0;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.high {
  background: red;
}

.medium {
  background: yellowgreen;
}

.low {
  background: blue;
}
</style>