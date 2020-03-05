<template>
  <div class="quiz" id="quiz">
    <div v-if="alert_text" class="alert_text">
      <h3>Можно потыкать</h3>
    </div>
    <div class="container">
      <div v-if="holiday_text" class="holiday_text px-5">
        <h1>
          <vue-typer text="Дорогая " :repeat="0"></vue-typer><br />
          <vue-typer
                  class="name_typer"
                  :text="girl.name.toUpperCase() + '!'"
                  pre-type-delay="1000"
                  :repeat="0"
          ></vue-typer>
        </h1>
        <p class="my-3">
          <vue-typer
                  :text="main_text"
                  :repeat="0"
                  pre-type-delay="2200"
          ></vue-typer
          ><br />
        </p>
        <queue style="opacity: 0; transition: all .3s ease;" :class="{'btn-show': btnShow}" :id="this.id" />
      </div>
    </div>

  </div>
</template>

<script>
import "particles.js";
import { VueTyper } from "vue-typer";
import Queue from "./Queue";

export default {
  name: "Quiz",
  props: ["id"],
  components: { VueTyper, Queue },
  computed: {
    girl() {
      return this.$store.getters.allGirls[this.id];
    }
  },
  async mounted() {
    // eslint-disable-next-line no-undef
    await particlesJS.load("quiz", "particles.json", function() {
      console.log("ParticlesJS work");
    });

    setTimeout(() => {
      this.alert_text = true;
    }, 2000);

    setTimeout(() => {
      this.alert_text = false;
      this.holiday_text = true;
    }, 8500);

    setTimeout(() => {
      this.btnShow = true;
    }, 22000);
  },
  data() {
    return {
      alert_text: false,
      holiday_text: false,
      btnShow: false,
      main_text:
        "Прими поздравления с 8 Марта! Пусть настроение цветет, как весенние цветы, жизнь будет яркой, работа в радость, а дом всегда полной чашей!"
    };
  },
  methods: {
  }
};
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap')

#quiz
    width: 100%
    height: 100vh
    background: #fff

.alert_text
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    text-align: center
    text-transform: uppercase
    color: #429aea
    transition: all .4s ease
    h3
        line-height: 2.5rem
        font-size: 2rem
        letter-spacing: .4rem
        //font-family: 'Open Sans', sans-serif
        opacity: 0
        transition: all .4s ease
        animation: alert_text 5s linear
.holiday_text
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    width: 100%
    margin-left: auto
    text-align: center
    word-wrap: break-word
    p
        font-size: 1.4rem
    h1
        text-transform: uppercase

.btn-show
  opacity: 1 !important
  transform: translateY(20px) !important

@keyframes alert_text
    0%, 100%
        opacity: 0
    50%
        opacity: 1
    80%
        opacity: 1
</style>

<style>
.vue-typer .custom.char {
  color: #0d47a1;
}

.name_typer .custom.char {
  color: #ec407a;
  font-weight: 700;
  letter-spacing: 5px;
}


</style>
