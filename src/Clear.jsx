import React,{useState,useEffect} from "react";

function Clear(){
    const[fakeapi,setFakeapi] = useState([]);
    
   
    const Api = async()=>{
        const response = await fetch("https://fakestoreapi.com/products");
        const jsondata = await response.json();
        setFakeapi(jsondata);
        console.log("helle");
    }

    useEffect(()=>{
        Api();
    },[]);

     return(
        <div>
           <h1>Fake Api store</h1> 
           <div className="container">
           <h1>Get Users Data</h1>
            <button onclick={Api}>Get Users</button>
            {fakeapi.map((values)=>{
                return(
                <div>
                    <div className="Box" key={values.category}>
                      <h3>{values.category}</h3>
                     <h4 className="first">{values.description}</h4>
                     <h4>{values.title}</h4>
                     <h4>{values.price}</h4>
                     <img src={values.image} alt=""/>
                  </div>
                  
                </div>
                )
            })}
            </div>
        </div>
    )
}


export default Clear; 

// https://fakestoreapi.com/products