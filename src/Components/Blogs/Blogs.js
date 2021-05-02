import React from 'react';
import './Blogs.css';

const Blogs = () => {
    const blogs = [
        {
            title: 'Making Creative and beautiful websites',
            des: `Nowadays, websites are a major part of our internet. It's worldwide. In our day-to-day life, we use many websites.`,
            link: 'https://protyashablogs.blogspot.com/2021/05/making-beautiful-and-creative-websites.html'
        },
    ]
    return (
        <section className="blogsSection">
            <div>
                <h1 className="text-white roboto-condensed blogsTitle">Blogs</h1>
            </div>
            <div className="blogsContainer">
                {
                    blogs.map(blog => 
                    <div key={blog.title} className="width-80 blogs">
                        <h1 className="text-coral roboto-condensed">{blog.title}</h1>
                        <p className="text-gray montserrat">{blog.des}</p>
                        <a target="_blank" className="borderWhite p-5 brr-5" href={`${blog.link}`}>View Blog</a>
                    </div>)
                }
            </div>
        </section>
    );
};

export default Blogs;