import React, { Component } from 'react';
import CrystalImage from './Crystal';
import Score from "./Score";



export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            start: false,
            number: 0,
            pictures: ['./images/crystal-1.png', './images/crystal-2.png', './images/crystal-3.png', './images/crystal-4.png'],
            randInt: Math.floor(Math.random() * (60 - 10)) + 10,
            wins: 0,
            losses: 0, 
            randIntImgOne: this.randomizeInt(1,10),
            randIntImgTwo: this.randomizeInt(1,10),
            randIntImgThree: this.randomizeInt(1,10),
            randIntImgFour: this.randomizeInt(1,10),
        };
        this.handleClick = this.handleClick.bind(this)
    }
    randomizeInt(a,b){
        return  (Math.floor(Math.random() * (a - b)) + 10)    
    }

    getRandNum = (e) => {
        console.log(e.target)
        let imgNumber = parseInt(e.target.getAttribute('datatype'));
        this.setState({
            number: (this.state.number + imgNumber)
        }, this.gameLogic);
    }

    gameLogic() {
        if (this.state.number === this.state.randInt) {
            this.setState(() => ({
                wins: this.state.wins + 1
            }), this.reset);
            console.log('ganaste!')
        }
        else if (this.state.number > this.state.randInt) {
            this.setState(() => ({ losses: this.state.losses + 1 }), this.reset);
            console.log('perdistess')
        }
    }

    handleClick() {
        this.setState({
            start: true
        })
    }
    reset() {
        this.setState({
            number: 0,
            randInt: Math.floor(Math.random() * (60 - 10)) + 10,
            randIntImgOne: Math.floor(Math.random() * (1 - 10)) + 10,
            randIntImgTwo: Math.floor(Math.random() * (1 - 10)) + 10,
            randIntImgThree: Math.floor(Math.random() * (1 - 10)) + 10,
            randIntImgFour: Math.floor(Math.random() * (1 - 10)) + 10,
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
                < div className='game-lobby' >
                                        <div className="NumDiv">
                        <Score title='Number to Match' score={this.state.randInt} ></Score>
                        <Score title='Your Number' score={this.state.number} ></Score>
                    </div>
                    <div className='ScoresDiv'>
                        <Score title='Wins' score={this.state.wins}></Score>
                        <Score title='Losses' score={this.state.losses}></Score>
                    </div>
                    <div className='imagesDiv'>
                        <CrystalImage getRandNum={this.getRandNum} src={this.state.pictures[0]} randIntImg={this.state.randIntImgOne} ></CrystalImage>
                        <CrystalImage getRandNum={this.getRandNum} src={this.state.pictures[1]} randIntImg={this.state.randIntImgTwo}></CrystalImage>
                        <CrystalImage getRandNum={this.getRandNum} src={this.state.pictures[2]} randIntImg={this.state.randIntImgThree} ></CrystalImage>
                        <CrystalImage getRandNum={this.getRandNum} src={this.state.pictures[3]} randIntImg={this.state.randIntImgFour}></CrystalImage>
                    </div>
                </div >
            )
        }

    }
};

