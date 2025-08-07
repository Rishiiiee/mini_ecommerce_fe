import React from 'react';

function Aboutpage() {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#fdfdfd', minHeight: '100vh' }}>
            <header style={{
                backgroundColor: '#6c63ff',
                color: 'white',
                padding: '60px 20px',
                textAlign: 'center'
            }}>
                <h1 style={{ fontSize: '36px', marginBottom: '10px' }}>About Us</h1>
                <p style={{ fontSize: '18px', margin: 0 }}>Learn more about who we are and what we do.</p>
            </header>

            <section style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '20px',
                padding: '40px 20px'
            }}>
                <div style={cardStyle}>
                    <h2 style={cardTitle}>Our Mission</h2>
                    <p style={cardText}>We aim to deliver high-quality digital solutions that drive success.</p>
                </div>
                <div style={cardStyle}>
                    <h2 style={cardTitle}>Our Vision</h2>
                    <p style={cardText}>To be a trusted name in web services, known for creativity and excellence.</p>
                </div>
                <div style={cardStyle}>
                    <h2 style={cardTitle}>Our Team</h2>
                    <p style={cardText}>A passionate group of designers, developers, and creators building great things together.</p>
                </div>
            </section>
        </div>
    );
}

const cardStyle = {
    backgroundColor: 'white',
    padding: '25px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    width: '300px',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
};

const cardTitle = {
    margin: '0 0 10px 0',
    fontSize: '22px',
    color: '#333',
};

const cardText = {
    fontSize: '16px',
    color: '#555',
};

export default Aboutpage;
