import React, { Component } from 'react';
import CrystalImage from './Crystal';
import Score from "./Score";
import Modal from './Modal';



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
            randIntImgOne: this.randomizeInt(1, 10),
            randIntImgTwo: this.randomizeInt(1, 10),
            randIntImgThree: this.randomizeInt(1, 10),
            randIntImgFour: this.randomizeInt(1, 10),
            result: 'Won',
        };
        this.handleClick = this.handleClick.bind(this)
        this.restart = this.restart.bind(this)
    }

    componentDidMount() {
        
        this.setState({
            randIntImgOne: this.randomizeInt(1, 10),
            randIntImgTwo: this.randomizeInt(1, 10),
            randIntImgThree: this.randomizeInt(1, 10),
            randIntImgFour: this.randomizeInt(1, 10),
        })
    }

    changeBG() { 
        let idRoot = document.getElementById('root');
        document.body.style.background = "url('./images/background-game2.jpg')";
        document.body.style.backgroundSize = '361px 640px'
        idRoot.style.background = "rgba(255, 0, 0, 0.5)"
    }
    randomizeInt(a, b) {
        return (Math.floor(Math.random() * (a - b)) + 10)
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
                wins: this.state.wins + 1,
                result: 'won!!',
            }), this.reset);
            console.log('ganaste!')
            this.openModal()
        }
        else if (this.state.number > this.state.randInt) {
            this.setState(() => ({ result: 'lost!',losses: this.state.losses + 1 }), this.reset);
            console.log('perdistess')
            this.openModal()
        }
    }
    
    openModal(){
        let modalOuter= document.querySelector('.modal-outer');       
         modalOuter.classList.add('open');
    }


    handleClick() {
        this.setState({
            start: true
        })
        this.changeBG();
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
    restart() {
        this.setState({
            number: 0,
            wins: 0,
            losses: 0,
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
                                <h4 id='instructions-header'>&#9753;Instructions&#10087;</h4>
                <p className='instructions'>     
                &#9753;You will be given a random number at the start of the game.<br />

                &#9753;There are four crystals below by clicking on a crystal you will add a specific amount of points to your total score.<br/>

                &#9753;You win the game by matching your total score to random number<br/>
                
                &#9753;You lose the game if your total score goes above the random number.<br/>

                &#9753;The value of each crystal is hidden from you until you click on it.<br/>

                &#9753;Each time when the game starts. the game will change the values of each crystal.<br/>

                &#9753;Memorize before you cannot see the numbers again!&#10087;
        </p>
                <button className='myButton' onClick={this.handleClick}>Start!</button></div>)
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
                    <div className='imagesDiv1'>
                        <CrystalImage id={'image1'} getRandNum={this.getRandNum} src={this.state.pictures[0]} randIntImg={this.state.randIntImgOne} ></CrystalImage>
                    </div>
                    <div className='imagesDiv2'>
                        <CrystalImage id={'image2'} getRandNum={this.getRandNum} src={this.state.pictures[2]} randIntImg={this.state.randIntImgThree} ></CrystalImage>
                    </div>
                    <div className='imagesDiv3'>
                        <CrystalImage id={'image3'} getRandNum={this.getRandNum} src={this.state.pictures[1]} randIntImg={this.state.randIntImgTwo}></CrystalImage>
                    </div>
                    <div className='imagesDiv4'>
                        <CrystalImage id={'image4'} getRandNum={this.getRandNum} src={this.state.pictures[3]} randIntImg={this.state.randIntImgFour}></CrystalImage>
                    </div>
                    <Modal wins={this.state.wins} losses={this.state.losses} result={this.state.result} restart={this.restart}></Modal>
                </div >
            )
        }

    }
};

