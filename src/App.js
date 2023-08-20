import React, { useEffect, useState } from 'react'
import './App.css'
import TodoContainer from './Components/TodoContainer'
import { Bars } from "react-loader-spinner";


const App = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/todos")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setTimeout(() => {
    //                 setData(data)
    //                 setLoading(true);
    //             }, 1000);
    //         });
    // }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos");
                const data = await response.json();
                setData(data);
                setLoading(true);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            {loading ? (
                <TodoContainer fakeTodosArr={data} />
            ) : (
                <Bars height="180" width="180" color="#4fa94d" ariaLabel="bars-loading" visible={true} />
            )}

        </div>
    )
}

export default App