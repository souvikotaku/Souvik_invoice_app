import React from 'react';
import Post from './components/Post';
import InvoiceRecords from './components/InvoiceRecords';
import Pdf2 from './components/Pdf2';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
    
    <Switch>
      
      <Route path='/' exact component={Post}/>
      <Route path='/invoicerecords' component={InvoiceRecords}/>
      <Route path='/downloadpdf' component={Pdf2}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
