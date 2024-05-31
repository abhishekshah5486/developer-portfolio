import './LandingPage.css'
import stock from '../../Assets/Images/section-image.jpeg';
function LandingPage(){
    return (
       <section className='landing-page'>
        <div className="left-section">
            <p>Hello</p>
            <h2>I'm Abhishek</h2>
            <h3>Software Developer</h3>
        </div>
        <div className='right-section'>
            <img className="right-section-img" src={stock}></img>
        </div>
       </section>
    )
}
export default LandingPage;