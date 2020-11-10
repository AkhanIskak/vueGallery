/** @format */

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		user: {
			username: String,
			fullName: String,
		},
	},
	getters: {},

	actions: {},
	mutations: {
		changeName(state, payload) {
			state.user.fullName = payload;
        },
        changeUsername(state,payload){
            state.user.username=payload
        }
	},
});
