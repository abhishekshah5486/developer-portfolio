import './Skills.css'
import { Element } from 'react-scroll';

function Skills(){
    return (
        <Element name='skills'>
            <section className="skills-section">
                <h2>Skills</h2>
                <div className="skills-container">
                    <div className="skills-item">
                        <i class="fa-brands fa-html5"></i>
                        <h2>HTML5</h2>
                    </div>
                    <div className="skills-item">
                    <i class="fa-brands fa-css3"></i>
                    <h2>CSS3</h2>
                    </div>
                    <div className="skills-item">

                    </div>
                    <div className="skills-item">
                    <i class="fa-brands fa-java"></i>
                    <h2>Java</h2>
                    </div>
                    <div className="skills-item">
                    <i class="fa-brands fa-python"></i>
                    <h2>Python</h2>
                    </div>
                    <div className="skills-item">
                    <i class="fa-brands fa-react"></i>
                    <h2>ReactJs</h2>
                    </div>
                    <div className="skills-item">

                    </div>
                    <div className="skills-item">
                    <i class="fa-brands fa-git-alt"></i>
                    <h2>Git</h2>
                    </div>
                    <div className="skills-item">
                    <i class="fa-brands fa-github"></i>
                    <h2>Github</h2>
                    </div>
                    <div className="skills-item"></div>
                    <div className="skills-item"></div>
                    <div className="skills-item"></div>
                    <div className="skills-item"></div>
                    <div className="skills-item"></div>
                    <div className="skills-item"></div>

                </div>
            </section>
        </Element>
    )
}
export default Skills;