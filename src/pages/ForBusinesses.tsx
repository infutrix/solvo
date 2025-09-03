import React from 'react';
import { Store, ShoppingCart, Heart, Truck } from 'lucide-react';
import BusinessInquiryForm from '../components/BusinessInquiryForm';

const ForBusinesses = () => {
  const services = [
    {
      icon: Store,
      title: "Restaurants & Cafes",
      description: "Ensure your food arrives hot and on time with our dedicated food delivery riders."
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & Retail",
      description: "Meet customer expectations with fast, reliable, and professional last-mile delivery."
    },
    {
      icon: Heart,
      title: "Pharmacies & Healthcare",
      description: "Trust our trained partners for sensitive and urgent medical deliveries."
    },
    {
      icon: Truck,
      title: "Grocery & Supermarkets",
      description: "Handle peak order volumes with a scalable fleet of delivery partners."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" 
             style={{ 
               backgroundImage: 'url(https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1600)'
             }}>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Focus On Your Business.
                <span className="text-orange-400"> We'll Handle The Deliveries.</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Discover how Solvo's outsourced delivery partner solutions can reduce your costs, 
                improve efficiency, and enhance your customer satisfaction.
              </p>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional delivery partner"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tailored Solutions for Every Industry
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whatever your industry, we have the expertise and fleet to meet your delivery needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-blue-50 p-8 rounded-xl transition-all duration-200 hover:shadow-lg group"
              >
                <div className="bg-white group-hover:bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-colors duration-200 shadow-md">
                  <service.icon className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get a Custom Quote Today
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Fill out the form below, and one of our partnership managers will contact you within 24 hours.
            </p>
          </div>
          <BusinessInquiryForm />
        </div>
      </section>
    </div>
  );
};

export default ForBusinesses;