<template>
  <form @submit="onSubmit" class="add-form">
        <div class="form-control">
            <label>Title<span style="color: red">*</span></label>
            <input type="text" v-model="text" name="text"
            placeholder="Add Task" />
        </div>
        <div class="form-control">
            <label>Description<span style="color: red">*</span></label>
            <input type="text" v-model="description" name="description"
            placeholder="Add Description" />
        </div>
        <div class="form-control">
            <label>Time<span style="color: red">*</span></label>
            <input type="text" v-model="day" name="day"
            placeholder="Add Day &amp Time" />
        </div>
        <div class="form-control">
            <label>Priority</label>
            <select v-model="priority" name="priority" id="priority">
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="Low">Low</option>
                <option value="none">No Priority</option>
            </select>
        </div>
        <div class="form-control">
            <label>Set Reminder</label>
            <input class="check" type="checkbox" v-model="reminder" name="reminder"/>
        </div>
        <input type="submit" value="Save Task" class="btn btn-block">
    </form>
</template>
<script >
export default {
    name: 'AddTask',
    data(){
        return{
            text:'',
            description: '',
            day: '',
            reminder: false,
            priority: 'No Priority',
        }
    },
      methods: {
    onSubmit(e) {
      e.preventDefault()
      if (!this.text || !this.description  || !this.day) {
        alert('Please fill text, description and time form')
        return
      }
      const newTask = {
        id: Math.floor(Math.random() * 100000),
        text: this.text,
        description: this.description,
        day: this.day,
        priority: this.priority,
        reminder: this.reminder,
      }
      this.$emit('add-task', newTask)
      this.text = ''
      this.description = ''
      this.day = ''
      this.reminder = false
      this.priority = 'No Priority'
    },
  },
}
</script>
