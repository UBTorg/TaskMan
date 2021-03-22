<template>
  <!-- <Header /> -->
  
  <div class="container">
    <List @toggle-add-task="toggleAddTask" title="Task Tracker" :showAddTask="showAddTask" :class="[showAddTask ? 'closed' : '']"/>
    <div :class="[showAddTask ? 'black-shadow' : '']">
       <div class=add-form v-show="showAddTask">
        <AddTask @add-task="addTask" />
      </div>
    </div>
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks"/>
  
  </div>
</template>

<script>
import Header from './components/Header'
import List from './components/List'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

export default {
	name: "App",
	components: {
    Header,
    List,
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
      showAddTask:false,
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
      },
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: 'Doctors Appointment',
        day: 'March 1st at 2:30pm',
        reminder: true,

      },
      {
        id: 2,
        text: 'Meeting at School',
        day: 'March 3rd at 1:30pm',
        reminder: true,
      },
      {
        id: 3,
        text: 'Food Shopping',
        day: 'March 3rd at 11:30am',
        reminder: false,
      }
    ]
  }
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
  background-color: #F7F8FA;
}
.container {
  /* max-width: 500px;
  margin: 30px auto; */
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
  background-color: #fff;
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
