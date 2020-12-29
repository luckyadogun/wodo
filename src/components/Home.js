import React, { Component } from 'react';
import Fonts from './constants';
import MainSVGComponent from './assets/HomeSVG';


class Home extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div id="home" 
                className="py-32 px-10 flex-row justify-center text-center">
                <h1 
                    className="                          
                        text-4xl md:text-6xl
                        tracking-tight
                        leading-none
                        font-bold 
                        mb-10" 
                        style={Fonts.home.main}>
                    same standups, more fun!
                </h1>
                
                <p 
                    className="text-lg tracking-wide mb-10"
                    style={Fonts.home.body}>
                    WoDo is an exciting new way for small dev
                    teams to run standups with less buzz-kill.
                </p>

                <button 
                    style={Fonts.home.body}
                    className="
                        bg-black 
                        text-white 
                        px-10 
                        py-4
                        hover:bg-purple-800
                        focus:outline-none
                        ">
                    Get started for free
                </button>

                <MainSVGComponent />
            </div>
        )
    }
}


export default Home;