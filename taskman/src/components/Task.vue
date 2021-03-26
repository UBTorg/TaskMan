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
