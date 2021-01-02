import React from 'react';
import Listitems from './Listitems'

import { FormControl,FormGroup,FormLabel,Button,Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCamera } from "react-icons/fa";


  class Job extends React.Component{
    constructor(props){
      super(props);
      this.state={
        items:[],
        currentItem:{
          title:'',
          desc:'',
          key:''
        }
      }
      console.log(this.state.currentItem);
      this.handleInput=this.handleInput.bind(this);
      
      this.addItem=this.addItem.bind(this);
      
    }
    //////////keypress event
    //  handleKeypress=(event)=>{
    //   if(event.key == 'Enter'){
    //      console.log('enter pressed');
         
    //   }
    // }
   
     ////
    handleInput(e){
      this.setState({
        currentItem:{
          
         [e.target.name]:e.target.value,
          key:Date.now()
        }

      })
    }
    ////////rough
 
    ///////
    addItem(e){
      e.preventDefault();
      const newItem=this.state.currentItem;
      console.log(newItem);
      if(newItem.text!==""){
        const newItems=[...this.state.items,newItem];
        console.log(newItems)
        this.setState({
          items:newItems,
          currentItem:{
            title:'',
            desc:'',
            key:''
          }
        })
      }
    }
    render(){
    return (
      <div className="Create__job">
        <Form onSubmit={this.addItem}>
        
   <Form.Group controlId="exampleForm.ControlTextarea1">
   <Form.Label>Post A New Job</Form.Label>
   <Form.Control type="text" placeholder="Company name" name='title' value={this.state.currentItem.title} onChange={this.handleInput}/>
   <FormControl as="textarea" rows={3} name='desc' value={this.state.currentItem.desc} onChange={this.handleInput}  />
                    
 </Form.Group> 
 <div className="second" style={{display:'flex'}}>       
 <Form.Group>
  <label htmlFor="file">
                 <FaCamera className="camera" />
  </label>
   <Form.File id="file"  style={{display:'none'}} />
 </Form.Group>
 <Button variant="primary" size="sm" className="mb-4"type="submit" style={{marginLeft:'240px',background:'#f83a63'}}>
   Create
 </Button>
 </div> 
 </Form>

   <Listitems items={this.state.items}/>
      </div>
      
   );

}
  }

   
export default Job;