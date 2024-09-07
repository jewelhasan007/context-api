import { useContext } from "react";
import GrandChild from "./GrandChild";
import { AssetContext } from "./Grandpa";


const Dad = ({dad}) => {
    const surprice = useContext(AssetContext)
    return (
        <div className="style">
            <h2>Dad Component</h2>
            <GrandChild dad={dad}></GrandChild>
            <br />
            {surprice}
        </div>
    );
};

export default Dad;