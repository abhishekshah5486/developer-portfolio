import './AboutPage.css'
import { Element } from 'react-scroll';
import profile from '../../Assets/Images/profile.png'

function AboutPage(){
    return(
        <Element name='About'>
            <section className="about-me-page">
                <h1>About Me</h1>
                <div className="about-me">
                    <div className="profile-img">
                        <img src={profile} alt="" />
                    </div>
                    <div className="about-me-content">
                        <h2>👋 Hey there</h2>
                        <p>I'm Abhishek, a passionate software developer. I specialize in Web Development, crafting seamless user experiences and robust backend solutions. With a knack for problem-solving, I thrive on creating elegant code that makes an impact. I'm always exploring new tools and techniques to stay at the forefront of the ever-evolving tech landscape.</p>
                    
                        <p>
                        📫 Open to collaborations and exciting projects, I'm eager to connect with fellow developers and tech enthusiasts. Let's build something amazing together!

                        Happy coding! 🖥️</p>
                    </div>
                </div>
            </section>
        </Element>
    )
}
export default AboutPage;