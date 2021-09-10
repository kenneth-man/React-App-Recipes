import React from 'react';
import googlePlusIcon from '../Res/google-plus-circle.svg';
import instagramIcon from '../Res/instagram.svg';
import redditIcon from '../Res/reddit-square.svg';
import tumblrIcon from '../Res/tumblr-square.svg';
import youtubeIcon from '../Res/youtube.svg';

const Footer = () => {
    const socialArray = [
        {
            icon: googlePlusIcon,
            href: 'https://github.com/kenneth-man'
        },
        {
            icon: instagramIcon,
            href: 'https://www.linkedin.com/in/kenneth-man-035970165/'
        },
        {
            icon: redditIcon,
            href: 'https://spoonacular.com/about'
        },
        {
            icon: tumblrIcon,
            href: 'https://www.youtube.com/watch?v=R-do5R-T-BA'
        },
        {
            icon: youtubeIcon,
            href: 'https://www.lipsum.com/'
        },
    ]

    return (
        <footer className='footer row'>
            <h1>Spoonacular © est 2018. All Rights Reserved</h1>

            <div className='footer__icons row' style={{width: '15%', justifyContent: 'space-between'}}>
                {
                    socialArray.map((curr, index) => 
                        <a key={index} href={curr.href} className='social-link'>
                            <img src={curr.icon} alt=''/>
                        </a>
                    )
                }
            </div>
        </footer>
    )
}

export default Footer;