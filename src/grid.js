import React from 'react';
import Node from './node';


export default class Grid extends React.Component {
	render() {
		var rowsArr = [];
		var nodeClass = "";
		for (let i = 0; i < this.props.rows; i++) {
			for (let j = 0; j < this.props.cols; j++) {
				let id = i + "_" + j;

				boxClass = this.props.initialGrid[i][j] ? "node live" : "node dead";
				rowsArr.push(
					<Node
						nodeClass={nodeClass}
						key={id}
					/>
				);
			}
		}

		return (
			<div className="grid" style={{ width: 700 }}>
				{rowsArr}
			</div>
		);
	}
}