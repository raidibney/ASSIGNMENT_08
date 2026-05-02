"use client";

import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
     
      <div className="w-full h-full rounded-lg bg-indigo-950/60 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 max-w-3xl leading-tight">
            Upgrade Your Skills Today 🚀
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-blue-50/90 font-medium">
            Learn from Industry Experts with hands-on projects in Web Development, Design, and Marketing.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/all-photos">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 shadow-lg transition-transform hover:scale-105"
              >
                Explore Courses
              </Button>
            </Link>

            <Link href="/Instructors">
              <Button 
                variant="bordered" 
                size="lg" 
                className="text-white border-white/50 hover:bg-white/10 backdrop-blur-sm px-8"
              >
                Meet Mentors
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;