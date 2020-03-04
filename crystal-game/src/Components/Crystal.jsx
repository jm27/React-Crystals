import React from 'react';


export default function CrystalImage(props) {
  function randNum() {
   var imgRandNum = Math.floor(Math.random() * (10 - 1)) + 1
  return imgRandNum
  }

  function getRandNum(e){
   console.log(e.target.alt)
  }

  return (
      <img className='images' onClick={getRandNum} alt={randNum()} src={props.src}></img>
    );
  }
