import React from 'react';

class Menu extends React.Component {
    render() {
        return ( 
        <div className="App__nav__wrapper">
            <div className="App__nav">
                <ul>
                    <li>Collection</li>
                    <li>About us</li>
                    <li>Shipping</li>
                </ul>
            </div>
        </div>
        );
    }
}

export default Menu;