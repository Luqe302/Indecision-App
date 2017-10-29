console.log('App.js is running!');

// JSX - JavaScript XML
var app = {
    race: 'Dog',
    name: 'Billy',
};

var template = (
    <div>
        <h1>{app.race}</h1>
        <h2>{app.name}</h2>

    </div>
);

var user = {
    name: 'Andrew',
    age: 26,
    location: 'Phil'
};


var userAge = 27
var userLoc = 'New York';
var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>{userAge}</p>
        <p>{userLoc}</p>
    </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
