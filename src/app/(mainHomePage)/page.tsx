"use client"
import AllCard from "@/components/AllCard/AllCard";
import Banner from "@/components/Banner";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <div className="text-center">
      <Banner />
      <AllCard />
      <Faq/>
    </div>
  );
}
