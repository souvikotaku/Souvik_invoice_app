import React from 'react';
import Pdf from "react-to-pdf";
import axios from 'axios';
import {Link} from 'react-router-dom';
import './compstyle.css';



const ref = React.createRef();

const PDF = (props) => {

  function refreshPage(){
    window.location.reload()
  }

  return (
    
    <div style={{display:'flex',justifyContent:'center'}}>
     <div className="tablecon6" style={{textAlign:'center'}}>
      <div className="Post" ref={ref}>
      <img style={{width:'15%'}}src='/companylogo1.png'/>
        <h5>Work: {props.title}</h5>
        <p>Hours spent on work: {props.hours}</p>
        <p>Total expenses: {props.expense} Rupees</p>
        <p>Materials required: {props.materials}</p>
        <p>No. of laboror involved: {props.labor}</p>
        <p>Notes: {props.content}</p>
      </div>
      
      <div className="form-group">
      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button className="btn btn-success btn-sm" style={{marginRight:'1%'}} onClick={toPdf}>Capture as PDF</button>}
      </Pdf>
      <button type="button"  className="btn btn-primary btn-sm"><Link style={{color:'white'}}to='/invoicerecords'>View Invoices</Link></button>

      </div>
      <div className="form-group">
      <button className="btn btn-info btn-md" onClick={refreshPage}>Home</button>


        </div>
    </div>
    </div>
      
    
  );
}

export default PDF;