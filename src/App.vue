<template>
  <div id="app">
      <div class="wrapper">
          <transition name="router-anim"
                      enter-active-class="animated fadeIn"
                      leave-active-class="animated fadeOut">
              <router-view/>
          </transition>
      </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
    @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css";

    #app {
        background: linear-gradient(-80deg, #ee7752, #e73c7e, #23a6d5, #36c7d5);
        background-size: 400% 400%;
        animation: gradient-animation 8s ease-in-out infinite;
        z-index: -2;
    }

    .wrapper {
        position: relative;
    }


</style>
