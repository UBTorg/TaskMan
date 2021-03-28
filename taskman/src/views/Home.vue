<template>
  <div>
    <div class="container">
      <!-- <a>
      <router-link v-if="userInfo.isAdmin" to="/admin">
        Admin dashboard
      </router-link>
    </a> -->
      <List
        @toggle-add-task="toggleAddTask"
        title="Task Manager"
        :showAddTask="showAddTask"
        :class="[showAddTask ? 'closed' : '']"
      />
      <div class="welcome" v-show="!hasTask">
        <h1>Welcome to the Task Manager</h1>
        <h3>Click the Add Task button to add a new task</h3>
      </div>
      <div :class="[showAddTask ? 'black-shadow' : '']">
        <div class="add-form-container" v-show="showAddTask">
          <AddTask @add-task="addTask" />
        </div>
      </div>
      <Tasks
        @toggle-reminder="toggleReminder"
        @delete-task="deleteTask"
        :tasks="tasks"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import List from "../components/List";
import Tasks from "../components/Tasks";
import AddTask from "../components/AddTask";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    List,
    Tasks,
    AddTask,
    Footer,
  },
  data() {
    return {
      tasks: [],
      showAddTask: false,
      userInfo: {},
      taskEditingId: "",
      updatedTask: [],
      hasTask: false,
    };
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      );
    },
    async getAccessToken() {
      return this.$auth.getTokenSilently();
    },
    async fetchUserInfo() {
      const accessToken = await this.getAccessToken();
      const res = await fetch("api/v1/user-info", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const data = await res.json();

      return data;
    },
    async addTask(task) {
      const accessToken = await this.$auth.getTokenSilently();
      const res = await fetch("api/v1/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(task),
      });

      const data = await res.json();

      this.tasks = [...this.tasks, data];
    },
    async deleteTask(id) {
      const accessToken = await this.getAccessToken();
      if (confirm("Are you sure you want to delete this task?")) {
        const res = await fetch(`api/v1/tasks/${id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });

        res.status === 200
          ? (this.tasks = this.tasks.filter((task) => task.id !== id))
          : alert("Error deleting task");
      }
    },
    async fetchTasks() {
      const accessToken = await this.$auth.getTokenSilently();
      const res = await fetch("api/v1/tasks", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const data = await res.json();

      return data;
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`);

      const data = await res.json();

      return data;
    },
  },

  async created() {
    this.tasks = (await this.fetchTasks()).tasks;
    console.log("works");
    this.userInfo = await this.fetchUserInfo();
  },
};
</script>

<style>
@import "../components/assets/CSS/style.css";
</style>