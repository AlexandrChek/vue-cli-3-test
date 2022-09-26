<template>
  <div>
    <button v-focus @click="showDialog">Create post</button>
    <my-dialog v-model:show="dialogVisible">
      <div>
        <h4>Add post</h4>
        <form>
          <input type="text" class="input" v-model="title" placeholder="Title" v-focus>
          <input type="text" class="input" v-model="body" placeholder="Body">
          <my-button v-on:click.prevent="sendData">Submit</my-button>
        </form>
      </div>
    </my-dialog>
  </div>
</template>

<script>
export default {
  name: 'PostForm',
  data () {
    return {
      title: '',
      body: '',
      dialogVisible: false
    }
  },
  methods: {
    sendData () {
      this.$emit('userSendPost', this.title, this.body)
      this.title = ''
      this.body = ''
      this.dialogVisible = false
    },
    showDialog () {
      this.dialogVisible = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
