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
                code: 'nane123',
                //video: 'https://storage.coverr.co/videos/Bridge%20In%20Place?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTgyNTM2NDAyfQ.yEmgBkKAbJxZCz4aXhOzrUpmbgTHlPRetExZbmDVSf4'
                video: require('@/assets/video/nane.webm')
            },
            {
                id: 1,
                name: 'Мариам',
                description: 'Несколько хороших и интересных качеств Мариам. Lorem ipsum dolor sit amet, consectetur.',
                img: require('@/assets/img/girls/mariam.png'),
                color: 'rgb(30, 136, 229)',
                tags: ['певица', 'чтототам'],
                code: 'mar123',
                video: 'https://storage.coverr.co/videos/coverr-road-through-lake-1576265328949?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTgyNDkyODI3fQ.ijEwNg2Y2DZvrpPhqA6Ld-tuekpB2i2VNYat4s7ngMs'
            },
            {
                id: 2,
                name: 'Рита',
                description: 'Несколько хороших и интересных качеств Риты. Lorem ipsum dolor sit amet, consectetur.',
                img: require('@/assets/img/girls/rita.png'),
                color: '#ba68c8',
                tags: ['певица', 'чтототам'],
                code: 'rita123',
                video: 'https://storage.coverr.co/videos/Blue%20Joy?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTgyNTM5Mzc4fQ.nagKO_VJydjwHTSVFSS7xhcKZKvB7Q_iVqBvidchnHY'
            },
            {
                id: 3,
                name: 'Ани',
                description: 'Несколько хороших и интересных качеств Ани. Lorem ipsum dolor sit amet, consectetur.',
                img: require('@/assets/img/girls/ani.png'),
                color: '#ffd54f',
                tags: ['певица', 'чтототам'],
                code: 'ani123',
                video: require('@/assets/video/ani.mp4')
            },
            {
                id: 4,
                name: 'Нона',
                description: 'Несколько хороших и интересных качеств Нона. Lorem ipsum dolor sit amet, consectetur.',
                img: require('@/assets/img/girls/nona.png'),
                color: '#2196F3',
                tags: ['певица', 'чтототам'],
                code: 'nona123',
                video: require('@/assets/video/ani.mp4')
            },
            {
                id: 5,
                name: 'Рима',
                description: 'Несколько хороших и интересных качеств Рима. Lorem ipsum dolor sit amet, consectetur.',
                img: require('@/assets/img/girls/rima.png'),
                color: '#D81B60',
                tags: ['певица', 'чтототам'],
                code: 'rima123',
                video: require('@/assets/video/ani.mp4')
            },
            {
                id: 6,
                name: 'Флора',
                description: 'Несколько хороших и интересных качеств Флора. Lorem ipsum dolor sit amet, consectetur.',
                img: require('@/assets/img/girls/flora.png'),
                color: '#FFEB3B',
                tags: ['певица', 'чтототам'],
                code: 'flora123',
                video: require('@/assets/video/ani.mp4')
            },
            {
                id: 7,
                name: 'Лилия',
                description: 'Несколько хороших и интересных качеств Лилия. Lorem ipsum dolor sit amet, consectetur.',
                img: require('@/assets/img/girls/lilia.png'),
                color: '#FF5722',
                tags: ['певица', 'чтототам'],
                code: 'lilia123',
                video: require('@/assets/video/ani.mp4')
            },
            {
                id: 8,
                name: 'Анна',
                description: 'Несколько хороших и интересных качеств Анна. Lorem ipsum dolor sit amet, consectetur.',
                img: require('@/assets/img/girls/anna.jpg'),
                color: '#58ff76',
                tags: ['певица', 'чтототам'],
                code: 'anna123',
                video: require('@/assets/video/ani.mp4')
            },

        ]
    },
    getters: {
        allGirls(state) {
            return state.girls
        }
    }
}