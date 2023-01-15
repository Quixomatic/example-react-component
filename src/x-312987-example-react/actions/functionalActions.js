export default {
	'TEST_ACTION_OF_SOME_SORT': ({ action, state, updateState, dispatch }) => {
		action.stopPropagation();
	},
};
