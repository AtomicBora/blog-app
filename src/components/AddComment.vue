<template>
    <b-card>
        <form @submit.prevent="addComment">
            <label class="mb-3" for="comment">Add Comment</label>
            <b-input v-model="comment.text" id="comment" type="text" required></b-input>
            <button class="btn btn-primary mt-3">Submit</button>
        </form>
    </b-card>
</template>

<script>
export default {
    data() {
        return {
            comment: {},
        }
    },
    methods: {
        addComment(){
            this.$emit('comment', this.comment);
        }
    },
}
</script>

<style>

</style>