import './compstyle.css';
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// import Updatemodal from "./components/Updatemodal";
import './bootstrap.css';
import {Link} from 'react-router-dom';
import PDF from './PDF';




export default function InvoiceRecords(){


    const[userdata,setUserdata] = useState([])



    const authAxios = axios.create({
      baseURL: "https://souvikinvoiceapp.herokuapp.com",
      
    });
  
  
    useEffect(()=>{
     
  
      async function fetchnow(){
  
        
        authAxios.get("/invoices/").then((res) => {
          console.log(res.data);
          setUserdata(res.data);
  
        })
    
        // const req = await axios.get(
        //   "http://localhost:5000/exercises/"
        // );
      // console.log(req.data)
        // setUsername(req.data[0].username);
        // setDesc(req.data[0].description);
  
      }
      fetchnow();
  
    },[])
  
  
  function submitNow(id,work,hours,expenses,materials,laborors,notes){
    localStorage.setItem("work",work)
    localStorage.setItem("hours",hours)
    localStorage.setItem("expenses",expenses)
    localStorage.setItem("materials",materials)
    localStorage.setItem("laborors",laborors)
    localStorage.setItem("notes",notes)
  }
  
  
    function deleteNow(id){
    //   let deldata = {
    //     id:id,
    //   }
  
    //   console.log(deldata);
  
  
      if(window.confirm("Are you sure you want to delete this invoice?")){
        authAxios.delete("/invoices/" + id).then((res) => {
          // console.log(res.data);
          window.location.reload();
  
        });
      }
    }
  
    

    return(
        <div class="mainBody" style={{display:'flex',justifyContent:'center',padding:'4%'}}>
        <br/>
        <div class="tableBody" style={{width:'75%',padding:'15px 15px',borderRadius:'15px'}}>
          <div >
          <button  className="btn btn-lg btn-success"><Link to='/' style={{color:'white'}}>Home</Link></button><span style={{fontSize:'40px',marginLeft:'26%'}}>Invoice Records</span>
  
          </div><br/>
          
  
        <table style={{border:'solid black 2px'}}>
                        <tr style={{border:'solid black 2px',textAlign:'center'}}>
                          <th style={{border:'solid black 2px', width:'6%'}}>Sr No.</th>
                          <th style={{border:'solid black 2px', width:'14%'}}>Work</th>
                          <th style={{border:'solid black 2px', width:'10%'}}>Hours</th>
                          <th style={{border:'solid black 2px', width:'6%'}}>Expenses</th>
                          <th style={{border:'solid black 2px', width:'10%'}}>Materials</th>
                          <th style={{border:'solid black 2px', width:'8%'}}>laborors</th>
                          <th style={{border:'solid black 2px', width:'6%'}}>Notes</th>
                          <th style={{border:'solid black 2px', width:'9%'}}>Action</th>
                        </tr>
                      
                        {userdata.map((eachdata,index)=>(
  
                        
  
  
                          <tr style={{border:'solid black 2px',textAlign:'center'}}>
                            <td style={{border:'solid black 2px'}}>{index+1}</td>
                            <td style={{border:'solid black 2px'}}>{eachdata.work}</td>
                            <td style={{border:'solid black 2px'}}>{eachdata.hours}</td>
                            <td style={{border:'solid black 2px'}}>{eachdata.expenses}</td>
                            <td style={{border:'solid black 2px'}}>{eachdata.materials}</td>
                            <td style={{border:'solid black 2px'}}>{eachdata.laborors}</td>
                            <td style={{border:'solid black 2px'}}>{eachdata.notes}</td>
                            
                            <td>
                              <button className="btn btn-sm btn-info" 
                              onClick={()=>{
                                submitNow(
                                  eachdata._id,
                                  eachdata.work,
                                  eachdata.hours,
                                  eachdata.expenses,
                                  eachdata.materials,
                                  eachdata.laborors,
                                  eachdata.notes
                                  )
                               }}
                            //   style={{marginRight:'4%'}}
                              ><Link to='/downloadpdf' style={{color:'white'}}>Download pdf</Link></button>

                           

                              <button className="btn btn-sm btn-danger" onClick={()=>{
                                 deleteNow(eachdata._id)
                                }}
                              //   style={{marginRight:'4%'}}
                                >Delete</button>
                              
                              
                              
                            </td>
                          </tr>
                         
                        ))}
                       
        </table>
        <p style={{opacity:'50%'}}>Made by Souvik Das in 2021</p> 
        </div>
            
       
      </div>
    )
}

