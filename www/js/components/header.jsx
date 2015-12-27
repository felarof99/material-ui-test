var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Mui = require('material-ui');
var Tabs = Mui.Tabs;
var Tab = Mui.Tab;
var ReactTapEventPlugin = require('react-tap-event-plugin');
ReactTapEventPlugin();

module.exports = React.createClass({
   render: function(){
    return <Tabs>
        <Tab label="Summary">
        </Tab>
        <Tab label="Expenses">
        </Tab>
        <Tab label="Income">
        </Tab>
    </Tabs>
   },
});
//<div className="nav nav-tabs nav-justified">
//    <Link to="/" className="col-xs-4"><a>Home</a></Link>
//    <Link to="/" className="col-xs-4"><a>Expense</a></Link>
//    <Link to="/" className="col-xs-4"><a>Income</a></Link>
//</div>

//<div className="row text-center">
//    <div className="nav nav-tabs nav-justified">
//            <span className="col-xs-4">
//                <li>Home</li>
//            </span>
//            <span className="col-xs-4">
//                <a>Expense</a>
//            </span>
//            <span className="col-xs-4">
//                <a>Income</a>
//            </span>
//    </div>
//</div>