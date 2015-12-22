var React = require('react')
var ReactDOM = require('react-dom')
var logo = require('./logo.png')
var message = require('./message.png')
var user = require('./user.png')
class Header extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    static defaultProps = {}
    state = {}

    render() {
        return (
            <header className="">
                <div className="left">
                    <img className="logo" src={logo}/>
                    <span>高得准</span>
                    <span className="split"></span>
                    <span>管理平台</span>
                </div>
                <div className="right">
                    <div>
                        <img className="message" src={message}/>
                        <span>消息</span>
                        <span className="message-total">(99)</span>
                        <span className="split"></span>
                        <img className="user" src={user}/>
                        <span>路人甲</span>
                        <a className="logout" href="">退出</a>
                    </div>
                </div>
            </header>
        )
    }


}
module.exports = Header