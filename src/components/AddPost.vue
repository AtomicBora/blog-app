<template>
  <b-container>
    <b-form ref="AddPost" @submit.prevent="createPost">
      <label for="PostTitle">Enter Title</label>
      <b-input
        id="PostTitle"
        name="PostTitle"
        type="text"
        minlength="2"
        v-model="post.title"
        required
      >
      </b-input>
      <label for="PostText">Enter Text</label>
      <b-textarea
        id="PostText"
        name="PostText"
        type="text"
        maxlength="300"
        rows="5"
        v-model="post.text"
        required
      >
      </b-textarea>
      <b-button type="submit" class="btn btn-primary">Create a post</b-button>
    </b-form>
  </b-container>
</template>
<script>
import HTTPService from "../services/Posts.js";
export default {
  data() {
    return {
      post: {},
    };
  },
  methods: {
    async createPost() {
      console.log("saljem post");
      await HTTPService.add(this.post);
      console.log("Uspesno dodat post");
      this.$router.push({ name: 'AppPosts' });
    },
  },
};
</script>

<style scoped>
</style>