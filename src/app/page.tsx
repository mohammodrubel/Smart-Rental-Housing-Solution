"use client"
import AllCard from "@/components/AllCard/AllCard";
import Banner from "@/components/Banner";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="text-center">
      <Navigation/>
      <Banner />
      <AllCard />
    </div>
  );
}
