<template>
    <div>Post <b>{{$route.params.id}}</b> has already been moderated.</div>
    <div>Likes: {{$store.state.likes}}</div>
    <my-button @click="$store.commit('incrementLikes')">Like</my-button>
    <my-button @click="$store.dispatch('increment')">Like2</my-button>
    <div> 2-Likes: {{$store.getters.doubleLikes}}</div>
    <br>
    <div> Likes by module: {{$store.state.post.likesMod}}</div>
    <my-button @click="$store.commit('post/incrementLikesMod')">Like by module</my-button>
    <div> 2-Likes: {{$store.getters['post/doubleLikesMod']}}</div>
</template>

<script>
    export default {
        name: 'PostItemStore'
    }
</script>