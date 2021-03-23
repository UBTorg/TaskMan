<template>
    <div v-for="user in users">
        <h4>{{user.first}} {{user.last}} {{user.email}}</h4>
    </div>
</template>

<script>
import User from './User'

export default {
    name: 'Users',
    props: {
        users: Array,
    },
    components: {
        User
    }
}
</script>

<style scoped>

</style>
