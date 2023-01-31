import React from "react";
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Work Day Schedule',
    github: 'https://github.com/reyno405/work-day-planner',
    demo: 'https://reyno405.github.io/work-day-planner/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Random Flight Generator',
    github: 'https://github.com/reyno405/Random-Flight-Generator',
    demo: 'https://reyno405.github.io/Random-Flight-Generator/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Movie Site',
    github: 'https://github.com/reyno405/T-REX-MOVIES',
    demo: 'https://reyno405.github.io/T-REX-MOVIES/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Weather App',
    github: 'https://github.com/reyno405/weather-conditions',
    demo: 'https://reyno405.github.io/weather-conditions/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Analog Clock',
    github: 'https://github.com/reyno405/Analog-Clock',
    demo: 'https://reyno405.github.io/Analog-Clock/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Tesla Clone',
    github: 'https://github.com/reyno405/Tesla-Website-Clone',
    demo: 'https://reyno405.github.io/Tesla-Website-Clone/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;
