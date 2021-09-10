import React from 'react';
import downArrowIcon from '../Res/caret-down.svg';

const Home = () => {

    const scrollIntoViewOnClick = (eventTarget) => {
        const currSection = Array.from(eventTarget.closest('.home__section').classList).slice(1, 2)[0];
        const nextSectionNumber = Number(currSection.slice(-1)) + 1;
        document.querySelector(`.home__section--${nextSectionNumber}`).scrollIntoView({behavior: "smooth"});
    }

    return (
        <div className='page col'>
            <div className='home__section home__section--1 col'>
                <h1>Spoonacular API APP</h1>

                <h2>Our knowledge engineers spent years crafting our complex food ontology, which allows us to understand the relationships between ingredients, recipes, nutrition, allergens, and more.</h2>
            
                <iframe src='https://www.youtube.com/embed/R-do5R-T-BA' width="1080" height="520" frameBorder="0" allowFullScreen allow='encrypted-media'></iframe>

                <button className='center' onClick={e => scrollIntoViewOnClick(e.target)}>
                    <img src={downArrowIcon} alt='down-arrow-icon'/>
                </button>
            </div>

            <div className='home__section home__section--2 col'>
                <h1>① The standard Lorem Ipsum passage, used since the 1500s</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
                <a href='https://github.com/kenneth-man'>Get Started</a>

                <button className='center' onClick={e => scrollIntoViewOnClick(e.target)}>
                    <img src={downArrowIcon} alt='down-arrow-icon'/>
                </button>
            </div>

            <div className='home__section home__section--3 col'>
                <h1>② Section 1.10.32 of "de Finibus Bonorum et Malorum"</h1>

                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>

                <a href='https://github.com/kenneth-man'>Learn More</a>

                <button className='center' onClick={e => scrollIntoViewOnClick(e.target)}>
                    <img src={downArrowIcon} alt='down-arrow-icon'/>
                </button>
            </div>

            <div className='home__section home__section--4 col'>
                <h1>③ 1914 translation by H. Rackham</h1>

                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.</p>

                <a href='https://github.com/kenneth-man'>Contact Us</a>

                <button className='center' onClick={e => scrollIntoViewOnClick(e.target)}>
                    <img src={downArrowIcon} alt='down-arrow-icon'/>
                </button>
            </div>

            <div className='home__section home__section--5 col'>
                <h1>④ Contrary to popular belief, Lorem Ipsum is not simply random text</h1>

                <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae. Nam libero tempore, cum soluta nobis est eligendi optio Nam libero tempore, cum soluta nobis.</p>

                <a href='https://github.com/kenneth-man'>Get Started</a>
            </div>
        </div>
    )
}

export default Home;