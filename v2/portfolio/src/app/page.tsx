import './page.scss'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import Skills from 'components/Skills/Skills'
import Projects from 'components/Projects/Projects'
import Carousel from 'components/Carousel/Carousel'
import CarouselItem from 'components/Carousel/CarouselItem/CarouselItem'


export default function Home() {

  const carouselItems =  [
    (<CarouselItem key={1}>
      <img className="carousel-item" src="assets/banner1.JPG"></img>
    </CarouselItem>), 
    (<CarouselItem key={2}>
      <img className="carousel-item" src="assets/banner2.JPG"></img>
    </CarouselItem>)
]
  return (
    <div className="App">
      <Header />
      <div className="main">
        {/* <div className="banner"></div> */}
        <Carousel hideNav={true} carouselItems={carouselItems}></Carousel>
        <div className="main__container">
          <div className="about-myself">
            <div className="about-myself__content u-padding-16" id="about">
              <div className="about-myself__flip-card">
                <div className="about-myself__flip-card__container">
                  <img className="about-myself__flip-card__container--front" src="assets/cartoon_avatar.png"/>
                  <img className="about-myself__flip-card__container--back" src="assets/avatar2.jpg"/>
                  {/* <span className="about-myself__flip-card__container--front"></span>
                  <span className="about-myself__flip-card__container--back">
                  </span> */}
                </div>
              </div>
              <h2>About Myself</h2>
              <div className="u-margin-top-8">
                Hey there! I&apos;m <a className="about-myself__name" target="_blank" href="https://www.linkedin.com/in/li-hau-wan-87741214b/"><b>Li Hau</b></a> a front-end developer.
                Started my career as a front-end developer in 2019. Enjoy coding and developing new things. During my free time, I like to leisurely cruise around with my bike and explore.
              </div>
            </div>
          </div>
          <Skills />
          <Projects />
        </div>
      </div>
      <Footer />

    </div>
  );
}
