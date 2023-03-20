import "./Doctor.css"
import DoctorData from "./DoctorData";
import doctor1 from './doctorfig.png';

function Doctor() {
    return(
        <div className="doctor">
            <h1>Our team</h1>
            <div className="doctorcard">
               <DoctorData
               image={doctor1}
               heading = "Dr. John Doe"
               text = "Qualifications"
               /> 
               <DoctorData
               image={doctor1}
               heading = "Dr. John Doe"
               text = "Qualifications"
               /> 
               <DoctorData
               image={doctor1}
               heading = "Dr. John Doe"
               text = "Qualifications"
               /> 
               
            </div>
        </div>
    )
}

export default Doctor;