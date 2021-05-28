<template>
  <b-container>
    <b-card v-for="post in posts" :key="post.id">
      <b-card>
        {{ post.title }}
        <router-link
          :to="{ name: 'EditPost', params: { id: post.id } }"
          class="btn btn-info"
          >Edit</router-link
        >
        <button @click="deletePost(post.id)" class="btn btn-danger">
          Delete
        </button>
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
    try {
      this.posts = await HTTPService.getAll();
      console.log("Uspesno dobavljeni postovi");
      console.log(this.posts);
    } catch (error) {
      console.log("Neuspesno!");
    }
  },
  methods: {
    async deletePost(id) {
      await HTTPService.delete(id);
      const index = this.posts.findIndex((post) => post.id === id);
      this.posts.splice(index, 1);
    },
  },
};
</script>
<style>
</style>