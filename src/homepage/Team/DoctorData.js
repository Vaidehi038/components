import "./Doctor.css"

function DoctorData(props) {
    return(
        <div className="d-card">
           <div className="d-image">
            <img src={props.image} alt="..." />
            </div> 
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}

export default DoctorData;