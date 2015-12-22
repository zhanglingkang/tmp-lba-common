var React = require('react')
var ReactDOM = require('react-dom')
class LeftNav extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    static defaultProps = {}
    state = {
        menu: [
            {name: '首页', icon: require('./home_normal.png')},
            {name: '推广', icon: require('./generalize_normal.png')},
            {name: '报表', icon: require('./report_normal.png')},
            {name: '财务', icon: require('./money_normal.png')},
            {name: '工具', icon: require('./tools_normal.png')}
        ]
    }

    render() {
        var menu = this.state.menu
            .map((menuItem, index)=> {
                return (
                    <a key={index} className={`list-group-item `}>
                        <img className="icon" src={menuItem.icon}/>
                        {menuItem.name}
                    </a>
                )
            })
        return (
            <nav className="left-nav">
                <div className="list-group">
                    {menu}
                </div>
            </nav>
        )
    }


}
module.exports = LeftNav