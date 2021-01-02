import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Profile = () => {
    return (
        
        <div>
            
            <div style={{
                display:'flex',
                justifyContent:'space-around',
                margin:"18px 0px"
            }}>
                <div>
                    <img  className="profile__image" style={{width:"240px",height:"240px",borderRadius:"120px",boxShadow:"5px"} }
                    src="/images/profile.jpg"/>
                </div>
                <div>
                    <h1>Andrew mead</h1>
                     <h1>BE(information Technology)</h1>
                     <h1>pv834763@gmail.com</h1>
                     <h1>Mo:8347637512</h1>
                     <div>
                     <Button variant="danger">Report</Button>
                     <Button variant="warning" style={{marginLeft:"10px"}}>Update</Button>
                     </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;
