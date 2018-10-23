import React, { Component } from 'react';

export default class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio">
                <div className='port'>
                    <h1>PORTFOLIO</h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className='portphotos'>
                    <div className='photor'>
                        <div>
                            <div className='portpic'></div>
                            <div className='portinfo'>
                               <h2>Threads</h2>
                                <p>Illustration</p>
                            </div>
                        </div>
                        <div>
                            <div className='portpic'></div>
                            <div className='portinfo'>
                                <h2>Explore</h2>
                                <p>Graphic Design</p>
                            </div>
                        </div>
                        <div>
                            <div className='portpic'></div>
                            <div className='portinfo'>
                                <h2>Finish</h2>
                                <p>Identity</p>
                            </div>
                        </div>
                    </div>
                    <div className='photor'>
                        <div>
                            <div className='portpic'></div>
                            <div className='portinfo'>
                                <h2>Lines</h2>
                                <p>Branding</p>
                            </div>
                        </div>
                        <div>
                            <div className='portpic'></div>
                            <div className='portinfo'>
                                <h2>Southwest</h2>
                                <p>Website Design</p>
                            </div>
                        </div>
                        <div>
                            <div className='portpic'></div>
                            <div className='portinfo'>
                                <h2>Window</h2>
                                <p>Photography</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}