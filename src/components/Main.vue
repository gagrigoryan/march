<template>
    <div class="main">
        <div class="wrapper py-5 px-4">
            <div class="container">
                <div class="col-md-12 mb-5">
                    <input type="text" v-model="search" class="form-control search-input" placeholder="Ваше имя...">
                </div>
                <div class="row">
                    <div class="col-md-4" v-for="(girl, index) in filteredGirls" :key="index">
                        <div class="card mx-2 my-5 shadow-lg text-center pb-4 px-3">
                            <div class="profile_heart profile_heart-1">
                                <p><font-awesome-icon icon="heart"/></p>
                            </div>
                            <div class="profile_heart profile_heart-2" :style="{color: girl.color}">
                                <p><font-awesome-icon icon="heart"/></p>
                            </div>
                            <div class="profile_card_img">
                                <img :style="{border: '4px solid ' + girl.color}" class="rounded-circle shadow-lg" :src="girl.img" alt="profile card">
                            </div>
                            <div class="profile_content">
                                <div class="profile_content-title">
                                    <h3>{{ girl.name }}</h3>
                                </div>
                                <div class="profile_content-tags mb-2">
                                    <small v-for="(tag, index) in girl.tags" :key="index">
                                        #{{ tag }}
                                    </small>
                                </div>
                                <div class="profile_content-text">
                                    <p>{{ girl.description }}</p>
                                </div>
                            </div>
                            <div class="profile_button my-3">
                                <router-link :to="'/girl/' + index" class="button instagram"><span class="gradient"></span>Начнем</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { faHeart } from '@fortawesome/free-solid-svg-icons'
    import { library } from '@fortawesome/fontawesome-svg-core'
    library.add(faHeart)

    export default {
        name: "Main",
        data() {
            return {
                search: ''
            }
        },
        computed: {
            filteredGirls() {
                return this.girls.filter(girl => {
                    return girl.name.toLowerCase().match(this.search.toLowerCase())
                })
            },
            girls() {
                return this.$store.getters.allGirls
            }
        }
    }
</script>

<style lang="sass" scoped>
    .main
        width: 100%
        min-height: 100vh


    .wrapper
        width: 100%
        min-height: 100%
        color: #303334


    .card
        border-radius: 20px
        border: none


    .profile_card_img
        transform: translateY(-50%)
        img
            width: 130px
            height: 130px

    .profile
        &_heart
            position: absolute
            font-size: 1.6rem
            &-1
                left: 5%
                top: 5%
                color: #ff2c7b
            &-2
                right: 5%
                top: 5%
                color: #ff5d38

        &_content
            margin-top: -40px
            &-tags
                font-weight: 700
                small
                    color: #ffcb00

    .button
        display: block
        margin: 0 auto
        width: 10rem
        height: 3rem
        overflow: hidden
        position: relative
        transform: translateZ(0)
        text-decoration: none
        box-sizing: border-box
        font-size: 18px
        font-weight: normal
        box-shadow: 0 9px 18px rgba(0,0,0,0.2)


    .instagram
        display: flex
        align-items: center
        justify-content: center
        text-align: center
        border-radius: 50px
        color: white
        background: #BD3381
        transition: all 0.2s ease-out 0s

    .gradient 
        display: block
        position: absolute
        top: 0
        right: 0
        width: 100%
        height: 100%
        bottom: auto
        margin: auto
        z-index: -1
        background: radial-gradient(90px circle at top center, rgba(238,88,63,.8) 30%, rgba(255,255,255,0))
        transition: all 0s ease-out 0s
        transform: translateX(-140px)
        animation: 8s linear 0s infinite move
    


    @keyframes gradient-animation
        0%
            background-position: 0 50%
        50%
            background-position: 100% 50%
        100%
            background-position: 0 50%
    
    @keyframes move
        0%
            transform: translateX(-140px)
        25%
            transform: translateX(140px)
            opacity: 0.3
        50%
            transform: translateX(140px)
            opacity: 1
            background: radial-gradient(90px circle at bottom center, rgba(238,88,63,.5) 30%, rgba(255,255,255,0))
        75%
            transform: translateX(-140px)
            opacity: 0.3
        100%
            opacity: 1
            transform: translateX(-140px)
            background: radial-gradient(90px circle at top center, rgba(238,88,63,.5) 30%, rgba(255,255,255,0))

</style>
