// const Home = () => {
//     return ( 
//         <p> This is Home</p>
//      );
// }
 
// export default Home;


// Experiment-11
import {  useState  } from "react"
import BlogList from './BlogList'

const Home = () => {
    const [blogs,setBlogs] = useState([
        {title:"My Blog1", body:"Body of Blog1", author:"Raju", id:1},
        {title:"My Blog2", body:"Body of Blog2", author:"Ramu", id:2},
        {title:"My Blog3", body:"Body of Blog3", author:"Ranu", id:3}
    ]);
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" />
        </div>
    );
}
export default Home;




