import React, { Component } from 'react';
import Score from './Score'

export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restart: false,
        };
        // this.handleClick = this.handleClick.bind(this)
    }
    closeModal() {
        let modalOuter= document.querySelector('.modal-outer');       
        modalOuter.classList.remove('open');
      }
    render() {
        return (<div className="modal-outer">
            <div className="modal-inner">
    <h2>You {this.props.result}</h2>
                <Score title='Wins' score={this.props.wins}></Score>
                <Score title='Losses' score={this.props.losses}></Score>
                <button className='modalButton' onClick={this.closeModal}>Go again!</button>
                <button className='modalButton' onClick={() => { this.props.restart(); this.closeModal();}} >Reset Score</button>
            </div>
        </div>)
    }
}