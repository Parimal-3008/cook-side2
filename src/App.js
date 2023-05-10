import React, { useEffect, useState } from 'react';
import firebase from './firebase';
import  './App.css';
import Content from './content'; 
import Orderid from './orderid';

const App = () => {
  const [data, setData] = useState({});
  

  useEffect(() => {
    const dbRef = firebase.database().ref();

    dbRef.on('value', snapshot => {
      const newData = snapshot.val();

      if (newData) {
        setData(newData);
      }
    });

    return () => {
      dbRef.off();
    };
  }, []);

  const handleClick = () => {
    const newItemRef = firebase.database().ref().push();
    newItemRef.set(document.getElementById('int').value);
  };
  const getid=(str)=>{
    let id = str.split("&&")[0];
    return id;
  }
  const getorder=(str)=>{
    let id = str.split("&&")[1];
    return id;
  }
  const remove=(key)=>{
    const newItemRef = firebase.database().ref("/"+key);
    newItemRef.remove().then(function() {
    console.log("Data removed successfully!");
    // console.log(firebase.database().ref());
    const newItemRef = firebase.database().ref();
    newItemRef.once('value').then(function(snapshot) {
      var size = snapshot.numChildren();
      console.log('Size of Firebase reference:', size);
      if(size==0)
      window.location.reload();
    });
    

  })
 .catch(function(error) {
    console.error("Error removing data:", error);
  });

  }
  const converttojson=(inputstring)=>{
    const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
    return obj;  

  }
  return (
    <div className='parent'>
    <div className='Heading'>Smart Canteen</div>
    <div className='extraspace'></div>
    <div className='Table'>
    <div  className='Orderid1'>ID</div>
    <div  className='Order1'>Order</div>      
    </div>
    <div className='childTable'>
        {
          Object.keys(data).map(key => (
            <div className='Table2'>
            <Orderid content={getid(data[key])}/>
            <Content ordercontent= {getorder(data[key])}/>
           <button className='removebutton'    onClick={()=>remove(key)}>Order Done</button>
          
             </div>

          
        ))}
        </div>   
    </div>
  );
};
export default App;
