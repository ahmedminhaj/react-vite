import { useState } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { id: 1, title: "New Website", body: "Start to create new website in react JS.", author: "Moitte"},
        { id: 1, title: "React Begainer", body: "Self learning start React.", author: "Akkaisse"},
        { id: 1, title: "First Khep Peoject", body: "Start to create new website in react JS.", author: "Bojolle"},
    ])

    return ( 
        <div className="home">
            {blogs.map((blog)=>(
                <div className="blog-preview">
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
    
}
 
export default Home;