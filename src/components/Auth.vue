<template>
    <div class="auth">
        <div class="auth__wrapper">
            <div class="container">
                <div class="profile text-center">
                    <div class="profile_img my-4">
                        <img :style="{border: '4px solid ' + (correctCode ? girl.color : '#fff')}"
                             class="rounded-circle shadow-lg"
                             :class="{'hide-op': show}"
                             :src="girl.img" alt="profile card">
                    </div>
                    <div class="profile_input">
                        <input :class="{'inp-op': inputShow}"
                               type="password"
                               class="form-control search-input my-3"
                               placeholder="Кодовое слово..."
                               v-model="code">
                        <router-link :to="'/welcome/' + girl.id"
                           :class="{'inp-op': inputShow, 'disabled': !correctCode, 'danger-bg': !correctCode}"
                           :disabled="!correctCode"
                           class="btn btn-primary pl-3 pr-4 py-2 profile_input-btn">
                            <font-awesome-icon style="transition: all .3s ease" v-if="correctCode" class="mr-2" icon="paper-plane"/>
                            <font-awesome-icon style="transition: all .3s ease" v-else class="mr-2" icon="times"/>
                            Пройти
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
    import { faTimes } from '@fortawesome/free-solid-svg-icons'
    import { library } from '@fortawesome/fontawesome-svg-core'
    library.add(faPaperPlane, faTimes)

    export default {
        name: "Auth",
        props: ['id'],
        computed: {
            girl() {
                return this.$store.getters.allGirls[this.id]
            },

            correctCode() {
                return this.code.toLocaleLowerCase() === this.girl.code.toLocaleLowerCase();

            }
        },
        data() {
            return {
                show: false,
                inputShow: false,
                code: ''
            }
        },
        mounted() {
            setTimeout(() => {
                this.show = true
            }, 2000)
            setTimeout(() => {
                this.inputShow = true
            }, 2500)
        }
    }
</script>

<style lang="sass" scoped>
    .auth
        width: 100%
        min-height: 100vh

        .profile
            position: absolute
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)
            &_input
                transform: translateY(-90px)
                &-btn
                    border-radius: 25px
                    transition: all .4s ease-in, color .1s
                    transition-delay: .6s
                    opacity: 0
                    color: #fff

            &_img
                img
                    transition: all .8s ease-in-out
                    width: 130px
                    height: 130px
                    opacity: 0

        .search-input
            background: none
            border: 1px solid #fff
            color: #fff
            opacity: 0
            transition: all .8s ease-in
            &::placeholder
                color: #fff
            &:focus
                background: none
                width: 110%
                color: #fff

        .hide-op
            opacity: 1 !important
            transform: translateY(-50px)

        .inp-op
            opacity: 1 !important
            transform: translateY(50px)

        .danger-bg
            background: #fff
            border: 2px solid #fff
            color: #f57678 !important

</style>