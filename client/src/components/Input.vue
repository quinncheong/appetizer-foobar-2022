<template>
  <div>
    <textarea placeholder="Enter your script here" v-model="userInput"></textarea>
    <br />
    <button class="btn btn-primary" @click="createVideo">Create Video</button>
    <div v-if="loading" class="loader my-5"></div>
    <div class="my-5" v-else>
      <div v-if="videoUrl">
        <video height="500" controls>
          <source :src="videoUrl" type="video/mp4" />
        </video>
        <br />
        <p><b>Topics Detected:</b> {{ keywords.join(", ") }}</p>
        <a :href="videoUrl">Copy URL</a>
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
      userInput: "",
      videoUrl: null,
      loading: false,
      keywords: [],
    };
  },
  methods: {
    async createVideo() {
      console.log("clicked");
      this.loading = true;
      console.log(this.userInput);
      const newVideoUrl = await generateVideo(this.userInput);
      const newVideoSummary = await getSummary(this.userInput);
      this.keywords = newVideoSummary.keywords;
      this.videoUrl = newVideoUrl;
      this.loading = false;
    },
    copyUrl() {
      navigator.clipboard.writeText(this.videoUrl);
      alert("Link copied!");
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
