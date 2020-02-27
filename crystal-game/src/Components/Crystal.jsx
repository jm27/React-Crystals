import React from 'react';


export default function CrystalImage(props) {
  function randNum() {
   var imgRandNum = Math.floor(Math.random() * (10 - 1)) + 1
  return imgRandNum
  }

  function getRandNum(e){
   const num = e.getAttribute('datatype');
   console.log(num)
  }

  return (
      <img className='images' onClick={() => console.log(this)} datatype={randNum()} alt='Crystals' src={props.src}></img>
    );
  }
