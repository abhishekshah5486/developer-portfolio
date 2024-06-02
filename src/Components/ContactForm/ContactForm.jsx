import './ContactForm.css'

function ContactForm(){
    return (
        <div className="contact-form">
            <h2>Let's Connect</h2>
            <div className='form'>
                <div className='form-item'>
                    <input type="text" placeholder='Enter name' required/>
                </div>
                <div className='form-item'>
                    <input type="text" placeholder='Email' required/>
                </div>
                <div className='form-item'>
                    <input type="text" placeholder='Mobile number' required/>
                </div>
                <div className='form-item'>
                    <textarea className='contactMe-textarea' placeholder='Enter Message' name="" id=""></textarea>
                </div>
                <button className='send'>Send Message</button>
            </div>
        </div>
    )
}
export default ContactForm;