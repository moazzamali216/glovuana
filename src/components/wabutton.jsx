"use client";
import React, { useState } from 'react';
// Correct import

const WhatsAppButton = ({ phoneNumber }) => {
    const [showForm, setShowForm] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
            setShowForm(false);
            setMessage('');
        }
    };

    return (
        <div>
            <button
                onClick={() => setShowForm(true)}
                style={styles.button}>
                <i className="fa-brands text-[35px] fa-whatsapp"></i>
            </button>

            {showForm && (
                <div style={styles.formContainer}>
                    <form onSubmit={handleSubmit} style={styles.form}>
                        <textarea
                            placeholder="Type your message here..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            style={styles.textarea}
                        />
                        <div style={styles.buttonContainer}>
                            <button type="submit" style={styles.submitButton}>
                                Send
                            </button>
                            <button type="button" onClick={() => setShowForm(false)} style={styles.closeButton}>
                                Close
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

const styles = {
    button: {
        position: 'fixed',
        bottom: '50px',
        zIndex: '1000',
        left: '20px',
        backgroundColor: '#25D366',
        color: 'white',
        padding: '14px 18px',
        border: 'none',
        borderRadius: '100%',
        cursor: 'pointer',
        fontSize: '16px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.1s, box-shadow 0.1s',
    },
    formContainer: {
        position: 'fixed',
        bottom: '120px',
        left: '20px',
        backgroundColor: '#fff',
        padding: '20px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
    },
    form: {
        display: 'flex',
        width: '300px',
        flexDirection: 'column',
    },
    textarea: {
        width: '100%',
        height: '200px',
        marginBottom: '10px',
        borderRadius: '5px',
        padding: '10px',
        border: '1px solid #ccc',
        fontSize: '14px',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    submitButton: {
        backgroundColor: '#25D366',
        color: 'white',
        padding: '12px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginRight: '10px',
        minWidth: '80px',
    },
    closeButton: {
        backgroundColor: 'lightgray',
        color: 'black',
        padding: '12px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        minWidth: '80px',
    },
};

export default WhatsAppButton;