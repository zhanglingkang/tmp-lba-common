var {Header,LeftNav} = require('../lib/index')
var React = require('react')
var ReactDOM = require('react-dom')
ReactDOM.render(
    <div>
        <div>
            <Header></Header>
        </div>
        <div>
            <div>
                <LeftNav></LeftNav>
            </div>
            <div>
            </div>
        </div>
    </div>,
    document.getElementById('react-root')
)