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
    name: 'Lukasz',
    age: 25

};
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    } else {
        return undefined;
    }
}

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
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
