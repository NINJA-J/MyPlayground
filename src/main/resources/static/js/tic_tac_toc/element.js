'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import React from 'react';

var Board = function (_React$Component) {
    _inherits(Board, _React$Component);

    function Board(props) {
        _classCallCheck(this, Board);

        var _this = _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).call(this, props));

        _this.state = {
            squares: Array(9).fill(null),
            isNextX: true,
            isFinish: false
        };
        return _this;
    }

    _createClass(Board, [{
        key: 'renderSquare',
        value: function renderSquare(i) {
            var _this2 = this;

            return React.createElement(
                'td',
                null,
                React.createElement(Square, {
                    value: this.state.squares[i],
                    onClick: function onClick() {
                        return _this2.handleClick(i);
                    }
                })
            );
        }
    }, {
        key: 'chkWin',
        value: function chkWin(squares) {
            var pairs = [[0, 1, 2], [0, 4, 8], [0, 3, 6], [1, 4, 7], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]];

            // const squares = this.state.squares.slice();

            console.log("checking log");
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = pairs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var pair = _step.value;

                    // const pair = pairs[i]
                    console.log('on ' + pair);
                    if (squares[pair[0]] != null && squares[pair[0]] === squares[pair[1]] && squares[pair[0]] === squares[pair[2]]) {
                        return true;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return false;
        }
    }, {
        key: 'handleClick',
        value: function handleClick(i) {
            if (this.state.isFinish) {
                return;
            }

            var result = {};

            var squares = this.state.squares.slice();
            squares[i] = this.state.isNextX ? 'X' : 'O';
            if (this.chkWin(squares)) {
                // console.log("checking log")
                result.isFinish = true;
                this.setState({ isFinish: true });
                // return;
            } else {
                this.setState({ isNextX: !this.state.isNextX });
                // result.isNextX = !this.state.isNextX;
            }

            this.setState({ squares: squares });
        }
    }, {
        key: 'onRestart',
        value: function onRestart() {
            this.setState({
                squares: Array(9).fill(null),
                isNextX: true,
                isFinish: false
            });
        }
    }, {
        key: 'renderBoardRow',
        value: function renderBoardRow(i) {
            return React.createElement(
                'tr',
                null,
                this.renderSquare(i * 3),
                this.renderSquare(i * 3 + 1),
                this.renderSquare(i * 3 + 2)
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var status = (this.state.isFinish ? 'Winner is ' : 'Next player is ') + (this.state.isNextX ? 'X' : 'O');

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: 'status' },
                    status
                ),
                React.createElement(
                    'div',
                    { className: 'board-grid' },
                    React.createElement(
                        'table',
                        null,
                        React.createElement(
                            'tbody',
                            null,
                            this.renderBoardRow(0),
                            this.renderBoardRow(1),
                            this.renderBoardRow(2)
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'restart-btn' },
                    React.createElement(
                        'button',
                        { onClick: function onClick() {
                                return _this3.onRestart();
                            } },
                        'Restart'
                    )
                )
            );
        }
    }]);

    return Board;
}(React.Component);

var Square = function (_React$Component2) {
    _inherits(Square, _React$Component2);

    function Square(props) {
        _classCallCheck(this, Square);

        var _this4 = _possibleConstructorReturn(this, (Square.__proto__ || Object.getPrototypeOf(Square)).call(this, props));

        _this4.state = {
            value: props.value
        };
        return _this4;
    }

    _createClass(Square, [{
        key: 'onClick',
        value: function onClick() {
            if (this.props.value == null) {
                this.props.onClick();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            // if (this.props.value == null) {
            return React.createElement(
                'button',
                {
                    className: 'square',
                    onClick: function onClick() {
                        return _this5.onClick();
                    }
                },
                this.props.value
            );
            // } else {
            //     return (<div className="square">
            //         {this.state.value}
            //     </div>);
            // }
        }
    }]);

    return Square;
}(React.Component);

var root = ReactDOM.createRoot(document.getElementById("board"));
root.render(React.createElement(Board, { info: 'Start' }));