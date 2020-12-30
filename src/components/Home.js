import React, { Component } from 'react';
import Fonts, { Button } from './constants';
import Lottie from 'react-lottie';
import animationData from './assets/man'


class Home extends Component {
    constructor (props) {
        super(props);
    }

    render () {

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          };

        return (
            <div id="home" className="flex-row justify-center text-center">
                <div id="header-container" className="py-12 md:py-32 px-10">
                    <h1 
                        className="                          
                            text-5xl md:text-6xl
                            tracking-tight
                            leading-none
                            font-bold 
                            mb-10" 
                            style={Fonts.home.main}>
                        same standups, more fun!
                    </h1>
                    
                    <p 
                        className="text-xl tracking-wide mb-10"
                        style={Fonts.home.body}>
                        WoDo is an exciting new way for small dev
                        teams to run standups with less buzz-kill.
                    </p>

                    <Button 
                        fontStyle={Fonts.home.main} 
                        text='Get started for free'
                        className="
                            bg-black 
                            text-white 
                            px-10 
                            py-4
                            hover:bg-primary
                            focus:outline-none
                    " />

                    <div className="mt-4">
                        <Lottie 
                            options={defaultOptions}
                            height={400}
                            width={400}
                        />
                    </div>
                </div>

                <div className="bg-gray-200 h-auto py-10 px-8" style={Fonts.home.body}>
                    <h1 
                        style={Fonts.home.main} 
                        className="text-3xl tracking-tighter mb-4">                        
                        WoDo is not Trello
                    </h1>

                    <p style={Fonts.home.body} className="text-lg tracking-normal leading-normal mb-20">
                        If you’re looking for features like assigning roles, adding deadlines, attachments, etc.
                        then please check out Trello, Notion, or something else. WoDo is efficient
                        in its simplicity — daily tasks & supervision.
                    </p>

                    <div id="cards" className="bg-white h-60">

                    </div>
                </div>


            </div>
        )
    }
}


export default Home;