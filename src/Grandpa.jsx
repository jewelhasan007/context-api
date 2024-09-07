import { createContext } from "react";
import Dad from "./Dad";
export const AssetContext = createContext();

const Grandpa = () => {
    const dad = 'Michael'
    return (
       <AssetContext.Provider value="Gold">

<div className="style">
            <h2>Grandpa Component</h2>
            <Dad dad={dad}></Dad>
            <h2>GRANDPA</h2>
        </div>
       </AssetContext.Provider>
       
    );
};

export default Grandpa;