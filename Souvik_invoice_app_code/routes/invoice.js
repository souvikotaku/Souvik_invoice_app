const express = require('express');
const router = require('express').Router();

let Invoice = require('../models/invoice.model');

//get the users

router.get('/',async(req,res)=>{
  
    try{
      const invoices = await Invoice.find();
      res.json(invoices);
    }catch(err){
      res.json({message:err});
    }
  })

 //delete specific products
 router.delete('/:id',async (req,res)=>{
    try{
      const deleteInvoice = await Invoice.deleteOne({_id:req.params.id});
      res.json(deleteInvoice);
    }catch(err){
      res.json({message:err})
    }
  })


  //add products

router.post('/add',async(req,res)=>{
    
      const newInvoice = new Invoice({
          work: req.body.work,
          hours: Number(req.body.hours),
          expenses: Number(req.body.expenses),
          materials: req.body.materials,
          laborors: Number(req.body.laborors),
          notes: req.body.notes,
        });
  
        try{
          const savedInvoice = await newInvoice.save();
          res.json(savedInvoice);
        }catch(err){
            res.json({message:err});
        }
  })


  module.exports = router;
