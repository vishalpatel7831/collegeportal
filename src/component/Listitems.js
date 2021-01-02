import React from 'react';
import {Card,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/list.css';


function Listitems(props)  {

    const items=props.items;
    const listitems=items.map(item=>
        {
       return<Card style={{ width: '28rem' }}>
      
       <Card.Body>
         <Card.Title>{item.title}</Card.Title>
         <Card.Text >
           Some quick example text to build on the card title and make up the bulk of
           the card's content.
         </Card.Text>
         <Button variant="primary">Go somewhere</Button>
       </Card.Body>
     </Card> 
//  return<div className="list" key="item.key">
//           <p>{item.desc}</p>
//         </div>
    })
    return (
        <div>
            {listitems}
        </div>
    )
}
export default Listitems;