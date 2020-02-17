<template>
    <div class="main py-5 px-4">
        <div class="container">
            <div class="row">
                <div class="col-md-4" v-for="(girl, index) in girls" :key="index">
                    <div class="card mx-2 my-5 shadow-lg text-center pb-4 px-3">
                        <div class="profile_card_img">
                            <img class="rounded-circle shadow-lg" :src="girl.img" alt="profile card">
                        </div>
                        <div class="profile_content">
                            <div class="profile_content-title">
                                <h3>{{ girl.name }}</h3>
                            </div>
                            <div class="profile_content-text">
                                <p>{{ girl.description }}</p>
                            </div>
                        </div>
                        <div class="profile_button my-3">
                            <a href="" class="button instagram"><span class="gradient"></span>Начнем</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Main",
        data() {
            return {
                girls: [
                    {
                        name: 'Нане',
                        description: 'Несколько хороших и интересных качеств Нане. Lorem ipsum dolor sit amet, consectetur.',
                        img: 'https://sun9-53.userapi.com/c858216/v858216733/154063/7BwVpT5UyZM.jpg'
                    },
                    {
                        name: 'Мариам',
                        description: 'Несколько хороших и интересных качеств Мариам. Lorem ipsum dolor sit amet, consectetur.',
                        img: require('@/assets/img/girls/mariam.png')
                    },
                    {
                        name: 'Рита',
                        description: 'Несколько хороших и интересных качеств Риты. Lorem ipsum dolor sit amet, consectetur.',
                        img: require('@/assets/img/girls/rita.png')
                    }
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import url('https://fonts.googleapis.com/css?family=Comfortaa:400,500|Neucha|Poiret+One&display=swap&subset=cyrillic')

    .main
        width: 100%
        min-height: 100vh
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #36c7d5)
        //background: linear-gradient(135deg, #ff0f1d, #5b5efb, #f7b350)
        //background: linear-gradient(to right, #16222a, #3a6073)
        background-size: 400% 400%
        animation: gradient-animation 8s ease-in-out infinite
        color: #303334
        font-family: 'Comfortaa', cursive

    .card
        border-radius: 20px
        border: none


    .profile_card_img
        transform: translateY(-50%)
        img
            width: 130px
            height: 130px
            border: 4px solid #ff62f4

    .profile
        &_content
            margin-top: -40px
            
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
