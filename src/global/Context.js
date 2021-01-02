import React,{createContext} from 'react';
import {db,storage} from "../config";
import firebase from "firebase";
export const ContextProvider = createContext();

const Context = (props) => {
    const [model,setModel]=React.useState(false)
    const [posts, setPosts] = React.useState([]);
    const openModel = () => {
        setModel(true);
      };
      const create=(data)=>{
          const{title,image}=data;
           const upload = storage.ref(`images/${image.name}`).put(image);
    upload.on(
      "state_changed",
      (snp) => {
        let progress = (snp.bytesTransferred / snp.totalBytes) * 100;
        console.log(progress);
      },
      (err) => {
        console.log(err);
      },
      () => {
        storage
        .ref("images")
        .child(image.name)
        .getDownloadURL()
        .then((url) => {
          db.collection("posts").add({
            title,
            image: url,
            
            currentTime: firebase.firestore.FieldValue.serverTimestamp(),
          });
        });
      });
    };
    React.useEffect(() => {
      // auth.onAuthStateChanged((user) => {
      //   setUser(user);
      //   setLoader(false);
      // });
  
      // fetch posts from firebase
      db.collection("posts")
        .orderBy("currentTime", "desc")
        .onSnapshot((snp) => {
          setPosts(
            snp.docs.map((doc) => ({
              id: doc.id,
              title: doc.data().title,
              image: doc.data().image,
              // username: doc.data().username,
            }))
          );
        });
    }, []);

      
    //   const closeModel = () => {
    //     setModel(false);
    //   };
    return (
        
        <ContextProvider.Provider value={{
        create,
        posts,
        }}>
            {props.children}
        </ContextProvider.Provider>
    ) ;
      }; 
        


export default Context;
