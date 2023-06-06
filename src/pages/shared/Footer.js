import React from 'react';

const Footer = () => {
    return (
        <div className="lg:bg-[url('/src/assets/images/footer.png')] bg-cover bg-center pt-10">
            <footer className="footer p-10 text-accent  py-20 lg:px-12">
                <div>
                    <span className="footer-title">Services</span>
                    <a href="!#" className="link link-hover">Emergency setup</a>
                    <a href="!#" className="link link-hover">Monthly Checkup</a>
                    <a href="!#" className="link link-hover">Weekly Checkup</a>
                    <a href="!#" className="link link-hover">Full Setup</a>
                </div>
                <div className='lg:px-20'>
                    <span className="footer-title">Device & Software</span>
                    <a href="!#" className="link link-hover">Livestock Basic</a>
                    <a href="!#" className="link link-hover">Livestock Pro (coming soon)</a>
                    <a href="!#" className="link link-hover">Mobile App & Web App</a>
                </div>
                <div>
                    <span className="footer-title">Our Address</span>
                    <p>BT7, Berliner Tor, Hamburg 20537</p>
                </div>
            </footer>
            <div className="footer footer-center p-6 text-accent">
                <div>
                    <p className='font-semibold'>Copyright 2023 All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;