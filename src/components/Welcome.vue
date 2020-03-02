<template>
  <div class="holiday" :class="{ show: show }">
    <video
      :src="girl.video"
      :class="{ show: show }"
      id="autoplay-video"
      autoplay
      loop
      muted
    ></video>
    <div class="container">
      <div class="text" :class="{ block: show }">
        <h1 class="text__title">Добро пожаловать!</h1>
        <h1
          class="text__name"
          :style="{ color: girl.color }"
          :class="{ name_block: name_block }"
        >
          {{ girl.name }}
        </h1>
        <router-link :to="'/quiz/' + girl.id"
          class="text__btn btn btn-outline-light my-2"
          :class="{ button_block: button_block }"
        >
          Дальше
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Holiday",
  props: ["id"],
  computed: {
    girl() {
      return this.$store.getters.allGirls[this.id];
    }
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 1500);

    setTimeout(() => {
      this.name_block = true;
    }, 4500);

    setTimeout(() => {
      this.button_block = true;
    }, 7000);
  },
  data() {
    return {
      show: false,
      name_block: false,
      button_block: false
    };
  }
};
</script>

<style lang="sass" scoped>

.holiday
    background: none
    height: 100vh
    overflow: hidden
    opacity: 0
    transition: all .8s ease
    z-index: -1
    &::after
        content: ''
        width: 100%
        height: 100%
        background: #1d1d1d
        position: absolute
        left: 0
        top: 0
        opacity: .5
        z-index: 0


#autoplay-video
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    min-width: 100%
    min-height: 100%
    height: 100vh
    width: 100%
    object-fit: cover
    transition: all .4s ease

.show
    opacity: 1

.block
    display: block !important

.name_block
    opacity: 1 !important
    transform: translateY(10px) !important

.button_block
    opacity: 1 !important
    transform: translateY(25px) !important
.text
    z-index: 5
    color: #fff
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    text-align: center
    display: none
    transition: all .3s ease
    &__title
        line-height: 3.5rem
        letter-spacing: 2px
        animation: text 3s 1
    &__name
        font-weight: 700
        letter-spacing: 10px
        font-size: 3rem
        opacity: 0
        transition: all .3s
    h1
        text-transform: uppercase
        display: block
    &__btn
        border-width: 2px
        opacity: 0
        transition: all 1.2s

@keyframes text
    0%
        opacity: 0
        transform: translateY(25px)
    30%
        letter-spacing: 5px
        transform: translateY(25px)
    85%
        letter-spacing: 2px
        transform: translateY(25px)
</style>
