import Vue from 'vue';
import Vuex from 'vuex';
import esJson from './json/es.json';
import enJson from './json/en.json';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        json: {},
        language: null
    },
    getters: {
        getJson: state => {
            return state.json;
        },
        getLanguage: state => {
            return state.language
        }
    },
    mutations: {
        updateJson(state, payload) {
            state.json = payload;
        },
        updateLanguage(state, payload) {
            state.language = payload;

            if (payload == 'es') {
                state.json = esJson;
            } else {
                state.json = enJson;
            }
        }
    }
});

export default store;
