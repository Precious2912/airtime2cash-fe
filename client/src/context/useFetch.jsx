import React, { useState, useEffect } from "react"
import axios from "axios";



const useFetch = (url) =>{
    const [result, setResult] = useState([]); 
    useEffect(() => {  
       axios.get(`${process.env.REACT_APP_BACKEND_URL}/${url}`, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }).then(response=>{ 
                if (response.status === 200) {
                          setResult(response.data.data); 
              
                        }
              }).catch(err=>{
                  
              throw new Error(err)

              })
},[url])  
return {result}
         
}
export default useFetch;