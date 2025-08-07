import React from 'react';

function Contactpage() {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
            <header style={{
                backgroundColor: '#28a745',
                color: 'white',
                padding: '60px 20px',
                textAlign: 'center'
            }}>
                <h1 style={{ fontSize: '36px', marginBottom: '10px' }}>Contact Us</h1>
                <p style={{ fontSize: '18px', margin: 0 }}>We'd love to hear from you! Reach out anytime.</p>
            </header>

            <section style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '40px 20px'
            }}>
                <div style={{
                    backgroundColor: '#fff',
                    padding: '30px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                    width: '100%',
                    maxWidth: '500px'
                }}>
                    <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Send Us a Message</h2>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <input type="text" placeholder="Your Name" style={inputStyle} />
                        <input type="email" placeholder="Your Email" style={inputStyle} />
                        <textarea placeholder="Your Message" rows="5" style={inputStyle}></textarea>
                        <button type="submit" style={{
                            padding: '10px 20px',
                            backgroundColor: '#28a745',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}>Send</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    outline: 'none'
};

export default Contactpage;
