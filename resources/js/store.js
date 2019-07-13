export default {
    state: {
        welcomeMessage: 'Welcome to my app vue'
    },
    getters: {
        welcome(state){
            return state.welcomeMessage;
        }
    },
    mutations: {},
    actions: {}
};