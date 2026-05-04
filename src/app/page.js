import Banner from "@/components/Banner";
import Instructors from "@/components/Instructors";
import LearningTips from "@/components/LearningTips";
import NewReleases from "@/components/NewCourse";
import TopGenerations from "@/components/TopGenerations";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <TopGenerations />
      <NewReleases />
      <LearningTips />
      <Instructors />
    </div>
  );
}
