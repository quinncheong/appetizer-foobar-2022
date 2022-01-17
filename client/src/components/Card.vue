<template>
  <div class="card-wrapper col-sm-3">
    <video width="320" height="240" class='mx-auto' controls>
      <source :src="videoUrl" type="video/mp4">
    </video>
    <button class="btn btn-success">Download</button>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ['videoUrl'],
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
  background-color: $primary-color;
  padding: 1rem;

  .btn-success {
    background-color: $secondary-color !important;
    border-color: $tertiary-color ;
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
</style>
