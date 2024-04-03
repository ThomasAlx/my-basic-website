import '../App.css';
import React, { useState } from 'react';
import logo from '../logo.svg';
import styles from '../styles/SubPage.module.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function DateSelector(){
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            Preferred resolution date: <DatePicker 
                selected={startDate} 
                onChange={(date) => setStartDate(date)} 
            />
        </div>
    )

}

class Estimate extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <h1 className={styles.warning}>THIS PAGE IS JUST A DEMO.</h1>
                <h1 className={styles.warning}>DO NOT SUBMIT ANY DATA.</h1>
                <h2>Submit your documents to get an estimate!</h2>
                <p> 
                    We will evaluate your documents
                    and we will contact you soon.  
                </p>
                <div>
                    <p>
                        <input type="text" id="nameInput" placeholder="Name" className={styles.form_text}/>
                    </p>
                    <p>
                        <input type="text" id="lastNameInput" placeholder="Last Name" className={styles.form_text}/>
                    </p>
                    <p>
                        <input type="email" id="emailInput" placeholder="Email" className={styles.form_text}/>
                    </p>
                    <DateSelector/> 
                    <p>
                        Attach documents: <input type="file" id="fileInput" placeholder="Attach your documents" className={styles.form_text}/>
                    </p>
                    <p>
                        <textarea id="messageInput" placeholder="Enter your message." rows={4} cols={50} className={styles.form_text}/>
                    </p>
                </div>
            </div>
            
        );
    }

}

export default Estimate;