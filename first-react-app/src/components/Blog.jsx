import React from "react";
import { CiBookmarkCheck } from "react-icons/ci";

const Blog = ({ blog, handleBookMark }) => {
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
    <div className="border-red-500 border-2 rounded-2xl my-5">
      <img src={cover} className="w-full h-44 rounded-xl" alt="img" />
      <p className="text-2xl font-bold">{title}</p>
      <p>{author}</p>
      <div className="w-8 ">
        <img src={author_img} className="rounded-full" alt="" />
      </div>
      <div className="flex justify-between">
        <p className="text-sm">Posted date: {posted_date}</p>
        <div className="flex gap-x-3">
          <p className="text-sm">{reading_time} min to read</p>
          <button onClick={() => handleBookMark(blog)}>
            <CiBookmarkCheck />
          </button>
        </div>
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
      <button className="my-4 text-fuchsia-500 font-semibold underline">
        markAsRead
      </button>
    </div>
  );
};

export default Blog;
