import React from "react";
import "../App.css";
import Carousel from 'react-bootstrap/Carousel';

var HomeData = [
  {
    id: 1,
    image: require('../assets/images/img-hero1.jpeg'),
    title: 'Green Land Glow',
    description: 'Plant Feed The Soul',
    link: 'https://www.google.com'
  },
  {
    
    id: 2,
    image: require('../assets/images/img-hero2.jpeg'),
    title: 'Green Land Glow',
    description: 'Plant Feed The Soul',
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: require('../assets/images/img-hero3.jpeg'),
    title: 'Green Land Glow',
    description: 'Plant Feed The Soul',
    link: 'https://www.twitter.com'
  }
]

function Home() {
  return (
    <section id="home" className="Home-block">
       <Carousel>
          {
            HomeData.map(Home => {
              return (
                <Carousel.Item key={Home.id}>
                  <img
                    className="d-block w-100"
                    src={Home.image}
                    alt={"slide " + Home.id}
                  />
                  <Carousel.Caption>
                    <h2>{Home.title}</h2>
                    <p>{Home.description}</p>
                    <a className="btn btn-primary" href={Home.link}>Learn More <i className="fas fa-chevron-right"></i></a>
                  </Carousel.Caption>             
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
  );
}

export default Home;