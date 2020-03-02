<template>
    <div class="vem" :class="{'vem-show': vemShow}">
        <div class="container">
            <div class="vem__wrapper text-center">
                <div class="vem__img my-4" :class="{'img-show': imgShow}">
                    <img :src="require('@/assets/img/vem/Vem.png')" alt="">
                </div>
                <div class="vem__text" :class="{'img-show': imgShow}">
                    <h3>From <span style="color: #bf5746; font-weight: 700;">VEM</span> with <span style="color: #bf5746"><font-awesome-icon icon="heart"/></span></h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { faHeart } from '@fortawesome/free-solid-svg-icons'
    import { library } from '@fortawesome/fontawesome-svg-core'
    library.add(faHeart);


    export default {
        name: "Vem",
        data() {
            return {
                vemShow: false,
                imgShow: false
            }
        },
        mounted() {
            setTimeout(() => {
                this.vemShow = true;
            }, 1800);

            setTimeout(() => {
                this.imgShow = true;
            }, 2700);
        }
    }
</script>

<style lang="sass" scoped>
.vem
    width: 100%
    height: 100vh
    background: none
    color: #fff
    transition: background-color .5s ease
    &__wrapper
        width: 100%
        top: 50%
        left: 50%
        position: absolute
        transform: translate(-50%, -50%)
    &__img
        opacity: 0
        transition: all 2s ease
        img
            width: 7rem
    &__text
        opacity: 0
        transition: all 4s ease
        h3
            font-size: 1.5rem


.vem-show
    background: #1c2328

.img-show
    opacity: 1


</style>