import React from 'react';
import { Sparkles, ArrowRight, Clock } from 'lucide-react';
import { Button } from "@heroui/react";
import Link from 'next/link';
import Image from 'next/image';

const NewReleases = async () => {
    // Fetching the same data source
    const res = await fetch('https://assignment-08-ruddy.vercel.app/data.json');
    const courses = await res.json();

    // Sort by ID descending to get the "Latest" additions
    const newReleases = courses
        .sort((a, b) => b.id - a.id)
        .slice(0, 3);

    return (
        <section className="py-20 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="bg-indigo-100 text-indigo-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                Fresh Content
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                            New Releases ✨
                        </h2>
                        <p className="text-gray-500 font-medium">
                            Stay ahead of the curve with our latest skill-based programs.
                        </p>
                    </div>
                    <Link href="/all-photos">
                        <Button variant="flat" color="secondary" className="font-bold rounded-full">
                            Explore All <ArrowRight size={18} />
                        </Button>
                    </Link>
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {newReleases.map((course) => (
                        <div 
                            key={course.id} 
                            className="group bg-white rounded-3xl border border-gray-200/60 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
                        >
                            {/* Image Container */}
                            <div className="relative h-56 overflow-hidden rounded-t-3xl">
                                <Image 
                                    src={course.image} 
                                    alt={course.title} 
                                    width={600} 
                                    height={400} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                {/* New Badge */}
                                <div className="absolute top-4 right-4 bg-indigo-600 text-white text-[10px] font-black px-3 py-1 rounded-lg shadow-lg flex items-center gap-1">
                                    <Sparkles size={10} /> NEW
                                </div>
                                {/* Duration Tag */}
                                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/20">
                                    <Clock size={12} className="text-indigo-300" />
                                    <span className="text-xs font-bold text-white">{course.duration}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="mb-3">
                                    <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em]">
                                        {course.level} • {course.category}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-1">
                                    {course.title}
                                </h3>
                                <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                                    {course.description}
                                </p>
                                
                                {/* Bottom Action */}
                                <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-[10px] font-bold">
                                            {course.instructor.charAt(0)}
                                        </div>
                                        <p className="text-sm font-bold text-gray-700">{course.instructor}</p>
                                    </div>
                                    <Link href={`/all-photos/${course.id}`}>
                                        <Button 
                                            size="sm" 
                                            variant="ghost"
                                            className="border-indigo-200 hover:bg-indigo-600 hover:text-white font-bold rounded-xl"
                                        >
                                            Details
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

export default NewReleases;