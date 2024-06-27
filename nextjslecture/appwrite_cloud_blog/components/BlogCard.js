import Link from 'next/link';
import React from 'react';

const Blog = ({ title, author, metaDesc, readMoreLink, slug }) => {
    return (
        <div className="mx-auto bg-white rounded-xl overflow-hidden shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-gray-700 mb-4">{metaDesc}</p>
            <p className="text-gray-600 mb-4 text-sm font-bold">Author: {author}</p>
            <Link href={"/blogpost/" + slug} 
            className="mt-2 bg-purple-500 text-white px-4 py-2 rounded hover:bg-green-600 cursor-pointer">
                Read More</Link>
        </div>
    );
};

export default Blog;
