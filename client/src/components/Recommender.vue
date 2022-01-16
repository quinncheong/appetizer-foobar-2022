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

{ "text": "First off, what is Matter. Matter are objects made up of tiny particles. These particles
have mass, or weight, and volume, or taking up space. So things like you and me, who clearly have
mass(weighing scale) and takes up space (squeeze in the train), are matter. And we’re made up of
tons of tiny particles. But things like light and shadows, which do not have any mass nor does it
take up any space because they are not made up of particles, are not matter Now, matter has 3 forms,
solid, liquids and gases. The different states are because of difference in forces between the
particles To demonstrate, let’s look at the matter, water. Water, in its solid state, exists as ice.
Ice is clearly solid because its shape does not change whether u put it on a plate or in a cup. The
particles in ice are held together closing by strong forces. Next, the water we commonly know,
exists as liquids. Liquids have no fixed shape, but have a fixed volume. So when we put it on a
plate or in a cup, the shape changes, but the amount of space the liquid water takes, is still the
same. Now, when you boil water, you get steam, which is a gas. Gases have no fixed shape nor volume.
Imagine you capture some air in a balloon. Even though the balloon looks full, you can still pump
more air or squeeze the balloon. That’s because the air in the balloon can be compressed. Now that
you know what matter is like, let us take a closer look at each of these particles. " }
