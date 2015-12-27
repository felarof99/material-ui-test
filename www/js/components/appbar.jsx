var React = require('react');

var Mui = require('material-ui');
var ReactTapEventPlugin = require('react-tap-event-plugin');
var AppBar = Mui.AppBar;

ReactTapEventPlugin();

module.exports = React.createClass({
    render: function(){
        return <AppBar
            title="CashGuru"
            iconClassNameRight="muidocs-icon-navigation-expand-more" />
    },
});