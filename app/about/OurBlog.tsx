// File: app/about/OurBlog.tsx
"use client";
import React from "react";
import TextBlock from "@/components/common/TextBlock";
import BlogCard from "./OurBlog/BlogCard";

function OurBlog() {
  return (
    <section className="section space-y-10">
      <TextBlock heading="From our blog" />
      <BlogCard/>
    </section>
  );
}

export default OurBlog;
