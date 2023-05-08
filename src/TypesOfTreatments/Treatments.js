import React from "react";
import treatment1 from './assets/dryneedle.jpg';
import treatment2 from './assets/physiotherapy.jpg';
import treatment3 from './assets/posture.jpg';
import treatment4 from './assets/footalign.jpg';
import style from  './treatment.module.css';


function Treatments (){
   return(
        <>
        <div className="row row-cols-1 row-cols-md-2 g-4 ">
  <div className="col">
     <div className={style.card } >
  <img src={treatment1} className="card-img-top" ></img>
  <div className="card-body">
    <h5 className="card-title">Dry Needling Therapy</h5>
    <p className="card-text">Trigger-point dry needling is an invasive procedure where a fine needle 
        or acupuncture needle is inserted into the skin and muscle.</p>
    <a href="#" className="btn btn-primary">Read More!</a>
  </div>
</div>
</div>

<div className="col">
     <div className={style.card } >
  <img src={treatment2} className="card-img-top" ></img>
  <div className="card-body">
    <h5 className="card-title">Posture and Gait correction</h5>
    <p className="card-text">SA basic analysis of a patient’s Posture and
         Gait provides information about the body and the capability .</p>
    <a href="#" className="btn btn-primary">Read More!</a>
  </div>
</div>
</div>
</div>
<div className="row row-cols-1 row-cols-md-2 g-4 ">
<div className="col">
     <div className={style.card } >
  <img src={treatment3} className="card-img-top" ></img>
  <div className="card-body">
    <h5 className="card-title">Physiotherapy</h5>
    <p className="card-text">Physiotherapy is treatment to restore, maintain,
         and make the most of a patient's mobility, function, and well-being.</p>
    <a href="#" className="btn btn-primary">Read More!</a>
  </div>
</div>
</div>
<div className="col">
     <div className={style.card } >
  <img src={treatment4} className="card-img-top" ></img>
  <div className="card-body">
    <h5 className="card-title">Foot Alignment</h5>
    <p className="card-text">The foot is the foundation to the body. 
        The alignment of the foot is crucial for proper foot function.</p>
    <a href="#" className="btn btn-primary">Read More!</a>
  </div>
</div>
</div>
</div>
<br/>
    
    </>

   )

}

export default Treatments;