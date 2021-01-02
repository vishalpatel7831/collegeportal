import React,{useState,useContext} from 'react';
import { FaCamera } from "react-icons/fa";
import {ContextProvider} from "../global/Context";

const Create = () => {
    const {create}=useContext(ContextProvider);
    const [title,setTitle]=useState('');
    const [image,setImage]=useState('');
    const handleImage = (e) => {
        setImage(e.target.files[0]);
      };
      const createPost = (e) => {
        e.preventDefault();
        create({ title, image });
         setTitle("");
        setImage("");
      };
    return (
        <div className="create">
            <form onSubmit={createPost}>
                 <div className="create__input">
                     <input type="text"className="create__inputt" placeholder="what your mind"
                     onChange={(e) => setTitle(e.target.value)}
                     value={title}
                     />
                 </div>
                 <div className="create__second">
              <div className="create__second-a">
                <label htmlFor="file">
                  <FaCamera className="camera" />
                </label>
                <input
                  type="file"
                  className="file"
                 
                  id="file"
                  onChange={handleImage}
                  required
                />
                
              </div>
              <div className="create__second-b">
                <input type="submit" value="Create" className="btn-sweet" />
              </div>
              </div>
            </form>
        </div>
    )
}

export default Create;
