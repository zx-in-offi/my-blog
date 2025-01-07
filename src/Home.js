// const Home = () => {
//     return ( 
//         <p> This is Home</p>
//      );
// }
 
// export default Home;

const Home = () => {
    const handleClick=() =>  {
        console.log("Hello Everyone")
    }
    return (
    <div className="home">
    <h2> Home Page</h2>
    <button onClick={handleClick}>Click me</button>
    </div>
    );
   }
   export default Home;