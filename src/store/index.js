import chestSlice from "./reducers/chests";

const { configureStore } = require("@reduxjs/toolkit");

const loadState = () => {
	try {
		const serializedState = localStorage.getItem("chests");
		if (!serializedState)
			return undefined;
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};

const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state || {});
		localStorage.setItem("chests", serializedState);
	} catch {
		// ignore write errors
	}
};

const persistedState = loadState();
const store = configureStore({
	reducer: {
		chests: chestSlice,
	},
	preloadedState: persistedState,
});

store.subscribe(() => {
	saveState(store.getState());
});

export default store;
