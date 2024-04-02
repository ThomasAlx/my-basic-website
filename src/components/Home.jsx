import '../App.css';
import React from 'react';
import logo from '../logo.svg';
import styles from '../styles/SubPage.module.css';

class Home extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <h2>This is the Home page</h2>
                <p>You can write some generic things here...</p>
            </div>
            
        );
    }

}

export default Home;