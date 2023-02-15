import React, { Component } from 'react';
import './root.css';
import styles from './Header.css';
 
class Header extends Component {
    render() { 
        return ( 
            <div className={styles}>
                <h1>Samuel Chandler</h1>
                <h2>Computer Engineer</h2>
            </div>
        );
    }
}
 
export default Header;