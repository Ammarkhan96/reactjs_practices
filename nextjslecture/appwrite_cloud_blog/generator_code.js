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

  let a = [
    {
      "title": "Learn JavaScript",
      "html_content": "<p>JavaScript is a powerful programming language...</p>",
      "slug": "learn-javascript",
      "views": 1000,
      "author": "John Doe",
      "is_published": true
    },
    {
      "title": "Mastering React State Management",
      "html_content": "<p>React's state management is a crucial aspect...</p>",
      "slug": "react-state-management",
      "views": 800,
      "author": "Jane Smith",
      "is_published": true
    },
    {
      "title": "Building RESTful APIs with Node.js",
      "html_content": "<p>Node.js is a popular platform for building...</p>",
      "slug": "building-restful-apis-nodejs",
      "views": 1200,
      "author": "Alice Johnson",
      "is_published": true
    },
    {
      "title": "Getting Started with Vue.js",
      "html_content": "<p>Vue.js is a progressive JavaScript framework...</p>",
      "slug": "getting-started-vuejs",
      "views": 600,
      "author": "Bob Williams",
      "is_published": true
    },
    {
      "title": "CSS Tips and Tricks for Web Developers",
      "html_content": "<p>CSS is a powerful styling language...</p>",
      "slug": "css-tips-tricks",
      "views": 1500,
      "author": "Eve Brown",
      "is_published": true
    },
    {
      "title": "Introduction to Express.js",
      "html_content": "<p>Express.js is a minimal and flexible Node.js web application framework...</p>",
      "slug": "introduction-expressjs",
      "views": 900,
      "author": "Sam Wilson",
      "is_published": true
    },
    {
      "title": "Diving into Angular Components",
      "html_content": "<p>Angular components are the building blocks...</p>",
      "slug": "angular-components",
      "views": 700,
      "author": "Grace Lee",
      "is_published": true
    },
    {
      "title": "The Basics of Web Development",
      "html_content": "<p>Web development involves...</p>",
      "slug": "basics-web-development",
      "views": 2000,
      "author": "Alex Miller",
      "is_published": true
    },
    {
      "title": "Advanced TypeScript Techniques",
      "html_content": "<p>TypeScript offers advanced features...</p>",
      "slug": "advanced-typescript-techniques",
      "views": 500,
      "author": "Max Taylor",
      "is_published": true
    },
    {
      "title": "Optimizing Performance in React Applications",
      "html_content": "<p>Performance optimization is crucial for React...</p>",
      "slug": "optimizing-performance-react",
      "views": 1100,
      "author": "Sophia Clark",
      "is_published": true
    }
  ]
  

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

// function truncateHtml(htmlString, maxLength = 100){

//   const tempElement = document.createElement('div')
//   tempElement.innerHTML = htmlString

//   const textContent = tempElement.textContent || tempElement.innerText

//   if(textContent.length > maxLength){
//     const truncateText = textContent.substring(0, maxLength)
//     const truncateHtml = truncateText + '...'
//     return truncateHtml
//   }
//   return htmlString
// }


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
     
      navbar here
      <div>app here</div>
    </>
  );
}
