import './Projects.css'
import spotifyProject from '../../Assets/Images/SpotifyProject.png'
import github from '../../Assets/Images/github-logo.png';
import link from '../../Assets/Images/external-link.png'
import { Element } from 'react-scroll';

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
                              <a href="https://github.com/abhishekshah5486" className="github-icon"><i class="fa-brands fa-github"></i></a>
                              <a href=' https://abhishekshah5486.github.io/Spotify-Clone/' className='deployed-link'><i class="fa-solid fa-link"></i></a>
                            </div>
                        </div>
                        {/* <div className="project-links">
                            
                        </div> */}
                    </div>
                </div>
                {/* <div className="projectCard">
                    <h2 className="project-title"></h2>
                </div> */}
                {/* <div className="projectCard">
                    <h2 className="project-title">Employee Management System</h2>
                    <img src="" alt="" className="project-demoView" />
                </div>
                <div className="projectCard">
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