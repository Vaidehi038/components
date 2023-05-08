import img1 from './images/intro1.png';
import img2 from './images/intro2.png';
import './intro.css'

const Intro = ()=> {
    return(
      <>
        <div className="card mb-3" style={{maxWidth: '5400px'} }>
       <div className="row g-0" style={{margin: '2%'}}>
    <div className="col-md-4">
      <img src={img2} className="img-fluid rounded-start" alt="..."></img>
    </div>
    <div className="col-md-8">
      <div className="card-body" >
        <h5 className="card-title">What is Physiotherapy?</h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan, tellus non porttitor efficitur, nisl leo vulputate erat, nec sollicitudin nisl nisi eget elit. Vestibulum nunc elit, blandit ac vulputate et, convallis ut nisi. Proin efficitur eros in luctus maximus. Quisque in enim est. Morbi tincidunt sapien sit amet justo rutrum accumsan. Sed eros ex, pulvinar varius efficitur eget, lacinia ac velit. Cras consectetur imperdiet nisl condimentum elementum. Donec cursus libero eu ornare euismod. Ut euismod dui eget imperdiet posuere. Phasellus nec lorem vel lacus tempor efficitur at et dolor.</p>
      
      </div>
    </div>
    </div>
  
    <div className="row g-0" style={{margin: '2%'}}>
    <div className="col-md-8">
      <div className="card-body" >
        <h5 className="card-title">Benefits of Physiotherapy</h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan, tellus non porttitor efficitur, nisl leo vulputate erat, nec sollicitudin nisl nisi eget elit. Vestibulum nunc elit, blandit ac vulputate et, convallis ut nisi. Proin efficitur eros in luctus maximus. Quisque in enim est. Morbi tincidunt sapien sit amet justo rutrum accumsan. Sed eros ex, pulvinar varius efficitur eget, lacinia ac velit. Cras consectetur imperdiet nisl condimentum elementum. Donec cursus libero eu ornare euismod. Ut euismod dui eget imperdiet posuere. Phasellus nec lorem vel lacus tempor efficitur at et dolor.</p>
      
      </div>
    </div>
    <div className="col-md-4">
      <img src={img1} className="img-fluid rounded-start" alt="..."></img>
    </div>
    </div>
          
        </div>
        </> 
    );

}


export default Intro;