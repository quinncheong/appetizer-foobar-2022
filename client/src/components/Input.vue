<template>
  <div>
    <textarea placeholder='Enter your script here' v-model="userInput"></textarea>
    <br>
    <button class="btn btn-primary" @click='createVideo'>Create Video</button>
    <div v-if="loading" class="loader mt-5"></div>
    <div class="mt-3" v-else>
      <div v-if="videoUrl">
        <video width="320" height="240" controls>
          <source src="videoUrl" type="video/mp4">
        </video>
        <br>
        <span v-html='videoUrl' class='url'></span>
        <button @click='copyUrl' class="btn btn-secondary">Copy</button>
      </div>
    </div>
  </div>
</template>

<script>
import { generateVideo, getSummary } from "@/backend_functions/video.js";

export default {
  name: "Input",
  data() {
    return {
      userInput: '',
      videoUrl: null,
      loading: false,
    };
  },
  methods: {
    async createVideo() {
      console.log("clicked");
      this.loading = true;
      const newVideoUrl = await generateVideo(this.userInput);
      const newVideoSummary = await getSummary(this.userInput);
      this.videoUrl = newVideoUrl;
      this.loading = false;
    },
    copyUrl() {
      navigator.clipboard.writeText(this.videoUrl.value);
      alert('Link copied!');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
textarea {
  width: 500px;
  height: 250px;
}

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

.url {
  text-decoration: underline;
}
</style>
