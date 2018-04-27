import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './grid';
import Buttons from './button'
import './index.css';
import 'semantic-ui-css/semantic.min.css';


class App extends React.Component {
	constructor() {
		super();
		/**
		 * defualt grid size
		 */
		this.rows = 30;
		this.cols = 50;

		this.state = {
			/**
			 * create initial array and fill it with false cells (dead cells)
			 */
			initialGrid: Array(this.rows).fill().map(() => Array(this.cols).fill(false)),
			played: false,
			paused: true
		}
	}

	/**
	 * seeding the grid 
	 */
	seed = () => {
		let gridCopy = [...this.state.initialGrid];
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				if (Math.floor(Math.random() * 4) === 1) {
					gridCopy[i][j] = true;
				}
			}
		}
		this.setState({
			initialGrid: gridCopy
		});
	}

	playBtn = () => {
		clearInterval(this.intervalId);
		this.setState({ played: true, paused: false });
		this.intervalId = setInterval(this.updateGrid, 500);
	}

	pauseBtn = () => {
		this.setState({ played: false, paused: true });
		clearInterval(this.intervalId);
	}


	updateGrid = () => {
		let grid = this.state.initialGrid;
		let mirrorGrid = [...this.state.initialGrid];
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				let neighboursCount = 0;
		
				if (i < this.rows - 1 && grid[i + 1][j]) neighboursCount ++; //bottom center
				if (i < this.rows - 1 && j > 0 && grid[i + 1][j - 1]) neighboursCount ++; //bottom left
				if (i < this.rows - 1 && this.cols - 1 && grid[i + 1][j + 1]) neighboursCount ++; //bottom right
				if (i > 0 && grid[i - 1][j]) neighboursCount ++; // top center
				if (i > 0 && j > 0 && grid[i - 1][j - 1]) neighboursCount ++; // top left corner
				if (i > 0 && j < this.cols - 1 && grid[i - 1][j + 1]) neighboursCount ++; //top right
				if (j < this.cols - 1 && grid[i][j + 1]) neighboursCount ++; //middle right
				if (j > 0 && grid[i][j - 1]) neighboursCount ++; //middle left
			
				if (grid[i][j] && (neighboursCount  < 2 || neighboursCount  > 3)) mirrorGrid[i][j] = false;
				if (!grid[i][j] && neighboursCount  === 3) mirrorGrid[i][j] = true;
			}
		}
		this.setState({
			initialGrid: mirrorGrid
		});

	}

	componentDidMount() {
		this.seed();
	}

	render() {
		return (
			<div>

				<Grid
					initialGrid={this.state.initialGrid}
					rows={this.rows}
					cols={this.cols}
				/>
				<Buttons
					playBtn={this.playBtn}
					pauseBtn={this.pauseBtn}
					played={this.state.played}
					paused={this.state.paused}
				/>
			</div>
		);
	}
}


ReactDOM.render(<App />, document.getElementById('root'));

