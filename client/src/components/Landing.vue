<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Built for teachers, by Students.</p>
    <button @click="handleClick" class="btn btn-success">Get Video Url</button>
    <div v-if="loading" class="loader mt-5"></div>
    <div class="mt-3" v-else>
      <p v-if="videoUrl">{{ videoUrl }}</p>
      <p v-else>You have not yet generated a Video! Generate it to see the link</p>
    </div>
  </div>
</template>

<script>
import { generateVideo } from "@/backend_functions/video.js";

export default {
  name: "Landing",
  props: {
    msg: String,
  },
  data() {
    return {
      videoUrl: "",
      loading: false,
    };
  },
  methods: {
    async handleClick() {
      console.log("clicked");
      this.loading = true;
      const newVideoUrl = await generateVideo("hello world");
      this.videoUrl = newVideoUrl;
      this.loading = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// Loader spinner
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 1s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
