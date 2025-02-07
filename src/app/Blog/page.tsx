"use client";

import React from "react";
import Image from "next/image"; 
import Link from "next/link";

type Blog = {
  id: number;
  title: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
};

const blogs: Blog[] = [
  {
    id: 1,
    title: "Blog Post 1",
    author: "Author-1",
    date: "November 14, 2021",
    category: "Design",
    excerpt: "Transformez votre espace avec des meubles élégants et confortables ...",
    image: "/blog1.png",
  },
  {
    id: 2,
    title: "Blog Post 2",
    author: "Author-2",
    date: "November 14, 2021",
    category: "Technology",
    excerpt: "Transformez votre espace avec des meubles élégants et confortables...",
    image: "/blog2.png",
  },
  {
    id: 3,
    title: "Blog Post 3",
    author: "Author-3",
    date: "November 14, 2021",
    category: "Travel",
    excerpt: "Transformez votre espace avec des meubles élégants et confortables...",
    image: "/blog3.png",
  },
];

const recentPosts = [
  {
    id: 4,
    image: "/b1.png",
    title: "Recent Blog 1",
    date: "November 6, 2024",
  },
  {
    id: 5,
    image: "/b2.png",
    title: "Recent Blog 2",
    date: "November 5, 2024",
  },
  {
    id: 6,
    image: "/b3.png",
    title: "Recent Blog 3",
    date: "November 4, 2024",
  },
];

const Blog = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="py-16 space-y-2 bg-gray-100">
        <h1 className="text-4xl font-bold text-black ml-8 lg:ml-36">Blog</h1>
        <div className="flex items-center ml-8 text-black lg:ml-36 gap-2">
          <Link href="/ ">Home</Link>
          <span className="text-black mx-2">.</span>
          <span className="text-purple-600">Latest Blogs</span>
        </div>
      </div>

      {/* Blog List Section */}
      <div className="flex flex-col lg:flex-row lg:justify-center px-6 lg:px-20 py-10 bg-white">
        <div className="lg:w-1/2">
          {blogs.map((blog) => (
            <div key={blog.id} className="mb-10">
              <Image        
                src={blog.image}
                alt={blog.title}
                width={870}
                height={453}
                className="w-[35rem] h-80 object-cover rounded-md"
              />
              <div className="mt-4">
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <span>{blog.author}</span>
                  <span>{blog.date}</span>
                  <span>{blog.category}</span>
                </div>
                <h2 className="text-xl font-bold mt-2 text-black">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mt-2">{blog.excerpt}</p>
                <a href="#" className="text-black font-semibold mt-2 inline-block">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Section */}
        <div className="lg:w-1/4 lg:pl-10 mt-10 lg:mt-0">
          {/* Search Box */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-black mb-2">Search</h3>
            <input
              type="text"
              placeholder="Search here"
              className="w-full border border-gray-300 text-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-black mb-2">Categories</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Women (21)</li>
              <li>Men (15)</li>
              <li>Kids (9)</li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-black mb-2">Recent Posts</h3>
            <ul className="space-y-2">
              {recentPosts.map((post) => (
                <li key={post.id} className="flex items-center space-x-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-black">{post.title}</h4>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-black mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {["Design", "Technology", "Travel", "Fashion", "Food"].map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-200 text-sm text-gray-600 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Sale Products (Reusing Recent Posts) */}
          <div className="mb-6 mt-24">
            <h3 className="text-lg font-bold text-black mb-2">Sale Product</h3>
            <ul className="space-y-2">
              {recentPosts.map((post) => (
                <li key={post.id} className="flex items-center space-x-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-black">{post.title}</h4>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

