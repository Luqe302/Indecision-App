'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var app = {
    race: 'Dog',
    name: 'Billy'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.race
    ),
    React.createElement(
        'h2',
        null,
        app.name
    )
);

var user = {
    name: 'Andrew',
    age: 26,
    location: 'Phil'
};

var userAge = 27;
var userLoc = 'New York';
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        userAge
    ),
    React.createElement(
        'p',
        null,
        userLoc
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
