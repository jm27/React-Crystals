import React from 'react';

export default function randomNum(){
   const randInt =  Math.floor(Math.random() * (60 - 10)) + 10
console.log(randInt)
   return (
       <h3>
           Number to Match : {randInt}
       </h3>
   )
}