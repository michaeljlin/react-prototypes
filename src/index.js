import React from 'react';
import ReactDOM from 'react-dom';

function luckyNumber(){
    return Math.floor(Math.random()*1000 +1);
}

function greeting(userObject){
    // var divElement = document.createElement("div");
    // divElement.classList.add("container");
    //
    // var headerElement1 = document.createElement("h1");
    // headerElement1.textContent = "Welcome " + userObject.name;
    //
    // var headerElement2 = document.createElement("h2");
    // headerElement2.classList.add("text-muted");
    // headerElement2.textContent = userObject.luckyNumber;
    //
    // divElement.appendChild(headerElement1);
    // divElement.appendChild(headerElement2);
    //
    // return divElement;


    return <div className='container'>
        <h1>Welcome {userObject.name}</h1>
        <h2 className='text-muted'>{userObject.luckyNumber}</h2>
    </div>
}

var user = {
    name: 'Michael',
    luckyNumber: luckyNumber()
};

var test = greeting(user);

ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);
