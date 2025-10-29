// File: app/about/OurBlog/BlogCard.tsx
import React from "react";
import { blogPosts } from "./blogData";
import Image from "next/image";
import { motion } from "motion/react";
import { fadeUp } from "@/components/animations/variants";

function BlogCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map((post) => (
        <motion.div
          key={post.id}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className=" overflow-hidden hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
        >
          <Image
            src={post.image}
            alt={post.title}
            width={325}
            height={171}
            className="w-full rounded-xl border border-[#ffffff1a]"
          />
          <div className="p-4 space-y-2">
            <h3 className="text-white text-base font-medium">{post.title}</h3>
            <p className="text-sm text-[#F1F7FEB5]">{post.date}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default BlogCard;
