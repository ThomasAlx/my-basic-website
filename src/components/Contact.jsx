import '../App.css';
import React from 'react';
import logo from '../logo.svg';
import styles from '../styles/SubPage.module.css'

class Contact extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <h2>This is the Contact page</h2>
                <p> Let's have your contact here</p>
            </div>
            
        );
    }

}

export default Contact;