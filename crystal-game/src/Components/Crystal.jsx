import React from 'react';


export default function CrystalImage(props) {
  const imgRandNum =  Math.floor(Math.random() * (10 - 1)) + 1
    return (
      <img className='images' datatype={imgRandNum} alt='Crystals' src={props.src}></img>
    );
  }
