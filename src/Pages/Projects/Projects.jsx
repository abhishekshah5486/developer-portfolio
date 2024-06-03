import './Projects.css'
import spotifyProject from '../../Assets/Images/SpotifyProject.png'
import github from '../../Assets/Images/github-logo.png';
import link from '../../Assets/Images/external-link.png'
import QuizApp from '../../Assets/Images/QuizApp.png'
import { Element } from 'react-scroll';
import portfolio from "../../Assets/Images/Portfolio-img.png"

function Projects(){
    return (
        <Element name='projects'>
            <section className="project-section">
            <h1 className='project-section-header'>Projects</h1>
            <div className="project-section-projectCards">
                <div className="projectCard">
                    <h2 className="project-title">Spotify Clone</h2>
                    <img id="spotifyProject" className="project-demoView" src={spotifyProject} alt="" />
                    <div className="project-links-description">
                        <div className="project-description">
                        Spotify clone to provide users with an immersive music streaming experience. The application leverages HTML, CSS, and JavaScript to create a responsive platform where users can play, pause, and navigate through songs. Additional features include a progress bar for tracking song duration and the ability to like songs.
                        </div>
                        <div className="project-skills-links">
                            <div className="project-skills">
                                <div className='btn'>JavaScript</div>
                                <div className='btn'>HTML5</div>
                                <div className='btn'>CSS</div>
                            </div>
                            <div className="project-links">
                              {/* <a href="https://github.com/abhishekshah5486/Spotify-Clone" className="github-icon"><i class="fa-brands fa-github"></i></a> */}
                              {/* <a href=' https://abhishekshah5486.github.io/Spotify-Clone/' className='deployed-link'><i class="fa-solid fa-link"></i></a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projectCard">
                    <h2 className="project-title">Quiz App</h2>
                    <img id="quiz-app" className="project-demoView" src={QuizApp} alt="" />
                    <div className="project-links-description">
                        <div className="project-description">
                        A sleek, interactive Quiz App crafted with HTML, CSS, and JavaScript. Users can test their knowledge with randomized multiple-choice questions, receiving immediate feedback with vibrant animations. The app tracks progress and scores, concluding with a stylish display and options to restart or return home.
                        </div>
                        <div className="project-skills-links">
                            <div className="project-skills">
                                <div className='btn'>JavaScript</div>
                                <div className='btn'>HTML5</div>
                                <div className='btn'>CSS</div>
                            </div>
                            <div className="project-links">
                              {/* <a href="https://github.com/abhishekshah5486/Quiz-App" className="github-icon"><i class="fa-brands fa-github"></i></a> */}
                              {/* <a href=' https://abhishekshah5486.github.io/Spotify-Clone/' className='deployed-link'><i class="fa-solid fa-link"></i></a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projectCard" id='portfolio-project'>
                    <h2 className="project-title">Portfolio</h2>
                    <img id="developer-folio" className="project-demoView" src={portfolio} alt="" />
                    <div className="project-links-description">
                        <div className="project-description">
                        Welcome to my portfolio! This project highlights my expertise in HTML, CSS, and ReactJS, showcasing a range of web development and design skills. Explore interactive components, responsive layouts, and dynamic content, all crafted with modern web technologies. Discover my personal and professional projects and see how I can bring innovative solutions to your next project!
                        </div>
                        <div className="project-skills-links">
                            <div className="project-skills">
                                <div className='btn'>JavaScript</div>
                                <div className='btn'>HTML5</div>
                                <div className='btn'>CSS</div>
                            </div>
                            <div className="project-links">
                              {/* <a href="https://github.com/abhishekshah5486/developer-portfolio" className="github-icon"><i class="fa-brands fa-github"></i></a>
                              <a href=' https://abhishekshah5486.github.io/Spotify-Clone/' className='deployed-link'><i class="fa-solid fa-link"></i></a> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="projectCard">
                    <h2 className="project-title">Employee Management System</h2>
                    <img src="" alt="" className="project-demoView" />
                </div>
                <div className="projectCard">
                    <h2 className="project-title">Employee Management System</h2>
                    <img src="" alt="" className="project-demoView" />
                </div> */}
            </div>
        </section>
        </Element>
    )
}
export default Projects;