import React, { Component } from 'react';

export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restart: false,
             };
        this.handleClick = this.handleClick.bind(this)
    }
}