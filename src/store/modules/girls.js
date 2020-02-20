export default {
    actions: {},
    mutations: {},
    state: {
        girls: [
            {
                id: 0,
                name: 'Нане',
                description: 'Несколько хороших и интересных качеств Нане. Lorem ipsum dolor sit amet, consectetur.',
                img: 'https://sun9-53.userapi.com/c858216/v858216733/154063/7BwVpT5UyZM.jpg',
                color: 'rgb(216,75,125)',
                tags: ['певица', 'чтототам'],
                code: 'nane123'
            },
            {
                id: 1,
                name: 'Мариам',
                description: 'Несколько хороших и интересных качеств Мариам. Lorem ipsum dolor sit amet, consectetur.',
                img: require('@/assets/img/girls/mariam.png'),
                color: 'rgb(30, 136, 229)',
                tags: ['певица', 'чтототам'],
                code: 'mar123'
            },
            {
                id: 2,
                name: 'Рита',
                description: 'Несколько хороших и интересных качеств Риты. Lorem ipsum dolor sit amet, consectetur.',
                img: require('@/assets/img/girls/rita.png'),
                color: '#ba68c8',
                tags: ['певица', 'чтототам'],
                code: 'rita123'
            },
            {
                id: 3,
                name: 'Ани',
                description: 'Несколько хороших и интересных качеств Ани. Lorem ipsum dolor sit amet, consectetur.',
                img: require('@/assets/img/girls/ani1.jpg'),
                color: '#ffd54f',
                tags: ['певица', 'чтототам'],
                code: 'ani123'
            },

        ]
    },
    getters: {
        allGirls(state) {
            return state.girls
        }
    }
}