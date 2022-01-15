<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Built for teachers, by Students.</p>
    <button @click="handleClick" class="btn btn-success">Get Video Url</button>
    <p v-if="videoUrl">{{ videoUrl }}</p>
    <p v-else>You have not yet generated a Video! Generate it to see the link</p>
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
    };
  },
  methods: {
    async handleClick() {
      console.log("clicked");
      const newVideoUrl = await generateVideo("hello world");
      this.videoUrl = newVideoUrl;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
