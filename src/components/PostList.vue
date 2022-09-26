<template>
  <div class="posts" v-for="post in paginatedList">
    <div class="title" @click="$router.push(`/${post.title}`)">
      <b>Title: {{post.title}}</b>
    </div>
    <div @click="$router.push(`/${post.title}`)">
      <b>Body: {{post.body}}</b>
    </div>
    <my-button @click="$router.push(`/${post.title}/store`)">Store</my-button>
  </div>
  <my-button @click="prevP" :disabled="pageNumber === 0">Previous</my-button>
  <my-button @click="nextP" :disabled="pageNumber === pageCount - 1">Next</my-button>
</template>

<script>

export default {
  name: 'PostList',
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      pageNumber: 0,
      pageSize: 5
    }
  },
  methods: {
    prevP () {
      this.pageNumber--
    },
    nextP () {
      this.pageNumber++
    }
  },
  computed: {
    pageCount () {
      let l = this.posts.length
      return Math.ceil(l/this.pageSize)
    },
    paginatedList () {
      let start = this.pageNumber * this.pageSize,
          end = start + this.pageSize
      return this.posts.slice(start, end)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.posts {
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  cursor: pointer;
}
.title {
  margin-right: 20px;
}
</style>
