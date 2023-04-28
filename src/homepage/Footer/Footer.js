import './footer.css'
import { Link } from 'react-router-dom';
import Request from '../../Appointment/Request';

const Footer = () => {
    return(
        <div className='footer'>
            <div className='top'>
                <div>
                    <h1>SAAR HEALTHCARE</h1>
                </div>
               
                <div className='bottom'>
                    <div>
                    <h4>For Patients</h4>
                    <p className='link'>
            <Link to='/appointment' element={<Request/>} >Request Apointment</Link>
          </p>
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