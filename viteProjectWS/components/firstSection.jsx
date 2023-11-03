// rafce
import React from 'react'

const divStyle = {
    color: 'white',
    height: '100vh',  
    width: '100vw',
    margin : '50px',
    overflow: "hidden"
  };

const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

function getGreeting(user) {
    if (user) {
     return <h1>Hello, {formatName(user)}!</h1>;
   }
   return <h1>Hello, Stranger.</h1>;
  }

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };
  
const firstSection = () => {

  return (
    <div
    style={divStyle}
    >
    // try here
    
    </div>
  )
}

export default firstSection

