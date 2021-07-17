import React from 'react';


const Footer = () => {
    return (  
        <div className="footer">
            <div className="address">
                <h3>Address</h3>
                <div className="links">
                    <a href="mailto:softimag08@gmail.com">
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/simon-imanigirimpuhwe-2aaba7146/"
                    >
                        <i className="fa fa-linkedin-square" aria-hidden="true"></i
                    ></a>
                    <a href="https://github.com/SimonImanigirimpuhwe">
                        <i className="fa fa-github" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2021 Simon Imanigirimpuhwe</p>
            </div>
        </div>
    );
}
 
export default Footer;