<template>
  <div class="landing-wrapper">
    <header class="landing-header">
      <nav class="links text-white" v-if="fullView">
        <template :key="route.path" v-for="(route, index) in routes">
          <router-link v-if="route.meta.visible" :to="route.path.toLowerCase()">
            {{ route.name }}
          </router-link>
        </template>
      </nav>

      <!-- If on small screen -->
      <nav class="nav small" v-else>
        <div id="nav-icon3" :class="classNames" @click="showButton">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div id="home-dropdown-small" :class="dropdownClass" @click="showButton">
          <!-- Router link to other paths -->
          <template :key="route.path" v-for="(route, index) in routes">
            <router-link v-if="route.meta.visible" :to="route.path.toLowerCase()">
              {{ route.name }}
            </router-link>
          </template>
        </div>
      </nav>

      <div class="header-middle-text d-flex">
        <h4 class="text-white">Save My World,</h4>
        <h4 class="text-white">Together</h4>
      </div>

      <a @click="$refs.main.$el.scrollIntoView()" class="header-arrow">
        <span></span>
      </a>
    </header>

    <h1>{{ msg }}</h1>
    <p>Built for teachers, by Students.</p>
    <button @click="handleClick" class="btn btn-success">Get Video Url</button>
    <div v-if="loading" class="loader mt-5"></div>
    <div class="mt-3" v-else>
      <p v-if="videoUrl">{{ videoUrl }}</p>
      <p v-else>You have not yet generated a Video! Generate it to see the link</p>
    </div>
  </div>
</template>

<script>
import { generateVideo } from "@/backend_functions/video.js";

export default {
  name: "Landing",
  props: {
    msg: String,
  },
  data() {
    return {
      videoUrl: "",
      loading: false,
    };
  },
  methods: {
    async handleClick() {
      console.log("clicked");
      this.loading = true;
      const newVideoUrl = await generateVideo("hello world");
      this.videoUrl = newVideoUrl;
      this.loading = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// Loader spinner
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 1s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.landing-wrapper {
  .landing-header {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    max-height: 100vh;
    padding: 0.5rem;
    background-image: url("~@/assets/teaching2.jpg");
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    position: relative;

    .header-middle-text {
      background-color: rgba(0, 0, 0, 0.5);
      margin-top: 15rem;
      padding: 2rem;
      width: 20px;
      width: 70%;
      flex-direction: column;
      align-items: flex-start;
    }

    .links {
      display: flex;
      width: 90%;
      justify-content: space-around;
    }

    .header-arrow {
      margin-top: auto;
      margin-bottom: 30px;
      cursor: pointer;
      animation: 2.5s infinite alternate bouncer;

      span {
        display: block;
        width: 32px;
        height: 32px;
        border-right: 2px solid;
        border-bottom: 2px solid;
        border-color: #fefefe;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }
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

/* For safari */
@keyframes bouncer {
  50% {
    transform: translateY(-16px);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>
