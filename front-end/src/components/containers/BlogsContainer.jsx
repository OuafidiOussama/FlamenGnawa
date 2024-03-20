import React from 'react'
import BlogCard from '../cards/BlogCard'

export default function BlogsContainer() {
  return (
    <div className=" py-10 flex flex-wrap justify-center gap-10">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  )
}
