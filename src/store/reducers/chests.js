const { createSlice } = require("@reduxjs/toolkit")

const initialState = {}

const slice = createSlice({
	name: "basic",
	initialState,
	reducers: {
		createChest: (state, { payload: { uuid } }) => {
			state[uuid] = {
				title: "Chest",
				size: 6,
				items: {},
			}
			return state;
		},
		deleteChest: (state, { payload: { uuid } }) => {
			delete state[uuid];
			return state;
		},
		setChest: (state, { payload: { uuid, chest } }) => {
			state[uuid] = chest
			return state;
		},
		setChestSize: (state, { payload: { uuid, size } }) => {
			state[uuid].size = size;
			return state;
		},

		setChestTitle: (state, { payload: { uuid, title } }) => {
			state[uuid].title = title;
			return state;
		},
	}
});

export const { createChest, deleteChest, setChest, setChestSize, setChestTitle } = slice.actions;

export default slice.reducer;