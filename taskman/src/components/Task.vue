<template>
    <div class="taskk" @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">
        <h3>
            {{task.text}}
            <i @click="$emit('delete-task',task.id)"  class="fas fa-minus"></i>
        </h3>
        <p><span style="font-weight: bold;">Description: </span> {{task.description}}</p>
        <p><span style="font-weight: bold;">Time: </span>{{task.day}}</p>
        <p><span style="font-weight: bold;">Priority: </span>{{task.priority}}</p>
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
  color: rgba(0,0,0,.5);
}

.fas:hover {
  color: #55C6F0;
}

.task {
  background: #f4f4f4;
  margin: 12px;
  padding: 10px 20px;
  cursor: pointer;
  min-height: 220px;
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
  font-size: 25px;
  line-height: 1.8em;
  border-bottom: 1px solid rgba(0,0,0,.2);
  padding-bottom: 3px;
  margin-bottom: 5px;
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