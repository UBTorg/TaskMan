<template>
    <header>
        <h1>{{ title }}</h1>
        <Button @btn-click="$emit('toggle-add-task')" 
        :text="showAddTask ? 'Close' : 'Add Task'" 
        :color="showAddTask ? 'transparent':'#55C6F0'"/>
    </header>
</template>

<script>
import Button from './Button'
    export default {
        name: 'List',
        props: {
            title: String,
            showAddTask: Boolean,
        },
        components:{
            Button,
        }
    }
    
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        background-color: white;
        padding: 10px 40px;
        box-shadow: 1px 1px 10px rgba(0,0,0,.1);
    }
</style>
