"use client"

import React from 'react'
import Navbar from '@/components/Navbar'
import { useState } from 'react'
import { Client, Databases, ID, Query } from "appwrite";

export default function Page({ params }) {
  const [blog, setBlog] = useState()
    const client = new Client();
    const [blogs, setBlogs] = useState([])

  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65f5e389537707278d01');
  const databases = new Databases(client);
  

  let promise = databases.listDocuments(
    '65f5e4c839cb6ec34d8e',
    '65f5e4e7439bc3214b9a',
    [
        Query.equal('slug', params.slug)
     ]
);

promise.then(function (response) {
    console.log(response);
    setBlog(response.documents[0])
}, function (error) {
    console.log(error);
});


    return (
        <>
        <Navbar />
         <div>
           <div className="container mx-auto mt-8">
             <h1 className="text-3xl font-bold mb-6">{blog?.title}</h1>
             <div className="">
               {!blog && "Loading..."}
               <div className="text-sm font-bold italic">Author: {blog?.author}</div>
               <div className="shadow-xl p-10" dangerouslySetInnerHTML={{__html: blog?.content}}></div>
              
             </div>
           </div>
         </div>
       </>
    )
  }