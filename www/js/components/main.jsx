var React = require('react');
var ReactDOM = require('react-dom');

var Mui = require('material-ui');
var ReactTapEventPlugin = require('react-tap-event-plugin');
ReactTapEventPlugin();

var Header = require('./header.jsx');
var AppBar = require('./appbar.jsx');

module.exports = React.createClass({
    render: function(){
        return <div className="row">
            <div className="col-xs-12">
                <AppBar />
                <Header />
            </div>
        </div>
    }
});
