<template>
  <div>
    <div class="container">
      <List @toggle-add-task="toggleAddTask" title="Task Manager" :showAddTask="showAddTask" :class="[showAddTask ? 'closed' : '']"/>
      <div class="welcome" v-show="!hasTask">
        <h1>Welcome to the Task Manager</h1>
        <h3>Click the Add Task button to add a new task</h3>
      </div>
      <div :class="[showAddTask ? 'black-shadow' : '']">
        <div class=add-form v-show="showAddTask">
          <AddTask @add-task="addTask" />
        </div>
      </div>
      <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks"/>
    </div>
  </div>
</template>

<script>
import List from './components/List'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

export default {
	name: "App",
	components: {
    List,
    Tasks,
    AddTask,
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
      },
  },
};
</script>


<style>
html,body{
  height: 100%;
}
body{
  position: relative;
}
header.closed button{
  top: 57px;
  background: red;
  position: absolute;
  z-index: 111;
  right: 34%;
}
.welcome {
  text-align: center;
  padding: 20px;
}

.welcome h1 {
  font-size: 35px;
  padding-bottom: 5px;
}

.welcome h3 {
  font-size: 20px;
  font-weight: normal;
}
.add-form{
  max-width: 500px;
  background: beige;
  padding: 1px 20px;
  border-radius: 17px;
  position: sticky;
  margin: auto;
  margin-top: 40px;
}
.black-shadow{
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.5);
}
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
  background-color: #fff;
}
.container {
  /* max-width: 500px;
  margin: 30px auto; */
  overflow: auto;
  min-height: 300px;
  /* border: 1px solid steelblue; */
  padding-top: 0px;
  border-radius: 5px;
}

.header-container {
  background-color: white;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
