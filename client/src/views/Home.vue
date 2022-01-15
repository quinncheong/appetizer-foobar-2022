<template>
  <div class="home">
    <Landing msg="Generate a video in seconds" />
    <Recommender />
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from "@/components/Landing.vue";
import Recommender from "@/components/Recommender.vue";

export default {
  name: "Home",
  components: {
    Landing,
    Recommender,
  },
};
</script>
