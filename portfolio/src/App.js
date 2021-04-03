import logo from './logo.svg';
import './App.css';
import './App.scss'

import Header from "./HeaderComponent/Header"
import Skills from "./SkillsComponent/Skills"
import Projects from './ProjectsComponent/Projects';
import Footer from './FooterComponent/FooterComponent';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="main">
                <div className="banner"></div>
                <div className="main__container">
                    <div className="about-myself">
                        <div className="about-myself__content u-padding-16" id="about">
                            <div className="about-myself__flip-card">
                                <div className="about-myself__flip-card__container">
                                    <span className="about-myself__flip-card__container--front">
                                        LH
                                    </span>
                                    <span className="about-myself__flip-card__container--back">
                                    </span>
                                </div>
                            </div>
                            <h2>About Myself</h2>
                            <div className="u-margin-top-8">
                                Hey there! I'm <a className="about-myself__name" target="_blank" href="https://www.linkedin.com/in/li-hau-wan-87741214b/"><b>Li Hau</b></a> a front-end developer. Started my career as a front-end developer in 2019. Enjoy coding and developing new things.
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Projects />
                </div>
            </div>
            <Footer />
            
            {/* <header className="App-header">

                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
        </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
        </a>
            </header> */}
        </div>
    );
}

export default App;
