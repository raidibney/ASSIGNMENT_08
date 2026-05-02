import React from 'react';
import Link from 'next/link';
import { Button } from "@heroui/react";
import { Home, Search, AlertCircle } from 'lucide-react';

const NotFound = () => {
    return (
        <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16">
            <div className="max-w-2xl w-full text-center">
                {/* Visual Icon */}
                <div className="mb-8 flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                        <div className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-xl">
                            <AlertCircle size={64} className="text-blue-600" />
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <h1 className="text-9xl font-black text-slate-900 mb-4 tracking-tighter">
                    404
                </h1>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Course Not Found 🎓
                </h2>
                <p className="text-gray-500 text-lg mb-10 max-w-md mx-auto">
                    Oops! It looks like the page you are looking for has been moved or doesn0t exist. Lets get you back on track with your learning.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/" className="w-full sm:w-auto">
                        <Button 
                            className="w-full sm:w-64 bg-slate-900 hover:bg-blue-600 text-white font-bold h-14 rounded-2xl transition-all flex items-center gap-2"
                        >
                            <Home size={18} />
                            Back to Home
                        </Button>
                    </Link>
                    <Link href="/all-photos" className="w-full sm:w-auto">
                        <Button 
                            variant="bordered"
                            className="w-full sm:w-64 border-2 border-gray-200 text-gray-700 font-bold h-14 rounded-2xl hover:bg-white transition-all flex items-center gap-2"
                        >
                            <Search size={18} />
                            Browse Courses
                        </Button>
                    </Link>
                </div>

                {/* Subtle Footer Suggestion */}
                <p className="mt-12 text-sm text-gray-400">
                    Lost? Try searching for a specific category like <span className="font-semibold text-blue-500">Development</span> or <span className="font-semibold text-blue-500">Design</span>.
                </p>
            </div>
        </section>
    );
};

export default NotFound;