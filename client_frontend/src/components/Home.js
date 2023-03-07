import { useState, useEffect } from "react";
import { mockData } from "../data/mockData";

const Home = () => {
    // useState uses hooks, making views that use name reactive and re-renders whenever data changes
    
    const [name, setName] = useState('mario');
    
    const handleClick = () => {
        fetch('http://localhost:3000/test_api_v2')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setName(data.name);
            })
    }

    /*
    useEffect(() => {
        fetch('http://localhost:3000/test_api')
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data);
            })
    }, [])
    */
    const handleClickAgain = (name) => {
        console.log("hello again haha" + name)
    }

    return ( 
        <div className='home'>
            <h2>Homepage</h2>
                <p>{name}</p>
            <button onClick={handleClick}>Click Me </button>
        </div>
     );
}
 
export default Home;
