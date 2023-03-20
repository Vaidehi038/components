import './footer.css'
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
  } from "react-icons/fa";

const Footer = () => {
    return(
        <div className='footer'>
            <div className='top'>
                <div>
                    <h1>SAAR HEALTHCARE</h1>
                </div>
                {/* <div>
                    <a href="/">
                    <FaFacebookSquare className="facebook" />
                    </a>
                    <a href="/">
                    <FaInstagramSquare className="instagram" />
                    </a>
                    <a href="/">
                    <FaYoutubeSquare className="youtube" />
                    </a>
                </div> */}
                <div className='bottom'>
                    <div>
                    <h4>For Patients</h4>
                    <a href="/">Request an appointment</a>
                    </div>
                    <div>
                    <h4>Contact us</h4>
                    <a href="/">Click Here</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;