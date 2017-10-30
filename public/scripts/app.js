'use strict';

console.log('App.js is running!');

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options ' + app.options : 'No options'
    )
);

var user = {
    name: 'Lukasz Grzasko',
    age: 19,
    location: 'Bryhors'
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

var getFirstName = function getFirstName(name) {
    return user.name.split(' ')[0];
};
console.log(getFirstName(user.name));

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply: function multiply() {
        var _this = this;

        return this.numbers.map(function (e) {
            return e * _this.multiplyBy;
        });
    }
};
console.log(multiplier.multiply());

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
