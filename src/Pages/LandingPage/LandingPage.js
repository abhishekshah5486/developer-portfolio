import './LandingPage.css'
import stock from '../../Assets/Images/section-image.jpeg';
import Typing from '../../Components/Typing/Typing';
import ParticlesBackground from '../../Components/ParticlesBackground';
import { Element } from 'react-scroll';
function LandingPage(){
    return (
        <Element name='home'>
            <section className='landing-page'>
                <div className="left-section">
                    <p>Hello</p>
                    <h2>I'm Abhishek</h2>
                    <Typing 
                    text = {[
                        "Software Developer",
                        "iOS Developer",
                        "AI ML Enthusiast"
                    ]}
                    typingSpeed = {100}
                    deletingSpeed = {50}
                    duration={1000}
                    />
                    {/* <p className='description'>I build pixel-perfect, engaging, and accessible digital experiences.</p> */}
                </div>
                <div className='right-section'>
                    <img className="right-section-img" src={stock}></img>
                </div>
            </section>
        </Element>
    )
}
export default LandingPage;