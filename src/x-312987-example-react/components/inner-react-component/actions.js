export default {
	TEST_ACTION_OF_SOME_SORT: ({ action, state, updateState, dispatch }) => {
		action.stopPropagation();
	},
	["handlePlus"]: ({ action, state, updateState, updateProperties }) => {
		action.stopPropagation();

		const { properties } = state;
		const { count } = properties;

		updateProperties({
			count: count + 1
		});
	},
	["handleMinus"]: ({ action, state, updateState, updateProperties }) => {
		action.stopPropagation();

		const { properties } = state;
		const { count } = properties;

		updateProperties({
			count: count - 1
		});
	}
};
