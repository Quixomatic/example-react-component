import React, { useState } from 'react';

export default function InnerReactComponent(state) {
	const { dispatch, helpers, properties } = state;
	const { message, count } = properties;

	function plusHandler() {
		dispatch('handlePlus');
	}

	function minusHandler() {
		dispatch('handleMinus');
	}

	return (
		<div className="inner-react-component">
			<div>
				<span>{message}</span>
			</div>
			<div>
				<span>Count: {count}</span>
			</div>
			<div className="controls">
				<button onClick={minusHandler}>Subtract -</button>
				<button onClick={plusHandler}>Add +</button>
			</div>
		</div>
	);
}
