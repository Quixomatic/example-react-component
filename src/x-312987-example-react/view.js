import './components/inner-react-component';

export default (state, { updateState, updateProperties, dispatch }) => {
	const { message } = state;

	const { debug, componentId } = state.properties;

	const getClasses = () => {
		return {
			'example-react-container': true,
			debug: debug,
		};
	};

	const initComponent = () => {
		dispatch('DO_SOMETHING_NOTHING_YET_THOUGH', {
			input: {},
		});
	};

	return (
		<div class={getClasses()} attr-component-id={componentId} hook-insert={initComponent}>
			<span>This content exists in the main parent component</span>
			<inner-react-component message={message} />
		</div>
	);
};
