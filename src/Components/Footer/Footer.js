import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <section>
            <p style={{
                position: 'fixed',
                bottom: '0',
                left: '0',
                right: '0',
                zIndex: '-1'
            }} className="text-center font-700 text-bluish montserrat">@ {date} All rights reserved by Protyasha Roy</p>
        </section>
    );
};

export default Footer;