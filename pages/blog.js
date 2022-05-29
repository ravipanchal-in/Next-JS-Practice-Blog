import React, { useState } from 'react';
import Link from 'next/link';

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);

  return <div >
    <main >
      {blogs.map((item, index) => {
        return (
          <div key={index}>
            <Link href={`/blogpost/${item.slug}`}>
              <h3>{item.title}</h3></Link>
            <p>{item.content.substr(0, 40)}...</p>
          </div>
        )
      })}
    </main>
  </div>
};


export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/blogs`)
  const allBlogs = await res.json()
  return { props: { allBlogs } }
}


export default Blog;