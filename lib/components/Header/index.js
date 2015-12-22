'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactDOM = require('react-dom');
var logo = require('./logo.png');
var message = require('./message.png');
var user = require('./user.png');

var Header = (function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Header).call(this, props));

        _this.state = {};

        console.log(props);
        return _this;
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'header',
                { className: 'header' },
                React.createElement(
                    'div',
                    { className: 'left' },
                    React.createElement(
                        'span',
                        null,
                        React.createElement('img', { className: 'logo', src: logo })
                    ),
                    React.createElement(
                        'span',
                        null,
                        '高得准'
                    ),
                    React.createElement(
                        'span',
                        { className: 'split' },
                        '|'
                    ),
                    React.createElement(
                        'span',
                        null,
                        '管理平台'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'right' },
                    React.createElement(
                        'div',
                        null,
                        React.createElement(
                            'span',
                            null,
                            React.createElement('img', { className: 'message', src: message })
                        ),
                        React.createElement(
                            'span',
                            null,
                            '消息'
                        ),
                        React.createElement(
                            'span',
                            { className: 'message-total' },
                            '(99)'
                        ),
                        React.createElement(
                            'span',
                            { className: 'split' },
                            '|'
                        ),
                        React.createElement(
                            'span',
                            null,
                            React.createElement('img', { className: 'user', src: user })
                        ),
                        React.createElement(
                            'span',
                            null,
                            '路人甲'
                        ),
                        React.createElement(
                            'span',
                            null,
                            React.createElement(
                                'a',
                                { className: 'logout', href: '' },
                                '退出'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Header;
})(React.Component);

Header.defaultProps = {};

module.exports = Header;