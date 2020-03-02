<template>
    <div class="queue">
        <button @click="alertQueue" class="btn btn-outline-primary">{{ girl.name }}</button>
    </div>
</template>

<script>
    import Swal from 'sweetalert2';
    window.Swal = Swal;

    const toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });
    window.toast = toast

    export default {
        name: "Queue",
        props: ['id'],
        computed: {
            girl() {
                return this.$store.getters.allGirls[this.id];
            }
        },
        data() {
            return {
            }
        },
        methods: {
            alertQueue() {
                let queueResult = [];
                Swal.mixin({
                    confirmButtonText: 'Далее &rarr;',
                    cancelButtonText: 'Отмена',
                    showCancelButton: true,
                    progressSteps: ['1', '2'],
                    // eslint-disable-next-line no-unused-vars
                    preConfirm(inputValue) {
                        let currentQuestion = {
                            question: this.title,
                            answer: null
                        };
                        let wrapper = document.querySelector('.queue_wrapper');
                        if (wrapper.classList.contains('radio_buttons')){
                            let result = document.querySelector('input[name="queueRadio1"]:checked');
                            if (result)
                                currentQuestion['answer'] = result.value;
                        } else if (wrapper.classList.contains('checkbox_buttons')) {
                            let result = [];
                            document.querySelectorAll('input[type=checkbox]:checked').forEach(el => {
                                result.push(el.value)
                            });
                            currentQuestion['answer'] = result;
                        }

                        queueResult.push(currentQuestion)

                    }
                }).queue([
                    {
                        title: 'Question 1',
                        html: `
                            <div class="radio_buttons queue_wrapper">
                                <div class="custom-control custom-radio">
                                  <input value="Gor" type="radio" class="custom-control-input" id="defaultGroupExample1" name="queueRadio1">
                                  <label class="custom-control-label" for="defaultGroupExample1">Option 1</label>
                                </div>

                                <!-- Group of default radios - option 2 -->
                                <div class="custom-control custom-radio">
                                  <input value="Flora" type="radio" class="custom-control-input" id="defaultGroupExample2" name="queueRadio1">
                                  <label class="custom-control-label" for="defaultGroupExample2">Option 2</label>
                                </div>

                                <!-- Group of default radios - option 3 -->
                                <div class="custom-control custom-radio">
                                  <input value="Lara" type="radio" class="custom-control-input" id="defaultGroupExample3" name="queueRadio1">
                                  <label class="custom-control-label" for="defaultGroupExample3">Option 3</label>
                                </div>
                            </div>
                        `
                    },
                    {
                        title: 'Question 2',
                        html: `
                            <div class="checkbox_buttons queue_wrapper">
                                <div class="custom-control custom-checkbox">
                                  <input value="Gor" type="checkbox" class="custom-control-input" id="defaultInline1" name="queueChecked">
                                  <label class="custom-control-label" for="defaultInline1">1</label>
                                </div>

                                <!-- Default inline 2-->
                                <div class="custom-control custom-checkbox">
                                  <input value="Flora" type="checkbox" class="custom-control-input" id="defaultInline2" name="queueChecked">
                                  <label class="custom-control-label" for="defaultInline2">2</label>
                                </div>

                                <!-- Default inline 3-->
                                <div class="custom-control custom-checkbox">
                                  <input value="Lara" type="checkbox" class="custom-control-input" id="defaultInline3" name="queueChecked">
                                  <label class="custom-control-label" for="defaultInline3">3</label>
                                </div>
                            </div>
                        `
                    }
                    // eslint-disable-next-line no-unused-vars
                ]).then((result) => {
                    console.log(queueResult)
                    Swal.fire({
                        title: 'All done!',
                        confirmButtonText: 'Lovely!',
                    }).then(() => {
                        this.$router.push({name: 'Vem'})
                    })
                })
            }
        }
    }
</script>

<style lang="sass" scoped>
</style>