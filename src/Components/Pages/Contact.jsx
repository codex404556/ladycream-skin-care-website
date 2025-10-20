import React from 'react';

const Contact = () => {
    return (
        <>
            <section className="contact-section mt-5">
                <div className="container">
                    <h2 className="section-title">Keep In Touch with Us</h2>
                    <p className="section-subtitle">
                        Be the first to know about new skincare launches, exclusive offers, and <br />
                        expert beauty tips for radiant skin.
                    </p>

                    <div className="row contact-boxes">
                        {/* Address */}
                        <div className="contact-col">
                            <div className="contact-box  bg-transparent border-0">
                                <i className="ri-map-pin-line icon"></i>
                                <h5>Address</h5>
                                <p>Zayona District, Baghdad City Center,</p>
                                <p className="mb-4">Baghdad, Iraq – 10001</p>
                                <a href="https://maps.app.goo.gl/baghdad" target="_blank" rel="noopener noreferrer" className="link ">Get Direction</a>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="contact-col">
                            <div className="contact-box  bg-transparent border-0 ">
                                <i className="ri-phone-line icon"></i>
                                <h5>Contact</h5>
                                <p><strong>Mobile:</strong> +0000000000</p>
                                <p><strong>Hotline:</strong> +0000000000</p>
                                <p><strong>E-mail:</strong> support@renomtech.in</p>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="contact-col">
                            <div className="contact-box  bg-transparent border-0">
                                <i className="ri-time-line icon"></i>
                                <h5>Hour of operation</h5>
                                <p><strong>Mon – Fri:</strong> 08:30 – 20:00</p>
                                <p><strong>Sat & Sun:</strong> 09:30 – 21:30</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="contact-page">

                {/* MAP SECTION */}
                <section className="map-section container ">
                    <iframe
                        title="Our Location"
                        className="map rounded"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.2345678901234!2d44.3660667!3d33.3152417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x155f3e1b5c8b8b8b%3A0x1234567890abcdef!2sBaghdad%2C%20Iraq!5e0!3m2!1sen!2siq!4v1747981236067!5m2!1sen!2siq"
                        allowFullScreen
                    ></iframe>
                </section>

                {/* CONTACT FORM SECTION */}
                <section className="message-section">
                    <h2 className="form-title">Send A Message</h2>
                    <form className="contact-form">
                        <div className="row">
                            <input type="text" placeholder="Name" className="input" />
                            <input type="email" placeholder="Email" className="input" />
                        </div>
                        <div className="row">
                            <textarea placeholder="Message" className="textarea"></textarea>
                        </div>
                        <button type="submit" className="btn px-5">Submit</button>
                    </form>
                </section>

            </div>
        </>
    );
};

export default Contact;