<template>
  <div class="container">
    <Header />
    <List @toggle-add-task="toggleAddTask" title="Task Tracker" :showAddTask="showAddTask"/>
    <div v-show="showAddTask">
    <AddTask @add-task="addTask" />
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
    async getAccessToken() {
      return this.$auth.getTokenSilently()
    },
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    },
    async addTask(task) {
      const accessToken = await this.$auth.getTokenSilently()
      const res = await fetch('api/v1/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(task)
      })

      const data = await res.json()

      this.tasks = [...this.tasks, data]
    },
    async deleteTask(id) {
      if (confirm('Are you sure you want to delete this task?')) {

        const res = await fetch(`api/tasks/${id}`, {
        method: 'DELETE'
      })

      res.status === 200 ? (this.tasks = 
      this.tasks.filter((task) =>
      task.id !== id)) : alert('Error deleting task')
      }
    },
    toggleReminder(id){
      this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)
    },
    async fetchTasks() {
      const accessToken = await this.$auth.getTokenSilently();
      console.warn(accessToken);
      const res = await fetch('api/v1/tasks', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        },
      })

      const data = await res.json()

      return data
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`)

      const data = await res.json()

      return data
    }
  },
  async created() {
    this.tasks = (await this.fetchTasks()).tasks
  }
}
</script>


<style>

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
  max-width: 500px;
  margin: 30px auto;
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
