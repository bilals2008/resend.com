// File: app/blog/latestBlog/LatestBlog.tsx
import React from 'react'
import LatestBlogCard from './LatestCard'

function LatestBlog() {
  return (
    <div className='py-10'>
      <h2 className='text-sm text-gray-400'>Latest Blogs</h2>
      <LatestBlogCard/>
    </div>
  )
}

export default LatestBlog