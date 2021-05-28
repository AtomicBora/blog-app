<template>
    <b-container>
        <b-card class="d-inline-flex">
            {{post.title}}
        </b-card>
        <b-card>
            {{post.text}}
        </b-card>
    </b-container>
</template>
<script>
import HTTPService from '../services/Posts.js'
export default {
    data() {
        return {
            post: [],
        }
    },
    async created() {
        try {
            this.post = await HTTPService.getByID(this.$route.params.id);
            console.log('Uspesno dobavljen post')
        } catch (error) {
            console.log('neuspesno dobavljen post po id-u');
            console.log(error);
        }
    },
}
</script>
<style>
    
</style>