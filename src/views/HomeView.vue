<template>
  <div class="home">
    <PostForm v-on:userSendPost="createPost"></PostForm>
    <PostList v-bind:posts="posts"></PostList>
  </div>
</template>

<script>
// @ is an alias to /src
import { getDatabase, ref, set, onValue } from "firebase/database"
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue';

export default {
  name: 'HomeView',
  components: {
    PostForm,
    PostList
  },
  data () {
    return {
      posts: []
    }
  },
  methods: {
    createPost (title, body) {
      const db = getDatabase()
      let id = this.posts.length
      set(ref(db, 'posts/' + title), {title, body, id})
    }
  },
  mounted() {
    const db = getDatabase()
    const postsRes = ref(db, 'posts/')
    onValue (postsRes, (snapshot) => {
      let postsObj = snapshot.val()
      let postsArr = Object.values(postsObj)
      this.posts = postsArr.sort((a, b) => {
        return b.id - a.id
      })
    })
  }
}
</script>
