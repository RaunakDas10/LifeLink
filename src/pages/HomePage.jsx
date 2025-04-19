import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, Award, Clock, Users, Heart, ArrowRight } from 'lucide-react';

const HomePage = () => {
  const partners = [
    {
      name: "City Medical Center",
      location: "Manhattan, NY",
      hours: "Mon-Fri: 8AM-8PM, Sat: 9AM-5PM",
      phone: "(212) 555-0123"
    },
    {
      name: "Memorial Blood Bank",
      location: "Brooklyn, NY",
      hours: "Mon-Sat: 7AM-7PM",
      phone: "(718) 555-0456"
    },
    {
      name: "Regional Health Services",
      location: "Queens, NY",
      hours: "Mon-Fri: 8AM-6PM, Sat: 8AM-2PM",
      phone: "(347) 555-0789"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-red-600 text-white flex-grow">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6823617/pexels-photo-6823617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 flex items-center justify-center h-full">
          <div className="max-w-3xl text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Donate Blood, Save Lives
            </h1>
            <p className="text-xl mb-8 text-red-100">
              Connect with blood banks and help those in need. Your donation can save up to three lives.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/signup" className="btn bg-white text-red-600 hover:bg-red-50">
                Become a Donor
              </Link>
              <Link to="/dashboard" className="btn border border-white text-white hover:bg-red-700">
                Check Blood Availability
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                <Droplet className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">10,000+</h3>
              <p className="text-gray-600">Donations Per Month</p>
            </div>
            <div className="text-center p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">50,000+</h3>
              <p className="text-gray-600">Registered Donors</p>
            </div>
            <div className="text-center p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">30,000+</h3>
              <p className="text-gray-600">Lives Saved</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between h-full">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="text-xl text-red-100 max-w-xl">
              Join our community of donors and help save lives through blood donation.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/signup" className="btn bg-white text-red-600 hover:bg-red-50 font-semibold">
              Register Now
            </Link>
            <Link to="/contact" className="btn border border-white text-white hover:bg-red-700 font-semibold">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;