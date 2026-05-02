import React from 'react';
import { Star, Clock, User, BookOpen, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Button } from "@heroui/react";
import Link from 'next/link';
import Image from 'next/image';

const CourseDetails = async ({ params }) => {
    // 1. Fetch the data (Next.js caches this automatically)
    const res = await fetch('https://assignment-08-ruddy.vercel.app/data.json');
    const courses = await res.json();
    
    // 2. Find the specific course based on the ID from URL
    const { id } = await params;
    const course = courses.find((c) => c.id === parseInt(id));

    if (!course) {
        return <div className="text-center py-20">Course not found!</div>;
    }

    // Static Curriculum Data
    const curriculum = [
        "Introduction to the Course",
        "Setting up the Environment",
        "Core Concepts and Fundamentals",
        "Advanced Practical Projects",
        "Final Assessment & Certification"
    ];

    return (
        <main className="min-h-screen bg-white pb-20">
            {/* Header / Breadcrumb */}
            <div className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="max-w-7xl mx-auto px-6">
                    <Link href="/all-photos" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">
                        <ArrowLeft size={16} />
                        Back to Courses
                    </Link>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* Left Column: Course Info */}
                    <div className="lg:col-span-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                            {course.category} • {course.level}
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                            {course.title}
                        </h1>

                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            {course.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-6 mb-10 text-gray-700">
                            <div className="flex items-center gap-2">
                                <div className="p-2 bg-yellow-100 rounded-lg">
                                    <Star size={20} className="text-yellow-600" fill="currentColor" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-medium">Rating</p>
                                    <p className="font-bold">{course.rating} / 5.0</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="p-2 bg-blue-100 rounded-lg">
                                    <Clock size={20} className="text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-medium">Duration</p>
                                    <p className="font-bold">{course.duration}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="p-2 bg-purple-100 rounded-lg">
                                    <User size={20} className="text-purple-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-medium">Instructor</p>
                                    <p className="font-bold">{course.instructor}</p>
                                </div>
                            </div>
                        </div>

                        {/* Curriculum Section */}
                        <div className="border-t border-gray-100 pt-10">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <BookOpen className="text-blue-600" />
                                Course Curriculum
                            </h3>
                            <div className="space-y-4">
                                {curriculum.map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                                            {index + 1}
                                        </span>
                                        <p className="font-medium text-gray-800">{item}</p>
                                        <CheckCircle2 size={18} className="ml-auto text-gray-300" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Floating Card */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-10 bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden">
                            <div className="relative h-60 w-full">
                                <Image 
                                    src={course.image} 
                                    alt={course.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-8">
                                <div className="flex items-baseline gap-2 mb-6">
                                    <span className="text-3xl font-black text-gray-900">$99.99</span>
                                    <span className="text-gray-400 line-through">$199.99</span>
                                </div>
                                
                                <div className="space-y-4">
                                    <Button className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-2xl shadow-lg shadow-blue-200 transition-all">
                                        Enroll Now
                                    </Button>
                                    <Button variant="bordered" className="w-full h-14 border-gray-200 font-bold text-gray-700 rounded-2xl hover:bg-gray-50">
                                        Free Preview
                                    </Button>
                                </div>

                                <ul className="mt-8 space-y-3">
                                    {['Full lifetime access', 'Certificate of completion', '12 downloadable resources', 'Access on mobile and TV'].map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                                            <CheckCircle2 size={16} className="text-green-500" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default CourseDetails;