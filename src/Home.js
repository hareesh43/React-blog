import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Homepage = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [isError,setIsError] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      fetch(" http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok)
          {
            throw Error('your request object not found !! ')
          }  
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
        })
        .catch((err) => {
          setIsError(err);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
    {isError && <div>{isError}</div>}
      {isPending && <div>Loading....</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs here !!" />}
    </div>
  );
};
export default Homepage;
