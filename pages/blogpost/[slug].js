import React, { useState } from 'react';


const slug = (props) => {

  const [blog, setBlog] = useState(props.myBlog);

  return <div>
    <main>
      <h1>{blog && blog.slug}</h1>
      <hr />
      <div>{blog && blog.content}</div>
    </main>
  </div>;
};


export async function getServerSideProps(context) {

  const { slug } = context.query;

  const res = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
  const myBlog = await res.json()
  return { props: { myBlog } }

}

export default slug;