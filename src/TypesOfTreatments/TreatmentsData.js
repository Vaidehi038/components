import React from 'react'


function TreatmentsData(props) {
  return (
    <div className="treatments">
      <h2>{props.disease}</h2>
       <p>{props.distext}</p><br/>
       <h2>Symptoms</h2>
       <p>{props.symtext}</p><br/>
       <h3>When to see a doctor</h3>
       <p>{props.seetext}</p><br/>
       <a href="#">Click here request an appointment</a>
    </div>
  )
}

export default TreatmentsData
