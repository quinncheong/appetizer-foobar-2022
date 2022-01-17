<template>
  <div class="recommender-wrapper">
    <h1>My History</h1>
    <p>See the past videos that you have created</p>
    <div class="card-wrapper">
      <Card :key="index" v-for="(card, index) of cards" :videoUrl='card.url'/>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "Recommender",
  components: {
    Card,
  },
  props: {},
  data() {
    return {
      cards: [
        { url: 'https://kr.object.ncloudstorage.com/appetizer/2022-01-17-00-15-287.mp4' },
        { url: 'https://kr.object.ncloudstorage.com/appetizer/2022-01-13-15-51-22.mp4' },
        { url: 'https://kr.object.ncloudstorage.com/appetizer/2022-01-17-22-33-232%20%281%29.mp4' },
        { url: 'https://kr.object.ncloudstorage.com/appetizer/2022-01-17-22-35-168.mp4' },
        { url: 'https://kr.object.ncloudstorage.com/appetizer/2022-01-17-22-36-890.mp4' },
        { url: 'https://kr.object.ncloudstorage.com/appetizer/2022-01-17-22-37-355.mp4' },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.recommender-wrapper {
  padding: 40px;
  background: #d3d3d3;

  .card-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 10px;
    gap: 10px;
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
