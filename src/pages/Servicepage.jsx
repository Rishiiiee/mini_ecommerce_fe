import React from 'react';

function Servivcepage() {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
            <header style={{
                backgroundColor: '#007BFF',
                color: 'white',
                padding: '60px 20px',
                textAlign: 'center'
            }}>
                <h1 style={{ fontSize: '36px', marginBottom: '10px' }}>Our Services</h1>
                <p style={{ fontSize: '18px', margin: 0 }}>We provide top-notch solutions to boost your business.</p>
            </header>

            <section style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '20px',
                padding: '40px 20px'
            }}>
                <div style={cardStyle}>
                    <h2 style={cardTitle}>Web Development</h2>
                    <p style={cardText}>Custom websites and web apps tailored to your needs.</p>
                </div>
                <div style={cardStyle}>
                    <h2 style={cardTitle}>UI/UX Design</h2>
                    <p style={cardText}>Beautiful, user-friendly designs that keep users engaged.</p>
                </div>
                <div style={cardStyle}>
                    <h2 style={cardTitle}>SEO Optimization</h2>
                    <p style={cardText}>Improve your site ranking and attract more traffic.</p>
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
    color: '#666',
};

export default Servivcepage;
