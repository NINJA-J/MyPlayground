// import React from 'react';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            isNextX: true,
            isFinish: false
        };
    }

    renderSquare(i) {
        return (
            <td>
                <Square
                    value={this.state.squares[i]}
                    onClick={() => this.handleClick(i)}
                />
            </td>
        );
    }

    chkWin(squares) {
        const pairs = [
            [0, 1, 2],
            [0, 4, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 4, 6],
            [2, 5, 8],
            [3, 4, 5],
            [6, 7, 8]
        ]

        // const squares = this.state.squares.slice();

        console.log("checking log")
        for (const pair of pairs) {
            // const pair = pairs[i]
            console.log('on ' + pair)
            if (squares[pair[0]] != null && squares[pair[0]] === squares[pair[1]] && squares[pair[0]] === squares[pair[2]]) {
                return true;
            }
        }
        return false;
    }

    handleClick(i) {
        if (this.state.isFinish) {
            return;
        }

        const result = {}

        const squares = this.state.squares.slice();
        squares[i] = this.state.isNextX ? 'X' : 'O';
        if (this.chkWin(squares)) {
            // console.log("checking log")
            result.isFinish = true;
            this.setState({isFinish: true})
            // return;
        } else {
            this.setState({isNextX: !this.state.isNextX})
            // result.isNextX = !this.state.isNextX;
        }

        this.setState({squares: squares});

    }

    onRestart() {
        this.setState({
            squares: Array(9).fill(null),
            isNextX: true,
            isFinish: false
        });
    }

    renderBoardRow(i) {
        return (
            <tr>
                {this.renderSquare(i * 3)}
                {this.renderSquare(i * 3 + 1)}
                {this.renderSquare(i * 3 + 2)}
            </tr>
        )
    }

    render() {
        const status = (this.state.isFinish ? 'Winner is ' : 'Next player is ') + (this.state.isNextX ? 'X' : 'O');

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-grid">
                    <table>
                        <tbody>
                        {this.renderBoardRow(0)}
                        {this.renderBoardRow(1)}
                        {this.renderBoardRow(2)}
                        </tbody>
                    </table>
                </div>
                <div className="restart-btn">
                    <button onClick={() => this.onRestart()}>
                        Restart
                    </button>
                </div>
            </div>
        );
    }
}

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }

    onClick() {
        if (this.props.value == null) {
            this.props.onClick();
        }
    }

    render() {
        // if (this.props.value == null) {
        return (
            <button
                className="square"
                onClick={() => this.onClick()}
            >
                {this.props.value}
            </button>
        );
        // } else {
        //     return (<div className="square">
        //         {this.state.value}
        //     </div>);
        // }

    }
}

const root = ReactDOM.createRoot(document.getElementById("board"));
root.render(<Board info="Start"/>);