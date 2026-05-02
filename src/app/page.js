import Banner from "@/components/Banner";
import Instructors from "@/components/Instructors";
import LearningTips from "@/components/LearningTips";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <LearningTips />
      <Instructors />
    </div>
  );
}
