<template>
    <div class="task-container">
        <div class="card" :key="task.id" v-for="task in tasks">
            <Task @toggle-reminder="$emit('toggle-reminder', task.id)" 
            @delete-task="$emit('delete-task', task.id)" :task="task"/>
        </div>
    </div>
</template>

<script>
import Task from './Task'
    export default {
        name: 'Tasks',
        props: {
            tasks: Array,
        },
        components: {
            Task
        },
        emits: ['delete-task', 'toggle-reminder']
    }
</script>

<style scoped>
.task-container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}
.card {
  flex: 0 0 33%;
  cursor: pointer;
  min-height: 250px;
}

@media only screen and (min-width: 1500px) {
    .card {
        flex: 0 0 25%;
    }
}
</style>