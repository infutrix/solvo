import React from "react";
import {
  DollarSign,
  Clock,
  Truck,
  GraduationCap,
  TrendingUp,
  Users,
} from "lucide-react";
import PartnerApplicationForm from "../components/PartnerApplicationForm";

const BecomePartner = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary & Benefits",
      description:
        "We offer attractive compensation packages, including health insurance.",
    },
    {
      icon: Clock,
      title: "Flexible Working Hours",
      description: "Choose from various shifts that fit your lifestyle.",
    },
    {
      icon: Truck,
      title: "High-Quality Vehicle & Gear",
      description:
        "We provide a well-maintained vehicle and all necessary safety gear.",
    },
    {
      icon: GraduationCap,
      title: "Professional Training",
      description:
        "Receive comprehensive training to excel in your role and ensure customer satisfaction.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description:
        "We believe in promoting from within and offer opportunities for advancement.",
    },
    {
      icon: Users,
      title: "A Supportive Team",
      description:
        "Be part of a respectful and supportive community of fellow riders.",
    },
  ];

  const requirements = [
    "Valid UAE Motorcycle or Car Driving License",
    "Resident of the UAE with a valid visa",
    "Basic proficiency in English",
    "Familiarity with using GPS and smartphone apps",
    "A positive and professional attitude",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-400 to-orange-500 text-white py-20 lg:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=1600)",
          }}
        ></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
                Build Your Career as a
                <span className="text-blue-100"> Solvo Delivery Partner</span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-white max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
                Join the most professional delivery team in the UAE and enjoy
                competitive earnings, flexibility, and strong support.
              </p>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Happy delivery partner"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              More Than Just a Job
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-orange-50 p-8 rounded-xl transition-all duration-200 hover:shadow-lg group"
              >
                <div className="bg-white group-hover:bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-colors duration-200 shadow-md">
                  <benefit.icon className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We're Looking For
            </h2>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-green-100 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Apply Now to Join Solvo
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Take the first step towards a rewarding career. Fill out the
              application below.
            </p>
          </div>
          <PartnerApplicationForm />
        </div>
      </section>
    </div>
  );
};

export default BecomePartner;
