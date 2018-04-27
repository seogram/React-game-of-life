import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {
    constructor() {
        super();
        /**
         * default grid size
         */
        this.rows = 30;
        this.cols = 50;

        this.state = {
            /**
             * create initial array and fill it with false cells (dead cells)
             */
            initialGrid: Array(this.rows).fill().map(() => Array(this.cols).fill(false)),
            play: true,
            pause: false
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


    updateGrid = () => {
        let grid = this.state.initialGrid;
        let mirrorGrid = [...this.state.initialGrid];
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                let neighboursCount = 0;

                if (i < this.rows - 1 && grid[i + 1][j]) neighboursCount++; //bottom center
                if (i < this.rows - 1 && j > 0 && grid[i + 1][j - 1]) neighboursCount++; //bottom left
                if (i < this.rows - 1 && this.cols - 1 && grid[i + 1][j + 1]) neighboursCount++; //bottom right
                if (i > 0 && grid[i - 1][j]) neighboursCount++; // top center
                if (i > 0 && j > 0 && grid[i - 1][j - 1]) neighboursCount++; // top left corner
                if (i > 0 && j < this.cols - 1 && grid[i - 1][j + 1]) neighboursCount++; //top right
                if (j < this.cols - 1 && grid[i][j + 1]) neighboursCount++; //middle right
                if (j > 0 && grid[i][j - 1]) neighboursCount++; //middle left

                if (grid[i][j] && (neighboursCount < 2 || neighboursCount > 3)) mirrorGrid[i][j] = false;
                if (!grid[i][j] && neighboursCount === 3) mirrorGrid[i][j] = true;
            }
        }
        console.log(mirrorGrid);
        this.setState({
            initialGrid: mirrorGrid
        });

    }



    componentDidMount() {
        this.seed();
        this.updateGrid();

    }
    render() {
        return (
            <div>
                Game of life
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
