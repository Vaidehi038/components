import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import Request from '../../Appointment/Request';



function Footer() {
  return (
    <MDBFooter bgColor='light'  className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
   
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                SaarHealthCare
              </h6>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan, tellus non porttitor efficitur, nisl leo vulputate erat, nec sollicitudin nisl nisi eget elit.
              </p>
            </MDBCol>       
            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful Link</h6>
              <p>
              <Link to='/appointment' element={<Request/>}>Request Appointment </Link>
              </p>
             
             
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                214 sun gravitas,Shyamal CrossRoad,Ahmedabad-380015
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +91
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div> */}
    </MDBFooter>
  );
}
export default Footer;