<template>
  <div class="recommender-wrapper">
    <h1>My History</h1>
    <p>See the past videos that you have created</p>
    <div class="card-wrapper">
      <Card :key="index" v-for="(card, index) of cards" />
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
      cards: [1, 2, 3, 4, 5, 6],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.recommender-wrapper {
  padding: 40px;

  .card-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 40px;
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
