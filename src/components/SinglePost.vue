<template>
    <b-container>
        <b-card>
            {{post.title}}
        </b-card>
        <b-card-body>
            {{post.text}}
        </b-card-body>
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