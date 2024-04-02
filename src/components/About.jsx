import React from 'react';

import styles from "../styles/SubPage.module.css"


class About extends React.Component {
    
    render() {
        return (
            <div className={styles.page}>
                <h2>About Page</h2>
                <main>
                    <p>This section contains information about...</p>
                </main>
            </div>
        )
    }
}



export default About;