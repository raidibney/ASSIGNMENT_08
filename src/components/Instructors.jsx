import React from 'react';

/**
 * Top Instructors Section
 * Showcases the experts behind the courses to build user trust.
 */
export default function Instructors() {
  // Example data based on your "JSON Data Generation" requirement
  const instructors = [
    {
      id: 1,
      name: "John Doe",
      role: "Senior Web Developer",
      specialty: "React & Next.js",
      image: "https://i.pravatar.cc/150?u=john", // Placeholder profile image
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Creative Director",
      specialty: "UI/UX & Branding",
      image: "https://i.pravatar.cc/150?u=jane",
    },
    {
      id: 3,
      name: "Alex Johnson",
      role: "Marketing Expert",
      specialty: "Digital Growth",
      image: "https://i.pravatar.cc/150?u=alex",
    },
    {
      id: 4,
      name: "Sarah Williams",
      role: "Data Scientist",
      specialty: "Python & AI",
      image: "https://i.pravatar.cc/150?u=sarah",
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Learn from the Best 🏆
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Our instructors are industry leaders with years of experience in their respective fields.
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor) => (
            <div 
              key={instructor.id} 
              className="group bg-gray-50 rounded-2xl p-8 text-center hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Avatar Container */}
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="absolute inset-0 bg-blue-200 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
                <img 
                  src={instructor.image} 
                  alt={instructor.name} 
                  className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-sm"
                />
              </div>

              {/* Text Info */}
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors">
                {instructor.name}
              </h3>
              <p className="text-sm font-medium text-blue-600 mb-2 group-hover:text-blue-100 transition-colors">
                {instructor.role}
              </p>
              <div className="mt-4 inline-block px-3 py-1 bg-white rounded-full text-xs font-semibold text-gray-500 shadow-sm">
                {instructor.specialty}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
