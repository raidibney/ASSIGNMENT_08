import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { Button } from "@heroui/react";
import Link from 'next/link';
import Image from 'next/image';
const TopGenerations = async () => {
   
    const res = await fetch('https://assignment-08-ruddy.vercel.app/data.json');
    const courses = await res.json();

    
    const topRatedCourses = courses
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                
               
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                            Top Rated Courses 🏆
                        </h2>
                        <p className="text-gray-500 font-medium">
                            Explore our most loved programs by students worldwide.
                        </p>
                    </div>
                    <Link href="/all-photos">
                        <Button variant="light" color="primary" className="font-bold">
                            View All Courses <ArrowRight size={18} />
                        </Button>
                    </Link>
                </div>

               
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {topRatedCourses.map((course) => (
                        <div 
                            key={course.id} 
                            className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden flex flex-col"
                        >
                          
                            <div className="relative h-56 overflow-hidden">
                                <Image 
      src={course.image} 
     alt={course.title} 
       width={600} 
        height={400} 
  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
/>
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                    <Star size={14} className="text-yellow-500" fill="currentColor" />
                                    <span className="text-sm font-bold text-gray-800">{course.rating}</span>
                                </div>
                            </div>

                            
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="mb-2">
                                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-1 rounded">
                                        {course.category}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {course.title}
                                </h3>
                                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                                    {course.description}
                                </p>
                                
                                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                                    <div>
                                        <p className="text-xs text-gray-400 font-medium uppercase">Instructor</p>
                                        <p className="text-sm font-bold text-gray-700">{course.instructor}</p>
                                    </div>
                                    <Link href={`/courses/${course.id}`}>
                                        <Button 
                                            size="sm" 
                                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl"
                                        >
                                            View Details
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopGenerations;