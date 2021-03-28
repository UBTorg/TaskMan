<template>
  <div class="admin">
    <h2>Admin dashboard</h2>
    <!-- <button class="btn" @click="logout">Log out</button> -->
    <Users @make-admin="makeAdmin" :users="users" />
  </div>
</template>

<script>
import Users from "../components/Users";

export default {
  name: "AdminDashboard",
  components: { Users },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async fetchUsers() {
      const accessToken = await this.$auth.getTokenSilently();
      const res = await fetch("api/v1/users", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const data = await res.json();

      return data;
    },
    async makeAdmin(id) {
      if (confirm("Are you sure you want to make this user admin?")) {
        const accessToken = await this.$auth.getTokenSilently();
        const res = await fetch(`api/v1/users/${id}/make-admin`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        this.users = (await this.fetchUsers()).users;
      }
    },
    // logout() {
    //   console.log("logging out");
    //   this.$auth.logout({
    //     returnTo: window.location.origin,
    //   });
    // },
  },
  async created() {
    // this.users = [
    //   {
    //     id: 1,
    //     name: "Filan Fisteku",
    //     email: "filan.fisteku1@gmail.com",
    //     isAdmin: false,
    //   },
    //   {
    //     id: 2,
    //     name: "Filan Fisteku 2",
    //     email: "filan.fisteku2@gmail.com",
    //     isAdmin: true,
    //   },
    //   {
    //     id: 3,
    //     name: "Filan Fisteku 3",
    //     email: "filan.fisteku3@gmail.com",
    //     isAdmin: false,
    //   },
    // ];
    this.users = (await this.fetchUsers()).users;
  },
};
</script>

<style>
@import "../components/assets/CSS/style.css";
</style>