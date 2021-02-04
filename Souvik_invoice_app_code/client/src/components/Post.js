import React from 'react';
import PDF from './PDF';
import {useState} from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom';



const Post = ()=> {

    localStorage.removeItem("work")
    localStorage.removeItem("hours")
    localStorage.removeItem("expenses")
    localStorage.removeItem("materials")
    localStorage.removeItem("laborors")
    localStorage.removeItem("notes")

const [title,setTitle] = useState('')
const [hours,setHours] = useState('')
const [expense,setExpense] = useState('')
const [materials,setMaterials] = useState('')
const [labor,setLabor] = useState('')
const [content,setContent] = useState('')
const [postSubmitted,setPostSubmitted] = useState(false)
const { register, handleSubmit, errors, watch } = useForm();

   
const authAxios = axios.create({
    baseURL: "https://souvikinvoiceapp.herokuapp.com",
    
  });
   

    const onSubmit = (e) => {
        
        if(!title || !content){
            alert('All fields are required!');
            e.preventDefault();
        }else{
            setPostSubmitted(
                !postSubmitted
            );
        }



        let form_data = {
            work: title,
            hours: hours,
            expenses: expense,
            materials: materials,
            laborors: labor,
            notes: content

        }

       console.log(form_data)

        authAxios
      .post("/invoices/add", form_data)
      .then((res) => {
        if (res.data) {
        //   window.location = "/Signin";
        alert('Invoice added successfully')

        } else {
        alert('Not able to add invoice')
        }
      });


    }

   
        return(
            <>
                {  !postSubmitted ? 
                    (<div className="container" style={{textAlign:'center'}}>
                        <div className="jumbotron mt-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="well well-sm">
                                        <form onSubmit={handleSubmit(onSubmit)} className="form-horizontal" method="post">
                                            <fieldset>
                                                <legend className="text-center header">Create new invoice</legend>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input 
                                                    defaultValue={title}
                                                    onChange={(event)=>{
                                                        setTitle(event.target.value)
                                                    }} 
                                                    name="title" type="text" placeholder="Enter work" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input 
                                                    defaultValue={hours}
                                                    onChange={(event)=>{
                                                        setHours(event.target.value)
                                                    }} 
                                                    name="hours" type="number" placeholder="Enter hours spent for work" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input 
                                                    defaultValue={expense}
                                                    onChange={(event)=>{
                                                        setExpense(event.target.value)
                                                    }} 
                                                    name="expense" type="number" placeholder="Enter work related expenses" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input 
                                                    defaultValue={materials}

                                                    onChange={(event)=>{
                                                        setMaterials(event.target.value)
                                                    }} 
                                                    name="materials" type="text" placeholder="Enter materials required" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input 
                                                    defaultValue={labor}
                                                    onChange={(event)=>{
                                                        setLabor(event.target.value)
                                                    }} 
                                                    name="laborors" type="number" placeholder="Enter no. of laborors involved" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <textarea 
                                                    defaultValue={content}
                                                     onChange={(event)=>{
                                                        setContent(event.target.value)
                                                    }} 
                                                    className="form-control" name="content" placeholder="Enter notes" rows="7"></textarea>
                                                </div>
                                                <div className="form-group">
                                                    <button type="submit"  className="btn btn-success btn-lg">Generate Invoice</button>
                                                </div>
                                                <div className="form-group">
                                                    <button type="button"  className="btn btn-primary btn-lg"><Link style={{color:'white'}}to='/invoicerecords'>View Invoices</Link></button>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>) : (
                        <PDF 
                        title={title} 
                        content={content} 
                        hours={hours} 
                        expense={expense}
                        materials={materials}
                        labor={labor}
                        />
                    )
                }
            </>
        );
    
}

export default Post;