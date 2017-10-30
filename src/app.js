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
    name: 'Lukasz',
    age: 25,

};
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }else {
    return undefined;
    }
}

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        {getLocation(user.location)}
    </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
