import React from "react";

const Blog = ({ blog }) => {
  const {
    cover,
    title,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div>
      <img src={cover} alt="img" />
      <p>{title}</p>
      <p>{author}</p>
      <div className="w-8 ">
        <img src={author_img} className="rounded-full" alt="" />
      </div>
      <div className="flex justify-between">
        <p className="text-sm">Posted date: {posted_date}</p>
        <p className="text-sm">{reading_time} min to read</p>
      </div>
      <div>
        <ul>
          <li>{hashtags[0]}</li>
          <li>{hashtags[1]}</li>
          <li>{hashtags[2]}</li>
          <li>{hashtags[3]}</li>
          <li>{hashtags[4]}</li>
        </ul>
      </div>
      <button>markAsRead</button>
    </div>
  );
};

export default Blog;
