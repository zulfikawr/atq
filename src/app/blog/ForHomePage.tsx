import React from "react";
import Heading from "@/shared/Heading";
import ButtonPrimary from "@/shared/ButtonPrimary";
import { DEMO_POSTS } from "@/data/posts";
import SectionMagazine5 from "./SectionMagazine5";
import BgGlassmorphism from "@/components/BgGlassmorphism";

// DEMO DATA
const POSTS = DEMO_POSTS;

// DEMO POST FOR MAGAZINE SECTION
const MAGAZINE1_POSTS = POSTS.filter((_, i) => i >= 0 && i < 8);
//

const BlogPage: React.FC = () => {
  return (
    <div className="pt-12 nc-BlogPage overflow-hidden relative">
      <BgGlassmorphism />
      <Heading>Berita dan Artikel Terbaru</Heading>
      <div className="container relative">
        <div>
          <SectionMagazine5 posts={MAGAZINE1_POSTS} />
        </div>
        <div className="flex flex-col lg:pb-14 mt-12 md:mt-20 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row justify-center items-center">
            <ButtonPrimary href="/blog">Show me more</ButtonPrimary>
          </div>
      </div>
    </div>
  );
};

export default BlogPage;
