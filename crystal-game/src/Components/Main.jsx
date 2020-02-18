import React from 'react';
import CrystalImage from './Crystal';

export default function main() {
    return (
        <div>
            <p className='instructions'> Instructions
            You will be given a random number at the start of the game.

            There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score.

            You win the game by matching your total score to random number, you lose the game if your total score goes above the random number.

            The value of each crystal is hidden from you until you click on it.

            Each time when the game starts. the game will change the values of each crystal.
            </p>
            <div className='images'>
                <CrystalImage src='https://cdn.shopify.com/s/files/1/0912/7764/articles/blue-crystals-vector-clipart_ed1ae347-444b-4261-9001-1137ae396bab_2048x.png?v=1563439532'></CrystalImage>
                <CrystalImage src='https://cdn.shopify.com/s/files/1/0912/7764/articles/blue-crystals-vector-clipart_ed1ae347-444b-4261-9001-1137ae396bab_2048x.png?v=1563439532'></CrystalImage>
                <CrystalImage src='https://cdn.shopify.com/s/files/1/0912/7764/articles/blue-crystals-vector-clipart_ed1ae347-444b-4261-9001-1137ae396bab_2048x.png?v=1563439532'></CrystalImage>
                <CrystalImage src='https://cdn.shopify.com/s/files/1/0912/7764/articles/blue-crystals-vector-clipart_ed1ae347-444b-4261-9001-1137ae396bab_2048x.png?v=1563439532'></CrystalImage>            
                </div>
        </div>
    )
}