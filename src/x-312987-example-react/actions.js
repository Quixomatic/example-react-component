import { actionTypes } from '@servicenow/ui-core';

import initialActions from './actions/initialActions';
import functionalActions from './actions/functionalActions';

const { COMPONENT_BOOTSTRAPPED } = actionTypes;

export default {
	actionHandlers: {
		...functionalActions,
		...initialActions,
		[COMPONENT_BOOTSTRAPPED]: ({ dispatch, state, updateState }) => {},
	},
};
