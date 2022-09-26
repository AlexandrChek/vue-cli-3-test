<template>
  <div class="about">
    <h1 v-on:mousemove="colorMove" v-bind:style="{color: `hsl(${x}, 100%, 50%)`}">This is an about page</h1>
    <h3>Confirm, that you are not a robot. Remove unnecessary letters, pressing them, to get the word "POSTS":</h3>  
    <transition-group name="fade">
      <p class="letters" v-for="(letter, index) in letters" :key="letter" v-on:click="remove(index)">{{letter}}</p>
    </transition-group>
    <div v-color></div>
  </div>
</template>

<script>
  export default {
    name: 'HomeView',
    data () {
      return {
        x: 0,
        letters: ['G', 'P', 'D', 'O', 'A', 'S', 'E', 'T', 'E', 'R', 'S']
      }
    },
    methods: {
      colorMove (e) {
        this.x = e.clientX
      },
      remove (index) {
        this.letters.splice(index, 1)
      }
    }
  }
</script>

<style scoped>
 .letters {
  display: inline-block;
  font-weight: bold;
  margin-right: 10px;
  cursor: pointer;
 }
 .fade-leave-active {
  transition: all 1s ease;
 }
 .fade-leave-to {
  opacity: 0.1;
  transform: translateY(70px);
 }
</style>