<template>
  <b-container>
    <b-card v-for="post in posts" :key="post.id">
      <b-card>{{ post.title }} <router-link :to="{name: 'EditPost', params: {id: post.id}}" class="btn btn-danger">Edit</router-link>
        <div class="mt-3">
          <router-link
            :to="{ name: 'SinglePost', params: { id: post.id } }"
            class="btn btn-info"
            >Read more</router-link
          >
        </div>
        </b-card>
    </b-card>
  </b-container>
</template>

<script>
import HTTPService from "../services/Posts.js";
export default {
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    console.log("Cao");
    try {
      this.posts = await HTTPService.getAll();
      console.log("Uspesno dobavljeni postovi");
      console.log(this.posts);
    } catch (error) {
      console.log("Neuspesno!");
    }
  },
};
</script>
<style>
</style>