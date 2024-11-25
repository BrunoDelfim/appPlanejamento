import { createStore } from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import state from './state';

const store = createStore({
    state,
    mutations,
    actions,
    getters,
});

export default store;