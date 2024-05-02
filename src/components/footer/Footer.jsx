import React from 'react';
import './footer.css';

function Footer() {
    const popTermsOfUse = () => {
        window.alert('Upcomming Terms of Use')
    }

    const popPrivacyPolicy = () => {
        window.alert('Upcomming Privacy Policy')
    }


    return (
        <div className='bgGreen'>
            <div>
                <p>&copy; 2024 TripGenie. All rights reserved.</p>
                <p><span className='footerLink' onClick={popTermsOfUse}>Terms of Service</span> | <span className='footerLink' onClick={popPrivacyPolicy}>Privacy Policy</span></p>
                <p>The author generated this content in part with GPT-3, OpenAI’s large-scale language-generation model. Upon generating draft language, the author reviewed, edited, and revised the language to their own liking and takes ultimate responsibility for the content of this publication.</p>
            </div>
            <div>
                <p>The above video is used under fair use policy. Copyright belongs to <a href='https://www.youtube.com/@purenewzealand' target='_blank' rel="noreferrer">www.youtube.com/@purenewzealand</a></p>
            </div>
        </div>
        
  )
}

export default Footer