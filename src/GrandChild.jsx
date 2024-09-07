import GrandChild2 from "./GrandChild2";


const GrandChild = ({dad}) => {
    return (
        <div >
            <h2>GrandCHild Component</h2>
           
            <GrandChild2 dad={dad}></GrandChild2>
            <h3>Grand Child</h3>
        </div>
    );
};

export default GrandChild;