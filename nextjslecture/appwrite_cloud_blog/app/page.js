"use client"
import Navbar from "@/components/Navbar";
import { Client, Databases, ID } from "appwrite";
import { useState, useEffect } from 'react'
import BlogCard from "@/components/BlogCard";

export default function Home() {
  const client = new Client();
  const [blogs, setBlogs] = useState([])

  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65f5e389537707278d01');
  const databases = new Databases(client);

  
  

  let promise = databases.listDocuments(
    '65f5e4c839cb6ec34d8e',
    '65f5e4e7439bc3214b9a',
    [ ]
);

promise.then(function (response) {
    console.log(response);
    setBlogs(response.documents)
}, function (error) {
    console.log(error);
});

function truncateHtml(htmlString, maxLength = 100){

  const tempElement = document.createElement('div')
  tempElement.innerHTML = htmlString

  const textContent = tempElement.textContent || tempElement.innerText

  if(textContent.length > maxLength){
    const truncateText = textContent.substring(0, maxLength)
    const truncateHtml = truncateText + '...'
    return truncateHtml
  }
  return htmlString
}


  // const promise = databases.createDocument(
  //   '65f5e4c839cb6ec34d8e',
  //   '65f5e4e7439bc3214b9a',
  //   ID.unique(),
  
    // {
      
    //     "title": "Learn Javascript",
    //     "content": "<p>JavaScript is a powerful programming language used primarily for web development. It is essential for creating interactive and dynamic websites.</p>",
    //     "slug": "learn-javascript",
    //     "views": 1000,
    //     "author": "John Doe",
    //     "is_published": true
    // }

    
    
  // );

  // promise.then(function (response) {
  //   console.log(response);
  // }, function (error) {
  //   console.log(error);
  // });



  return (
    <>
     <Navbar />
      <div>
        <div className="container mx-auto mt-8">
          <h1 className="text-3xl font-bold mb-6"></h1>
          <div className="">
            {blogs.length == 0 && "Loading..."}
            {blogs.map((blog, index) => (
              <BlogCard key={index} {...blog} metaDesc= {truncateHtml(blog.content)} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
