'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactDOM = require('react-dom');

var LeftNav = (function (_React$Component) {
    _inherits(LeftNav, _React$Component);

    function LeftNav(props) {
        _classCallCheck(this, LeftNav);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LeftNav).call(this, props));

        _this.state = {
            menu: [{ name: '首页', icon: require('./home_normal.png') }, { name: '推广', icon: require('./generalize_normal.png') }, { name: '报表', icon: require('./report_normal.png') }, { name: '财务', icon: require('./money_normal.png') }, { name: '工具', icon: require('./tools_normal.png') }]
        };

        console.log(props);
        return _this;
    }

    _createClass(LeftNav, [{
        key: 'render',
        value: function render() {
            var menu = this.state.menu.map(function (menuItem, index) {
                return React.createElement(
                    'a',
                    { key: index, className: 'list-group-item ' },
                    React.createElement('img', { className: 'icon', src: menuItem.icon }),
                    menuItem.name
                );
            });
            return React.createElement(
                'nav',
                { className: 'left-nav' },
                React.createElement(
                    'div',
                    { className: 'list-group' },
                    menu
                )
            );
        }
    }]);

    return LeftNav;
})(React.Component);

LeftNav.defaultProps = {};

module.exports = LeftNav;