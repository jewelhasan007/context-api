 
import { useContext } from 'react';
import './style.css'
import { AssetContext } from './Grandpa';
const GrandChild2 = ({dad}) => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h3>final child</h3>
        
           {gift}
        </div>
    );
};

export default GrandChild2;