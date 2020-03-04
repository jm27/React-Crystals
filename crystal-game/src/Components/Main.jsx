import React, { Component } from 'react';
import CrystalImage from './Crystal';
import Score from "./Score";
import Number from "./Number";



export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number:0,
            pictures: []
        };
    }

    getRandNum = (e) => {
        console.log(e.target.alt);
        this.setState({
            number: this.state.number
        });
        console.log(this.state.number)
    }

    render() {
        return (
            < div className='mainSection' >
                <p className='instructions'> Instructions
                You will be given a random number at the start of the game.

                There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score.

                You win the game by matching your total score to random number, you lose the game if your total score goes above the random number.

                The value of each crystal is hidden from you until you click on it.

                Each time when the game starts. the game will change the values of each crystal.
            </p>
                <div className='imagesDiv'>
                    <CrystalImage getRandNum={this.getRandNum} src='./images/crystal-1.jpg'></CrystalImage>
                    <CrystalImage getRandNum={this.getRandNum} src='./images/crystal-2.jpg'></CrystalImage>
                    <CrystalImage getRandNum={this.getRandNum} src='./images/crystal-3.jpg'></CrystalImage>
                    <CrystalImage getRandNum={this.getRandNum} src='./images/crystal-4.jpg'></CrystalImage>
                </div>
                <div className="NumDiv">
                    <Number></Number>
                    <Score title='Your Number' score={this.state.number}></Score>
                </div>
                <div className='ScoresDiv'>
                    <Score title='Wins' score='1'></Score>
                    <Score title='Losses' score='2'></Score>
                </div>
            </div >
        );
    }
};

