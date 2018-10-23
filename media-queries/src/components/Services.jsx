import React, { Component } from 'react';

export default class Services extends Component {
    render() {
        return (
            <div className="service">
                <div className="ser">
                 <h1>SERVICES</h1>
                 <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className="ecom">
                    <div className="info"><div className='icon'></div><p className='ecomtitle'>E-Commerce</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p></div>
                    <div className="info"><div className='icon'></div><p className='ecomtitle'>Responsive Design</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p></div>
                    <div className="info"><div className='icon'></div><p className='ecomtitle'>Web Security</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p></div>
                </div>
            </div>
        );
    }
}