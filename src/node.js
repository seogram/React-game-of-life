import React from 'react';

export default class Node extends React.Component {


	render() {
		return (
			<div
				className={this.props.nodeClass}
				id={this.props.id}
			/>
		);
	}
}