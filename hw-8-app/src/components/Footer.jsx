import React from 'react';

import creator from "../images/creator.png";

import { HandySvg } from 'handy-svg';
import socialNetworkLink1 from "../images/social_net_link1.svg";
import socialNetworketLink2 from "../images/social_net_link2.svg";

/* eslint-disable jsx-a11y/anchor-is-valid */

function Footer() {
    return (
        <footer className="footer">
            <section>
                <div className="subscride_info center">
                    <figure>
                        <div className="creator">
                            <img src={creator} alt="Creator's" />
                            <p className="creator_text">
                                “Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                                <i> a pulvinar purus condimentum</i>
                                “
                            </p>
                        </div>
                    </figure>
                    <section>
                        <div className="subscribe_container">
                            <div className="subscribe_text">
                                <h3 className="subscribe_title">SUBSCRIBE</h3>
                                <h4 className="subscribe_subtitle">FOR OUR NEWLETTER AND PROMOTION</h4>
                            </div>
                            <div className="subscribe_form">
                                <input
                                    className="subscribe_form_input"
                                    type="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                />
                                <a className="subscribe_form_button" href="#">Subscribe</a>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <section>
                <div className="contacts center">
                    <p className="copyright_text">© 2023  Brand  All Rights Reserved.</p>
                    <div className="social_nets_bar">
                        <div className="social_net_item">
                            <HandySvg src={socialNetworkLink1} className="social_net_link" width="13" height="16" />
                        </div>
                        <div className="social_net_item">
                            <HandySvg src={socialNetworketLink2} className="social_net_link" width="17" height="16" />
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;