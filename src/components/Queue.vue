<template>
    <div class="queue">
        <button @click="alertQueue" class="btn btn-outline-primary">Начать опрос</button>
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
                answer: {
                    id: this.id,
                    name: this.$store.getters.allGirls[this.id].name,
                    answ: []
                }
            }
        },
        methods: {
            alertQueue() {
                let queueResult = [];
                Swal.mixin({
                    confirmButtonText: 'Далее &rarr;',
                    cancelButtonText: 'Отмена',
                    showCancelButton: true,
                    progressSteps: ['&#10084;', '1', '2', '3', '4', '...',],
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
                        } else if (wrapper.classList.contains('input_question')) {
                            let result = document.querySelector('.answer_input')
                            if (result)
                                currentQuestion['answer'] = result.value;
                        }

                        queueResult.push(currentQuestion)

                    }
                }).queue([
                    {
                        title: 'Как твои дела?',
                        html: `
                            <div class="checkbox_buttons queue_wrapper">
                                <div class="custom-control custom-checkbox">
                                  <input value="Все хорошо" type="checkbox" class="custom-control-input" id="defaultInline1" name="queueChecked">
                                  <label class="custom-control-label" for="defaultInline1">Все хорошо!</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                  <input value="Отлично" type="checkbox" class="custom-control-input" id="defaultInline2" name="queueChecked">
                                  <label class="custom-control-label" for="defaultInline2">Отлично!</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                  <input value="Превосходно" type="checkbox" class="custom-control-input" id="defaultInline3" name="queueChecked">
                                  <label class="custom-control-label" for="defaultInline3">Превосходно!</label>
                                </div>
                            </div>
                        `
                    },
                    {
                        title: 'Кто самая красивая девочка в ВЕМ?',
                        html: `
                            <div class="radio_buttons queue_wrapper">
                                <div class="custom-control custom-radio">
                                  <input value="${this.girl.name}" type="radio" class="custom-control-input" id="defaultGroupExample1" name="queueRadio1">
                                  <label class="custom-control-label" for="defaultGroupExample1">${this.girl.name}</label>
                                </div>
                                <div class="custom-control custom-radio">
                                  <input value="${this.girl.name}" type="radio" class="custom-control-input" id="defaultGroupExample2" name="queueRadio1">
                                  <label class="custom-control-label" for="defaultGroupExample2">${this.girl.name}!!!</label>
                                </div>
                                <div class="custom-control custom-radio">
                                  <input value="Не знаю" type="radio" class="custom-control-input" id="defaultGroupExample3" name="queueRadio1">
                                  <label class="custom-control-label" for="defaultGroupExample3">Не знаю(</label>
                                </div>
                            </div>
                        `
                    },
                    {
                        title: 'Кто самый красивый в ВЕМ?',
                        html: `
                            <div class="input_question queue_wrapper">
                                <input type="text" class="form-control answer_input search-input my-3" placeholder="Ответ...">
                            </div>
                        `
                    },
                    {
                        title: 'Кто из парней самый харизматичный?',
                        html: `
                            <div class="input_question queue_wrapper">
                                <input type="text" class="form-control answer_input search-input my-3" placeholder="Ответ...">
                            </div>
                        `
                    },
                    {
                        title: 'Чьи шутки из парней самые смешные?',
                        html: `
                            <div class="input_question queue_wrapper">
                                <input type="text" class="form-control answer_input search-input my-3" placeholder="Ответ...">
                            </div>
                        `
                    },
                    {
                        title: 'Самый талантливый человек в ВЕМ?',
                        html: `
                            <div class="input_question queue_wrapper">
                                <input type="text" class="form-control answer_input search-input my-3" placeholder="${this.girl.name + '!!!'}">
                            </div>
                        `
                    },
                    {
                        title: 'Кто больше всех тебя раздражает?',
                        html: `
                            <div class="input_question queue_wrapper">
                                <input type="text" class="form-control answer_input search-input my-3" placeholder="В принципе все....">
                            </div>
                        `
                    },
                    {
                        title: 'Дата основания ВЕМ?',
                        html: `
                            <div class="radio_buttons queue_wrapper">
                                <div class="custom-control custom-radio">
                                  <input value="Верно" type="radio" class="custom-control-input" id="defaultGroupExample1" name="queueRadio1">
                                  <label class="custom-control-label" for="defaultGroupExample1">30 октября 2016г.</label>
                                </div>
                                <div class="custom-control custom-radio">
                                  <input value="Неверно" type="radio" class="custom-control-input" id="defaultGroupExample2" name="queueRadio1">
                                  <label class="custom-control-label" for="defaultGroupExample2">31 октября 2016г.</label>
                                </div>
                                <div class="custom-control custom-radio">
                                  <input value="Неверно" type="radio" class="custom-control-input" id="defaultGroupExample3" name="queueRadio1">
                                  <label class="custom-control-label" for="defaultGroupExample3">30 ноября 2016г.</label>
                                </div>
                                <div class="custom-control custom-radio">
                                  <input value="В принципе верно" type="radio" class="custom-control-input" id="defaultGroupExample4" name="queueRadio1">
                                  <label class="custom-control-label" for="defaultGroupExample4">Зачем мне знать это?!</label>
                                </div>
                            </div>
                        `
                    },
                    {
                        title: 'Лучий дизайнер в ВЕМ?',
                        html: `
                            <div class="radio_buttons queue_wrapper">
                                <div class="custom-control custom-radio">
                                  <input value="Гор" type="radio" class="custom-control-input" id="defaultGroupExample1" name="queueRadio1">
                                  <label class="custom-control-label" for="defaultGroupExample1">Гор</label>
                                </div>
                                <div class="custom-control custom-radio">
                                  <input checked value="Гор" type="radio" class="custom-control-input" id="defaultGroupExample2" name="queueRadio1">
                                  <label class="custom-control-label" for="defaultGroupExample2">Гор</label>
                                </div>
                                <div class="custom-control custom-radio">
                                  <input value="Гор" type="radio" class="custom-control-input" id="defaultGroupExample3" name="queueRadio1">
                                  <label class="custom-control-label" for="defaultGroupExample1">Не знаю таких!</label>
                                </div>
                                </div>
                            </div>
                        `
                    },
                    {
                        title: 'По твоему кто лучше всех поёт в хоре?',
                        html: `
                            <small class="my-4">P.S. Мы никому не скажем!)</small>
                            <div class="checkbox_buttons queue_wrapper d-flex justify-content-center">
                                <div class="wrap mx-4">
                                    <div class="custom-control custom-checkbox">
                                      <input value="Нане" type="checkbox" class="custom-control-input" id="r1" name="queueChecked">
                                      <label class="custom-control-label" for="r1">Нане</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                      <input value="Мариам" type="checkbox" class="custom-control-input" id="r2" name="queueChecked">
                                      <label class="custom-control-label" for="r2">Мариам</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                      <input value="Ани/Рита" type="checkbox" class="custom-control-input" id="r3" name="queueChecked">
                                      <label class="custom-control-label" for="r3">Ани/Рита</label>
                                    </div>
                                </div>
                                <div class="wrap">
                                    <div class="custom-control custom-checkbox">
                                      <input value="Лусине" type="checkbox" class="custom-control-input" id="r4" name="queueChecked">
                                      <label class="custom-control-label" for="r4">Лусине</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                      <input value="Флора" type="checkbox" class="custom-control-input" id="r5" name="queueChecked">
                                      <label class="custom-control-label" for="r5">Флора</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                      <input value="Мане" type="checkbox" class="custom-control-input" id="r6" name="queueChecked">
                                      <label class="custom-control-label" for="r6">Мане</label>
                                    </div>
                                </div>

                            </div>
                        `
                    },
                    {
                        title: 'Как самый лучший предводитель ВЕМ всех времен?',
                        html: `
                            <small class="my-4">P.S. Можно выбрать несколько вариантов!</small>
                            <div class="checkbox_buttons queue_wrapper">
                                <div class="custom-control custom-checkbox">
                                  <input value="Тарон" type="checkbox" class="custom-control-input" id="defaultInline1" name="queueChecked">
                                  <label class="custom-control-label" for="defaultInline2">Тарон</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                  <input value="Арман" type="checkbox" class="custom-control-input" id="defaultInline2" name="queueChecked">
                                  <label class="custom-control-label" for="defaultInline2">Арман</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                  <input value="Айк" type="checkbox" class="custom-control-input" id="defaultInline3" name="queueChecked">
                                  <label class="custom-control-label" for="defaultInline2">Айк</label>
                                </div>
                            </div>
                        `
                    },
                    {
                        title: 'Где мои носки?!!!!',
                        html: `
                            <small>(На 23 февраля)</small>
                            <div class="input_question queue_wrapper">
                                <input type="text" class="form-control answer_input search-input my-3" placeholder="Ну как сказать, этоо самоое...">
                            </div>
                        `
                    },
                    {
                        title: 'Как тебе наш поздравительный сайт?',
                        html: `
                            <div class="input_question queue_wrapper">
                                <div class="form-group">
                                  <textarea class="form-control rounded-0 answer_input" placeholder="Замечания..." id="exampleFormControlTextarea2" rows="3"></textarea>
                                </div>
                            </div>
                        `
                    },

                ]).then(async (result) => {
                    this.answer.answ = queueResult;
                    let response = await fetch('http://dev.seo-rocket.ru/test-march', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(this.answer)
                    });
                    console.log(response)
                    if (!('dismiss' in result)) {
                        Swal.fire({
                            title: 'Все прошло успешно!',
                            text: 'Теперь мы стали еще ближе! Спасибо, что ты есть!)',
                            confirmButtonText: 'Lovely!',
                        }).then(() => {
                            this.$router.push({name: 'Vem'})
                        })
                    }
                })
            }
        }
    }
</script>

<style lang="sass" scoped>
</style>