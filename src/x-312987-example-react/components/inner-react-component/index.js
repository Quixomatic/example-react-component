import { createCustomElement } from '@servicenow/ui-core';
import react from '@quixomatic/ui-renderer-react';

import styles from './styles.scss';
import view from './view';
import actions from './actions';

createCustomElement('inner-react-component', {
	renderer: { type: react },
	view,
	properties: {
		message: {
			default: '',
		},
		count: {
			default: 0,
		},
	},
	actionHandlers: {
		...actions,
	},
	styles,
});
