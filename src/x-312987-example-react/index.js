import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from "./css/styles.scss";

import view from "./view";
import actions from "./actions";

createCustomElement("x-312987-example-react", {
	renderer: { type: snabbdom },
	view,
	initialState: {
		message: 'Wow, look at that we passed this snabbdom property down to a react component!',
	},
	properties: {
		debug: {
			default: false,
		},
		componentId: {
			default: null,
		},
	},
	styles,
	...actions,
});
