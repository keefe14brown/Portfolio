import React, { Component } from 'react';
import './CSS/contact.css';

export class Contact extends Component {
  email = () => {
    window.location.href = 'mailto:mham7714@gmail.com';
  };

  render() {
    return (
      <div className='contact'>
        <p>
          <strong>Say Hello</strong>
        </p>

        <a href='#' target='_blank' onClick={this.email}>
          mham7714@gmail.com
        </a>
        <a>330.671.0827</a>
        <a href='https://github.com/MilesHamilton' target='_blank'>
          GitHub
        </a>
        <a href='https://www.linkedin.com/in/miles-hamilton/' target='_blank'>
          LinkedIn
        </a>
      </div>
    );
  }
}

export default Contact;
