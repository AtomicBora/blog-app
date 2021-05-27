<template>
  <b-container>
    <b-form @submit.prevent="createPost">
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
      <label for="PostText" class="m-2">Enter Text</label>
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
      <div class="mt-3">
          <b-button type="submit" class="btn btn-primary">Create a post</b-button>
          <b-button @click.prevent="resetForm" class="btn btn-danger">Clear all fields</b-button>
      </div>
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
      console.log("Saljem post");
      await HTTPService.add(this.post);
      console.log("Uspesno dodat post");
      this.$router.push({ name: 'AppPosts' });
    },
    resetForm(){
        // this.$refs.AddPost.reset();
        Object.keys(this.post).forEach((key) => this.post[key] = '');
    }
  },
};
</script>

<style scoped>
</style>