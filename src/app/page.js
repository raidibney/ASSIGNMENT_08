import Banner from "@/components/Banner";
import Instructors from "@/components/Instructors";
import LearningTips from "@/components/LearningTips";
import TopGenerations from "@/components/TopGenerations";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <TopGenerations />
      <LearningTips />
      <Instructors />
    </div>
  );
}
