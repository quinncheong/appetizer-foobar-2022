<template>
  <div class="home">
    <Landing msg="Videomaking in a matter of seconds" />
    <Input />
    <Recommender />
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from "@/components/Landing.vue";
import Recommender from "@/components/Recommender.vue";
import Input from "../components/Input.vue";

export default {
  name: "Home",
  components: {
    Landing,
    Input,
    Recommender,
  },
};
</script>
