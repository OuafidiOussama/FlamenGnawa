import React from 'react'
import BlogsContainer from '../../components/containers/blogs/BlogsContainer'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../components/partials/Loading'

export default function Blog() {
  const dispatch = useDispatch()
  const {loading, articles} = useSelector(state=>state.blog)
  return (
    <div className="font-description min-h-screen">
      <div className="py-10 flex flex-col items-center uppercase">
        <p className="relative -top-1 -left-2 opacity-20 font-semibold text-red text-8xl tracking-wider">
          Blog
        </p>
      </div>
      {loading ? <Loading /> : articles.length === 0 ? <div className="flex justify-center items-center h-2/3 text-3xl md:text-5xl lg:text-8xl">Coming Soon!</div> : <BlogsContainer />}
    </div>
  )
}
