// const Home = () => {
//     return ( 
//         <p> This is Home</p>
//      );
// }
 
// export default Home;


//Experiment-10
import {  useState  } from "react"

const Home = () => {
    const [blogs,setBlogs] = useState([
        {title:"My Blog1", body:"Body of Blog1", author:"Ramu", id:1},
        {title:"My Blog2", body:"Body of Blog2", author:"Raju", id:2},
        {title:"My Blog3", body:"Body of Blog3", author:"Tomm", id:3},
    ]);
    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id} >
                    <h2> {blog.title} </h2>
                    <p>Written by: {blog.author} </p>
                </div>
                
            ))

            }
        </div>
    );
}
export default Home;




