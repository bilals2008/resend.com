// File: app/blog/latestBlog/LatestCard.tsx
import React from "react";
import Image from "next/image";
import { latestBlogData } from "./LatestData";

function LatestBlogCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-5">
      {latestBlogData.map((post) => (
        <div
          key={post.id}
          className="overflow-hidden hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
        >
          <Image
            src={post.image}
            alt={post.title}
            width={390}
            height={200}
            className="w-full rounded-xl border border-[#ffffff1a]"
          />

          <div className="p-4 space-y-2">
            <h3 className="text-[#F1F7FEB5]/70 text-base font-normal max-w-sm">
              {post.title}
            </h3>

            {/* Author Info */}
            <div className="flex items-center gap-2">
              <Image
                src={post.authorImage}
                alt={post.authorInfo}
                width={32}
                height={32}
                className="rounded-full border border-[#ffffff1a]"
              />
              <div className="text-sm">
                <p className="font-normal text-[#F1F7FEB5]">
                  {post.authorInfo}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LatestBlogCard;
