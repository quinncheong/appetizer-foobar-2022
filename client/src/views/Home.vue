<template>
  <div class="home">
    <Landing msg="Videomaking in a matter of seconds" />
    <Input />
    <Recommender ref="main" />
    <div class="call-to-action header">
      <h3 class="text-white">Browse what others have created</h3>
    </div>
    <Public />
    <!-- <Footer /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from "@/components/Landing.vue";
import Recommender from "@/components/Recommender.vue";
import Public from "@/components/Public.vue";
import Input from "../components/Input.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Landing,
    Input,
    Recommender,
    Public,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.call-to-action {
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  max-height: 100vh;
  padding: 0.5rem;
  background-image: url("~@/assets/video.jpg");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  position: relative;

  h3 {
    margin-top: 30px;
  }
}
</style>
