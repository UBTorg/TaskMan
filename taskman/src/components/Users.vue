<template>
<div>
    <div :key="user.id" v-for="user in users">
        <User @make-admin="$emit('make-admin', user.id)" @delete-user="$emit('delete-user', user.id)" :user="user" />
    </div>
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
    },
    emits: ['delete-user', 'make-admin']
}
</script>

<style scoped>

</style>
