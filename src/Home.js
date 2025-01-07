// const Home = () => {
//     return ( 
//         <p> This is Home</p>
//      );
// }
 
// export default Home;

import {   useState } from "react"
const Home = () => {
    const [name,setName] = useState('Zia');
    const [age,setAge] = useState('18');

    const handleClick  = () => {
        console.log("Hello Everyone");
        setAge('19')
        setName('Ziya')
    }
    return (
        <div className="home">
            <h2>Home Page</h2>
            <p>Name: {name},Age: {age} </p>
            <button onClick={handleClick} style={{ color: 'pink' ,  backgroundColor: 'white' }} >Click me</button>
        </div>
    );
}
export default Home;


// Experiment-7

// const Home = () =>  {
//     const handleClick = (e) =>  {
//         console.log("Hello ");
//     }
//     const handleClickAgain = (name) => {
//         console.log("Hello "+name);
//     }
//     return (
//     <div className="home">
//     <h2> Home Page </h2>
//     <button onClick={handleClick} >Click me</button>
//     <button onClick={() => handleClickAgain('Ziya')} >Click me Again</button>
//     </div>
//     );
//    }
//    export default Home;