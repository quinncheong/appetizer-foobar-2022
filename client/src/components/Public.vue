<template>
  <div class="recommender-wrapper">
    <h1>Public Videos</h1>
    <p>Browse and borrow from other teachers</p>
    <div class="card-wrapper">
      <card-public
        :key="index"
        v-for="(card, index) of cards"
        :title="card.title"
        :videoUrl="card.url"
      />
    </div>
  </div>
</template>

<script>
import CardPublic from "@/components/CardPublic.vue";

export default {
  name: "Recommender",
  components: {
    CardPublic,
  },
  props: {},
  data() {
    return {
      cards: [
        {
          title: "Medieval Times",
          author: "Thomas",
          url: "https://waynehills-api.s3.ap-northeast-2.amazonaws.com/TheFoobarFighters/made/2022-01-17-23-28-58.mp4",
        },
        {
          title: "Literary Courage",
          author: "Thomas",
          url: "https://waynehills-api.s3.ap-northeast-2.amazonaws.com/TheFoobarFighters/made/2022-01-17-23-31-204.mp4",
        },
        {
          title: "Attention",
          author: "Thomas",
          url: "https://waynehills-api.s3.ap-northeast-2.amazonaws.com/TheFoobarFighters/made/2022-01-17-23-32-274.mp4",
        },
        {
          title: "The Hard Worker",
          author: "Thomas",
          url: "https://waynehills-api.s3.ap-northeast-2.amazonaws.com/TheFoobarFighters/made/2022-01-17-23-43-82.mp4",
        },
        {
          title: "Lonely Winter",
          author: "Thomas",
          url: "https://waynehills-api.s3.ap-northeast-2.amazonaws.com/TheFoobarFighters/made/2022-01-17-23-45-572.mp4",
        },
        // {
        //   title: "Friendster",
        //   author: "Thomas",
        //   url: "https://kr.object.ncloudstorage.com/appetizer/2022-01-17-22-37-355.mp4",
        // },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$primary-color: #ffb997;
.recommender-wrapper {
  padding: 40px;
  background: white;

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
