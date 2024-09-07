import { useState } from "react";



const LocalStorage = () => {
    const [data, setData] = useState([]);


    const handleAdd = () =>{
       
        const saveData = localStorage.setItem('apple', 99);
       
        
        }
        const handleShowDataLS = ()=>{
         
            const ShowData = localStorage.getItem('apple')
            const dataShow = JSON.parse(ShowData)
            setData(dataShow)
          }
        const handleRemove = () =>{
        const removeLS = localStorage.removeItem('apple');
        setData(removeLS)
        
        }

    return (
        <div className="m-4">
           <h1 className="m-5"> To Show the LOCAL STORRAGE:</h1>
            <h2 className="text-3xl font-bold my-5">Stored Data: </h2>
           <div>
            <button onClick={handleAdd} className=" font-bold mx-5 bg-lime-300">Add to LS:{data}</button>
            <button onClick={handleShowDataLS}  className=" font-bold mx-5 bg-lime-300">Show data from LS: {data} </button>
            <button onClick={handleRemove} className="font-bold mx-5 bg-red-300">Remove from LS:{}</button>
           </div>
          
        </div>
    );
};

export default LocalStorage;