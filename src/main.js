"use strict";
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var InitializeActions = require('./actions/initializeActions');

InitializeActions.initApp();


Router.run(routes, function(Handler) {
    React.render(<Handler />, document.getElementById('app'));
});

/* Manual Routing Code

var Home = require('./components/homePage');
var Authors = require('./components/authors/authorPage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');

var App = React.createClass({
    render: function () {
        var Child;

        switch(this.props.route) {
            case 'about': Child = About; break;
            case 'authors': Child = Authors; break;
            default: Child = Home;
        }

        return (
            <div>
                <Header />
                <Child />
            </div>
        );
    }
});

function render() {
    var route = window.location.hash.substr(1);
    React.render(<App route={route} />, document.getElementById('app'));
}

window.addEventListener('hashchange', render);
render();*/