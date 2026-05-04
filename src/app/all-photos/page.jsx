
import React, { use } from 'react';
import { Star, Clock, BookOpen } from 'lucide-react';
import { Button } from "@heroui/react";
import Link from 'next/link';
import Image from 'next/image';

const AllPhotos = async () => {
    
    const res = await fetch('https://assignment-08-ruddy.vercel.app/data.json');
    const courses = await res.json();

    return (
        <section className="py-16 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
               
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                        Our All Premium Courses 🎓
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Explore our wide range of courses and start learning today.
                    </p>
                </div>

                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <div 
                            key={course.id} 
                            className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                        >
                          
                            <div className="relative h-52 w-full overflow-hidden rounded-t-2xl">
                                <Image 
                                    src={course.image} 
                                    alt={course.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                                    <Star size={14} className="text-yellow-500" fill="currentColor" />
                                    <span className="text-xs font-bold">{course.rating}</span>
                                </div>
                            </div>

                            
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="px-2 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase rounded">
                                        {course.category}
                                    </span>
                                    <span className="px-2 py-1 bg-green-50 text-green-600 text-[10px] font-bold uppercase rounded">
                                        {course.level}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
                                    {course.title}
                                </h3>
                                
                                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                                    {course.description}
                                </p>

                              
                                <div className="flex items-center gap-4 mb-6 text-gray-400 text-xs">
                                    <div className="flex items-center gap-1">
                                        <Clock size={14} />
                                        <span>{course.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <BookOpen size={14} />
                                        <span>{course.instructor}</span>
                                    </div>
                                </div>

                               
                                <div className="mt-auto">
                                    <Link href={`/all-photos/${course.id}`} className="w-full">
                                        <Button 
                                            className="w-full bg-slate-900 hover:bg-blue-600 text-white font-semibold rounded-xl transition-colors"
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

export default AllPhotos;