import { createStore } from 'vuex';

export default createStore({
	state() {
		return {
			names: [],
			green: 0,
			yellow: 0,
			red: 0,
		};
	},

	mutations: {
		addNameItem: (state, item) => {
			state.names.push(item);
		},
		removeAllNameItems: (state) => {
			state.names = [];
		},
		removeNameColor: (state) => {
			state.green = 0;
			state.yellow = 0;
			state.red = 0;
		},
		incrementGreenCount: (state) => {
			state.green++;
		},
		incrementYellowCount: (state) => {
			state.yellow++;
		},
		incrementRedCount: (state) => {
			state.red++;
		},
	},

	getters: {
		getNames: (state) => {
			// return names.reviewColor
			return state.names.filter((name) => name.reviewColor);
		},
		nameCount: (state) => {
			// return a count of the reviewColor names length
			return state.names.filter((name) => name.reviewColor).length;
		},
		getRed: (state) => {
			return state.red;
		},
		getYellow: (state) => {
			return state.yellow;
		},
		getGreen: (state) => {
			return state.green;
		},
	},
});
