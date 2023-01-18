// -----------importing react , useEffect and useState hooks --------//
import React, { useEffect, useState } from 'react'

import './App.css'
//---------------import TodoContainer Component-----------------------//
import TodoContainer from './Components/TodoContainer'
// --------------------Bars for loading wait animation ---------------//
import { Bars } from "react-loader-spinner";



// ----------main Component of this Todo App -------------------------//
const App = () => {

//------after loading json we put whole object in json of useState----//
    const [json, setjson] = useState([]);
//------rendering whole App component after loading ----------------//
    const [loading, setLoading] = useState(false);

//--------useEffect hook with empty Array dependendency means --------
//-----fetching api with no side effect for disturb our app----------
    useEffect(() => {
        // inbuilt function for fetch API 
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((json) => {
                setTimeout(() => {
                    // after fething json we update json with calling this function
                    // setJson that change value of json With help of useEffect Hook
                    setjson(json)
                    setLoading(true);
                }, 1000);
            //    console.log(json)
            });
    }, []);

    
  return (
      <div>
          {/* after loading Api rendering TodoContainer Component If not ! then Show thw Waiting Bar  */}
          {loading ? (
              <TodoContainer jsonTodos={json} />
          ) : (
              <Bars height="180" width="180" color="#4fa94d" ariaLabel="bars-loading" visible={true} />
          )}
          
    </div>
  )
}

export default App