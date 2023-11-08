import React from 'react';
import GitHub  from '../../assets/images/GitHub.png';
import Gmail  from '../../assets/images/Gmail.png';
import Twitter  from '../../assets/images/Twitter.png';
import LinkedIn  from '../../assets/images/LinkedIn.png';

const ContactPage = () => {

    return (
        <div>
            <h1>This is my Contact Page</h1>
            <a href="https://github.com/Sbrunelli433">
                <img src={GitHub} alt="GitHub . logo"/>
            </a>
            <a href="https://www.linkedin.com/in/stevebrunelli/">
                <img src={LinkedIn} alt="LinkedIn logo"/>
            </a>
            <a href="https://twitter.com/SteveBrunelli?lang=en">
                <img src={Twitter} alt="Twitter logo"/>
            </a>
            <a href="mailto:brunes46@gmail.com">
                <img src={Gmail} alt="Gmail logo"/>
            </a>
        </div>
    );
}

export default ContactPage;