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
      <!-- <nav class="nav small" v-else>
        <div id="nav-icon3" :class="classNames" @click="showButton">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div id="home-dropdown-small" :class="dropdownClass" @click="showButton">
          <template :key="route.path" v-for="(route, index) in routes">
            <router-link v-if="route.meta.visible" :to="route.path.toLowerCase()">
              {{ route.name }}
            </router-link>
          </template>
        </div>
      </nav> -->

      <div class="header-middle-text d-flex">
        <img src="@/assets/main-logo.png" />
        <h1 class="text-white" v-html="char"></h1>
        <p class="text-white">Created for Teachers, by Students.</p>
        <button class="btn btn-info">Get started</button>
      </div>

      <a @click="$refs.main.$el.scrollIntoView()" class="header-arrow">
        <span></span>
      </a>
    </header>

    <h1 class="mt-5">{{ msg }}</h1>
    <p>For Teachers, by Students.</p>
  </div>
</template>

<script>
export default {
  name: "Landing",
  props: {
    msg: String,
  },
  data() {
    return {
      videoUrl: "",
      loading: false,
      char: "",
      typeStatus: false,
      sentence: "Generate your first video in seconds",
      typeSpeed: 100,
      charIndex: 0,
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.sentence.length) {
        if (!this.typeStatus) {
          this.typeStatus = true;
        }
        this.char += this.sentence.charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typeSpeed);
      } else {
        this.typeStatus = false;
      }
    },
  },
  created() {
    setTimeout(this.typeText, this.typeSpeed);
  },

  computed: {
    charCurrent() {
      return this.char;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
      position: absolute;
      left: 25%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: rgba(0, 0, 0, 0.8);
      padding: 2rem;
      width: 400px;
      height: 500px;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      img {
        height: 200px;
        width: 200px;
      }
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
