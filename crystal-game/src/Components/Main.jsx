import React, { Component } from 'react';
import CrystalImage from './Crystal';
import Score from "./Score";



export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            start: false,
            number: 0,
            pictures: ['./images/crystal-1.jpg', './images/crystal-2.jpg', './images/crystal-3.jpg', './images/crystal-4.jpg'],
            randInt: Math.floor(Math.random() * (60 - 10)) + 10,
            wins: 0,
            losses: 0
        };
        this.handleClick=this.handleClick.bind(this)
    }

    getRandNum = (e) => {
        let imgNumber = parseInt(e.target.alt);
        this.setState({
            number: (this.state.number + imgNumber)
        }, this.gameLogic);
    }

    gameLogic() {
        if (this.state.number === this.state.randInt) {
            this.setState(() => ({
                wins: this.state.wins + 1
            }), console.log('ganastes!'));
        }
        else if (this.state.number > this.state.randInt) {
            this.setState(() => ({ losses: this.state.losses + 1 }), console.log("tu perdisteeeess"));
        }
    }

    handleClick() {
        this.setState({
            start: true
        })
    }

    render() {
        if (!this.state.start) {
            return (<div className='start'>
                <p className='instructions'> Instructions
                You will be given a random number at the start of the game.

                There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score.

                You win the game by matching your total score to random number, you lose the game if your total score goes above the random number.

                The value of each crystal is hidden from you until you click on it.

                Each time when the game starts. the game will change the values of each crystal.
        </p>
                <button onClick={this.handleClick}>Start!</button></div>)
        }
        else {
            return (

                < div className='mainSection' >
                    <div className='imagesDiv'>
                        <CrystalImage getRandNum={this.getRandNum} src={this.state.pictures[0]} ></CrystalImage>
                        <CrystalImage getRandNum={this.getRandNum} src={this.state.pictures[1]} ></CrystalImage>
                        <CrystalImage getRandNum={this.getRandNum} src={this.state.pictures[2]} ></CrystalImage>
                        <CrystalImage getRandNum={this.getRandNum} src={this.state.pictures[3]} ></CrystalImage>
                    </div>
                    <div className="NumDiv">
                        <Score title='Number to Match' score={this.state.randInt} ></Score>
                        <Score title='Your Number' score={this.state.number} ></Score>
                    </div>
                    <div className='ScoresDiv'>
                        <Score title='Wins' score={this.state.wins}></Score>
                        <Score title='Losses' score={this.state.losses}></Score>
                    </div>
                </div >
            )
        }

    }
};

