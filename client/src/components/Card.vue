<template>
  <div class="card-wrapper col-sm-3">
    <h4>This is a sample title</h4>
    <video preload="auto" controls>
      <source
        src="https://kr.object.ncloudstorage.com/appetizer/2022-01-17-00-15-287.mp4"
        type="video/mp4"
      />
    </video>

    <button class="btn btn-success" @click="copyUrl(videoUrl)">Download</button>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["videoUrl"],
  methods: {
    copyUrl(url) {
      navigator.clipboard.writeText(url);
      alert("Link copied!");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$primary-color: #ffb997;
$secondary-color: #f67e7d;
$tertiary-color: #843b62;
$tertiary-color-2: #621940;
$dark-color: #0b032d;

.card-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  // background-color: $primary-color;
  padding: 1rem 0rem 0rem 0rem;

  .card-video {
    margin-top: auto;
  }

  .btn-success {
    background-color: $dark-color !important;
    border-color: $dark-color;
  }
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

video {
  width: 100% !important;
  height: auto !important;
}
</style>
