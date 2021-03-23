<template>
<div>
  <h2>Admin dashboard</h2>
  <Users @make-admin="makeAdmin" @delete-user="deleteUser" :users="users" />
</div>
</template>

<script>
import Users from '../components/Users'

export default {
    name: 'AdminDashboard',
    components: {Users},
    data() {
      return {
        users: []
      }
    },
    methods: {
      deleteUser(id) {
        if (confirm('Are you sure you want to delete this user?')){

        this.users = this.users.filter((user) => user.id !== id)
        }
      },
      makeAdmin(id) {
        if (confirm('Are you sure you want to make this user admin?')){
          this.users = this.users.map((user) => user.id === id ? {...user, isAdmin: !user.isAdmin} : user)
        }
      },
    },
    created() {
      this.users = [
        {
          id: 1,
          name: 'Filan Fisteku',
          email: 'filan.fisteku1@gmail.com',
          isAdmin: false,
        },
         {
          id: 2,
          name: 'Filan Fisteku 2',
          email: 'filan.fisteku2@gmail.com',
           isAdmin: true
        },
         {
          id: 3,
          name: 'Filan Fisteku 3',
          email: 'filan.fisteku3@gmail.com',
          isAdmin: false
        }
      ]
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 800px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
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