<template>
    <b-container>
        <b-card v-for="post in posts" :key="post.id">
            <b-card>{{post.title}}</b-card>
        </b-card>
    </b-container>
</template>

<script>
import HTTPService from '../services/Posts.js'
export default {
    data() {
        return {
            posts: [],
        }
    },
    async created() {
        console.log("Cao");
        try {
            this.posts = await HTTPService.getAll();
            console.log('Uspesno dobavljeni postovi');
            console.log(this.posts);
        } catch (error) {
            console.log("jbg");
        }
    },
}
</script>
<style lang="">
    
</style>