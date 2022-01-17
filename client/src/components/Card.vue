<template>
  <div class="card-wrapper col-sm-3">
    <h4>{{ title }}</h4>
    <video preload="auto" controls>
      <source
        :src="videoUrl"
        type="video/mp4"
      />
    </video>

    <a :href='videoUrl' class="btn btn-success">Download</a>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["videoUrl", "title"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$primary-color: #ffb997;
$secondary-color: #f67e7d;
$tertiary-color: #843b62;
$tertiary-color-2: #621940;
$dark-color: #111e33;

.card-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  // background-color: $primary-color;
  padding: 1rem 0rem 0rem 0rem;

  h4 {
    align-self: flex-start;
  }

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
  color: #b94289;
}

video {
  width: 100% !important;
  height: auto !important;
}
</style>
