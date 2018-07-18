import React from 'react';
var ReactDOM = require('react-dom');
var Marquee = require('react-marquee');

class Graphics extends React.Component {

    render() {
        return (
            <div className="App__Graphics__wrapper">
                <div className="lint lint__red">
                    <span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span>
                </div>
                <div className="lint lint__blue">
                    <span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span>
                </div>
                <div className="lint lint__yellow">
                    <div id="div1">
                        <span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span>
                    </div>
                    <div id="div2">
                        <span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span>
                    </div>
                </div>
                <div className="lint lint__blue blue__2">
                    <span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span>
                </div>
                <div className="lint lint__black">
                <span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span><span>STRAPPED</span>
                </div>
            
            </div>
        );
    }
};

export default Graphics;