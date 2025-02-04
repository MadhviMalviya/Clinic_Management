import React from 'react'
import './Footer.css'


function Footer() {
    return (
        <>
            <footer className='footer-container'>
                <div className='footer-items'>

                    <div className='logo'>
                        <h1 >LifeCare</h1>
                        We care for your Life. </div>
                    <div>
                        <ul>
                            <h3>Links</h3>
                            <li>Contacts</li>
                            <li>Address</li>
                            <li>About</li>
                            <li>Others</li>

                        </ul>
                    </div>

                    <div>

                        <ul>
                            <h3>Socials</h3>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>LinkedIn</li>

                        </ul>
                    </div>
                    <div className='subscribe'>
                        <h3>Subscribe for the News Letter</h3>
                        <input type='text' placeholder='Enter your email'></input>
                        <button>Subscribe</button>
                    </div>
                </div>

                <div className='copyrights'>
                    <p>Copyright © 2024 Madhvi . All Rights Reserved </p>
                </div>




            </footer>
        </>
    )
}

export default Footer