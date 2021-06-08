import React from "react";
import "./Blogs.css";

const Blogs = () => {
  const blogs = [
    {
      title: "Making Creative and beautiful websites",
      des: `Nowadays, websites are a major part of our internet. It's worldwide. In our day-to-day life, we use many websites...`,
      link: "https://protyashablogs.blogspot.com/2021/05/making-beautiful-and-creative-websites.html",
    },
    {
      title: "Some Confusing and Important topics in Javascript",
      des: `Many times we face some really confusing things while programming. And in Javascript, we often face such types of confusing topics. These…`,
      link: "https://protyasha0999.medium.com/some-confusing-and-important-topics-in-javascript-187828b775b1",
    },
    {
      title: "Optimizing Performance",
      des: `Internally, React uses several clever techniques to minimize the number of costly DOM operations required to update the UI. For many…`,
      link: "https://protyasha0999.medium.com/optimizing-performance-5287ad99ca28",
    },
    {
      title: "Let’s Catch Some Errors.",
      des: `We are programmers, cool huh? Yeah sounds pretty cool. But when it’s about getting some errors in our program, we feel like “oh come on…`,
      link: "https://protyasha0999.medium.com/lets-catch-some-errors-afcc8b2e65ca",
    },
    {
      title: "Array and methods for array in Javascript.",
      des: `Arrays are well-knowned in programming world. It’s a data type. But it’s really a complicated concept to understand at the first place. But…`,
      link: "https://protyasha0999.medium.com/array-and-methods-for-array-in-javascript-43d265225048",
    },
  ];
  return (
    <section className="blogsSection">
      <div>
        <h1 className="text-white roboto-condensed blogsTitle">Blogs</h1>
      </div>
      <div className="blogsContainer">
        {blogs.map((blog) => (
          <div key={blog.title} className="width-80 blogs">
            <div className="h-75">
              <h1 className="text-coral roboto-condensed">{blog.title}</h1>
              <p className="text-gray montserrat">{blog.des}</p>
            </div>
            <a
              rel="noreferrer"
              target="_blank"
              className="borderWhite p-5 brr-5"
              href={`${blog.link}`}
            >
              View Blog
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
