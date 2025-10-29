// File: app/blog/BlogsSection.tsx
"use client"
import TextBlock from '@/components/common/TextBlock';
import React from 'react'
import BlogCards from './BlogCards';
import LatestBlog from './latestBlog/LatestBlog';

function BlogsSection() {
  return (
    <div>
      {" "}
      <TextBlock heading="Blog" />
      <BlogCards />
      <LatestBlog/>
    </div>
  );
}

export default BlogsSection