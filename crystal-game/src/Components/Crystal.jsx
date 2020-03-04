import React from 'react';


export default function CrystalImage(props) {
  function randNum() {
   var imgRandNum = Math.floor(Math.random() * (10 - 1)) + 1
   console.log(imgRandNum)
  return imgRandNum
  }

  return (
      <img className='images' onClick={props.getRandNum} alt={randNum()} src={props.src}></img>
    );
  }
