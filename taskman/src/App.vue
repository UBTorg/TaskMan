<template>
  <div>
    <div class="container">
      <List @toggle-add-task="toggleAddTask" title="Task Manager" :showAddTask="showAddTask" :class="[showAddTask ? 'closed' : '']"/>
      <div class="welcome" v-show="!hasTask">
        <h1>Welcome to the Task Manager</h1>
        <h3>Click the Add Task button to add a new task</h3>
      </div>
      <div :class="[showAddTask ? 'black-shadow' : '']">
        <div class="add-form-container" v-show="showAddTask">
          <AddTask @add-task="addTask" />
        </div>
      </div>
      <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks"/>
    </div>
    <Footer />
  </div>
</template>

<script>
import List from './components/List'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'

export default {
	name: "App",
	components: {
    List,
    Tasks,
    AddTask,
    Footer
  },
  data() {
    return {
      tasks: [],
      showAddTask:false,
      taskEditingId: '',
      updatedTask: [],
      hasTask: false,
    }
  },
  methods: {
      toggleAddTask(){
        this.showAddTask= !this.showAddTask
      },
      deleteTask(id) {
        if(confirm('Are you sure you want to delete this task?')){
          this.tasks = this.tasks.filter((task) => task.id !== id) //Everything back except task with this id
        }
      },
      toggleReminder(id) {
        this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)
      },
      addTask(task){
        this.tasks = [...this.tasks,task]
        this.hasTask = true
        this.showAddTask= !this.showAddTask
      },
  },
};
</script>


<style>
  @import './components/assets/CSS/style.css';
</style>
