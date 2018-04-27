import React from 'react';
import Node from './node';


const Grid = (props)=>{
	const width = (props.cols * 14);
			var rowsArr = [];
			var boxClass = "";
			for (let i = 0; i < props.rows; i++) {
				for (let j = 0; j < props.cols; j++) {
					let id = i + "_" + j;
	
					boxClass = props.initialGrid[i][j] ? "node live" : "node dead";
					rowsArr.push(
						<Node
							boxClass={boxClass}
							key={id}
						/>
					);
				}
			}
	
			return (
				<div className="grid" style={{ width: width }}>
					{rowsArr}
				</div>
			);
}

export default Grid ;
