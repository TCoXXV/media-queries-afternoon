import React, { Component } from 'react';

export default class Nav extends Component {
    render() {
        return (
            <header className='nav'>
          <div className='divbox'>
            <div><a className='name' href="#">Start Bootstrap</a>
            </div>
            <div>
              <ul>
                <li><a className='headera' href="#">SERVICES</a></li>
                <li><a className='headera' href="#">PORTFOLIO</a></li>
                <li><a className='headera' href="#">ABOUT</a></li>
                <li><a className='headera' href="#">TEAM</a></li>
                <li><a className='headera' href="#">CONTACT</a></li>
              </ul>
            </div>
          </div>
        </header>
        );
    }
}