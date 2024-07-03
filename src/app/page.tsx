"use client";

import React, { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SectionHero from "@/app/(server-components)/SectionHero";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionOurFeatures from "@/components/SectionOurFeatures";
import BackgroundSection from "@/components/BackgroundSection";
import SectionGridCategoryBox from "@/components/SectionGridCategoryBox";
import BlogPage from "./blog/ForHomePage";
import ListingImageGallery from "@/components/listing-image-gallery/ListingImageGallery";
import ListingStayDetailPage from "./(listing-detail)/listing-stay-detail/ForHomePage";
import { imageGallery as listingStayImageGallery } from "./(listing-detail)/listing-stay-detail/constant";
import PageContact from "./contact/page";
import { Route } from "next";

function PageHome() {
  const router = useRouter();
  const thisPathname = usePathname();
  const searchParams = useSearchParams();
  const modal = searchParams?.get("modal");

  const handleOpenModalImageGallery = () => {
    router.push(`${thisPathname}/?modal=PHOTO_TOUR_SCROLLABLE` as Route);
  };

  const handleCloseModalImageGallery = () => {
    let params = new URLSearchParams(document.location.search);
    params.delete("modal");
    router.push(`${thisPathname}/?${params.toString()}` as Route);
  };

  return (
    <main className="nc-PageHome relative overflow-hidden">
      {/* GLASSMORPHISM */}
      <BgGlassmorphism />

      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        {/* SECTION HERO */}
        <SectionHero className="pt-10 lg:pt-16" />

        {/* SECTION 1 */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionOurFeatures />
        </div>

        {/* SECTION 2 */}
        <SectionSliderNewCategories categoryCardType="card5" />

        {/* SECTION 3 */}
        <SectionGridCategoryBox />

        {/* <div className="relative py-16">
          <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
          <SectionGridAuthorBox />
        </div> */}

        {/* <SectionSliderNewCategories
          heading="Explore by types of stays"
          subHeading="Explore houses based on 10 types of stays"
          categoryCardType="card5"
          itemPerRow={5}
        /> */}

        {/* <SectionVideos /> */}

        <BlogPage />

        <ListingStayDetailPage onOpenModal={handleOpenModalImageGallery} />

        {/* <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay />
        </div> */}

        <PageContact />
      </div>

      <ListingImageGallery
        isShowModal={modal === "PHOTO_TOUR_SCROLLABLE"}
        onClose={handleCloseModalImageGallery}
        images={listingStayImageGallery}
      />
    </main>
  );
}

export default PageHome;