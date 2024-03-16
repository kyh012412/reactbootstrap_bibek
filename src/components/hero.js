import React from 'react';
import { CarouselCaption, CarouselItem } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

var heroData = [
  {
    id: 1,
    image: require('../assets/images/img-hero1.jpg'),
    title: 'The perfect design for your website',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    link: 'https://www.google.com',
  },
  {
    id: 2,
    image: require('../assets/images/img-hero2.jpg'),
    title: 'Start Your Future Financial Plan',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    link: 'https://www.facebook.com',
  },
  {
    id: 3,
    image: require('../assets/images/img-hero3.jpg'),
    title: 'Enjoy the Difference',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    link: 'https://www.twitter.com',
  },
];

const AppHero = () => {
  const srcImages = [
    require('../assets/images/img-hero1.jpg'),
    require('../assets/images/img-hero2.jpg'),
    require('../assets/images/img-hero3.jpg'),
  ];
  return (
    <section id="home" className="hero-block">
      <Carousel>
        {heroData.map((hero) => {
          return (
            <CarouselItem key={hero.id}>
              <img
                className="d-block w-100"
                src={hero.image}
                alt={'slide ' + hero.id}
              />
              <CarouselCaption>
                <h3>{hero.title}</h3>
                <p>{hero.description}</p>
                <a className="btn btn-primary" href={hero.link}>
                  Learn More <i className="fas fa-chevron-right"></i>
                </a>
              </CarouselCaption>
            </CarouselItem>
          );
        })}
      </Carousel>
    </section>
  );
};

export default AppHero;
