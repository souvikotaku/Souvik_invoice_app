import React from 'react';
import Pdf from "react-to-pdf";
import axios from 'axios';
import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import './compstyle.css';



const ref = React.createRef();

const Pdf2 = (props) => {

    let work =   localStorage.getItem("work")
    let hours =   localStorage.getItem("hours")
    let expenses =   localStorage.getItem("expenses")
    let materials =   localStorage.getItem("materials")
    let laborors =   localStorage.getItem("laborors")
    let notes =   localStorage.getItem("notes")

 

  return (
    <div style={{display:'flex',justifyContent:'center'}}>
     <div className="tablecon6" style={{textAlign:'center'}}>
      <div className="Post" ref={ref}>
        <img style={{width:'15%'}}src='/companylogo1.png'/>
        <h5>Work: {work}</h5>
        <p>Hours spent on work: {hours}</p>
        <p>Total expenses: {expenses} Rupees</p>
        <p>Materials required: {materials}</p>
        <p>No. of laboror involved: {laborors}</p>
        <p>Notes: {notes}</p>
      </div>
      <div className="form-group">
      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button className="btn btn-success btn-sm" style={{marginRight:'1%'}} onClick={toPdf}>Capture as PDF</button>}
      </Pdf>
      <button type="button"  className="btn btn-primary btn-sm"><Link style={{color:'white'}}to='/invoicerecords'>View Invoices</Link></button>

      </div>
      <div className="form-group">
            <button className="btn btn-info btn-lg" ><Link to='/' style={{color:'white'}}>Home</Link></button>

        </div>

      </div>
     

      
    </div>
  );
}

export default Pdf2;