<template>
    <b-container>
        <b-card class="d-inline-flex">
            {{post.title}}
        </b-card>
        <b-card>
            {{post.text}}
        </b-card>
        <h4>Comments</h4>
        <ul v-for="comment in post.comments" :key="comment.id" style="list-style-type:none;"><li>{{comment.text}}</li></ul>
        <add-comment @comment="addComment"></add-comment>
    </b-container>
</template>
<script>
import HTTPService from '../services/Posts.js'
import AddComment from '../components/AddComment.vue';
export default {
    components: {
        AddComment
    },
    data() {
        return {
            post: [],
        }
    },
    async created() {
        try {
            this.post = await HTTPService.getByID(this.$route.params.id);
            console.log('Uspesno dobavljen post')
            console.log(this.post);
        } catch (error) {
            console.log('neuspesno dobavljen post po id-u');
            console.log(error);
        }
    },
    methods: {
        async addComment(commentText){
           try {
                await HTTPService.addComment(commentText, this.$route.params.id);
           } catch (error) {
               console.log(error);
           }
        }
    },
}
</script>
<style>
    
</style>