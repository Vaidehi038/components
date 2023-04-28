import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import treatment1 from './assets/dryneedle.jpg';
import treatment2 from './assets/physiotherapy.jpg';
import treatment3 from './assets/posture.jpg';
import treatment4 from './assets/footalign.jpg';
import Row from 'react-bootstrap/Row';
import "./treatment.css";

function Treatments (){
   return(
        <>
       <Row>
         <Card className="mb-1" style={{ width: '40%' }}>
      <Card.Img variant="top" src={treatment1} />
      <Card.Body>
        <Card.Title>Dry Needling Therapy</Card.Title>
        <Card.Text>
        Trigger-point dry needling is an invasive procedure where a fine needle 
        or acupuncture needle is inserted into the skin and muscle.
        </Card.Text>
        <Button variant="primary">Read More!</Button>
      </Card.Body>
    </Card><br/>


   


    <Card className="mb-1"style={{ width: '40%' }}>
      <Card.Img variant="top" src={treatment3} />
      <Card.Body>
        <Card.Title>Posture and Gait correction</Card.Title>
        <Card.Text>
        A basic analysis of a patient’s Posture and
         Gait provides information about the body and the capability .
        </Card.Text><br/>
        <Button variant="primary">Read More!</Button>
      </Card.Body>
    </Card></Row><br/>

    <Row>
    <Card className="mb-1" style={{ width: '40%', }}>
      <Card.Img variant="top" src={treatment2} />
      <Card.Body>
        <Card.Title>Physiotherapy</Card.Title>
        <Card.Text>
        Physiotherapy is treatment to restore, maintain,
         and make the most of a patient's mobility, function, and well-being.
        </Card.Text>
        <Button variant="primary">Read More!</Button>
      </Card.Body>
    </Card><br/>

    <Card className="mb-1" style={{ width: '40%' }}>
      <Card.Img variant="top" src={treatment4}/>
      <Card.Body>
        <Card.Title>Foot Alignment</Card.Title>
        <Card.Text>
        The foot is the foundation to the body. 
        The alignment of the foot is crucial for proper foot function.
        </Card.Text>
        <Button variant="primary">Read More!</Button>
      </Card.Body>
    </Card></Row><br/>
    
    </>

   )

}

export default Treatments;