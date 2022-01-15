<template>
  <div class="home">
    <Landing msg="Generate a video in seconds"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from '@/components/Landing.vue';

export default {
  name: 'Home',
  components: {
    Landing,
  },
};
</script>
