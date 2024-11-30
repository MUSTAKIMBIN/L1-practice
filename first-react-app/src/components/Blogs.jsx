import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch(`data.json`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  return (
    <div className="w-2/3">
      <h3>total blog: {blog.length}</h3>
      {blog.map((blog) => (
        <Blog blog={blog}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
