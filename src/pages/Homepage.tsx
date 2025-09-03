import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, TrendingUp, DollarSign, Target, MapPin, Clock, Star, Quote } from 'lucide-react';

const Homepage = () => {
  const features = [
    {
      icon: Shield,
      title: "Trained & Vetted Partners",
      description: "Our riders undergo rigorous background checks and professional training."
    },
    {
      icon: TrendingUp,
      title: "Fully Scalable Fleet",
      description: "Easily adjust the number of riders based on your daily or seasonal demand."
    },
    {
      icon: DollarSign,
      title: "Cost-Effective",
      description: "Reduce expenses on salaries, visas, insurance, and vehicle maintenance."
    },
    {
      icon: Target,
      title: "Focus On Your Business",
      description: "We handle all logistics and HR, so you can concentrate on growth."
    },
    {
      icon: Clock,
      title: "Real-Time Tracking",
      description: "Leverage modern technology to monitor your deliveries and ensure efficiency."
    },
    {
      icon: MapPin,
      title: "Local UAE Expertise",
      description: "Deep understanding of the routes, regulations, and market needs across the Emirates."
    }
  ];

  const partners = [
    {
      name: "Talabat",
      logo: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
      category: "Food Delivery"
    },
    {
      name: "Noon",
      logo: "https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
      category: "E-commerce"
    },
    {
      name: "Careem",
      logo: "https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
      category: "Multi-service"
    },
    {
      name: "Spinneys",
      logo: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
      category: "Grocery"
    },
    {
      name: "Aster Pharmacy",
      logo: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
      category: "Healthcare"
    },
    {
      name: "Emirates NBD",
      logo: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
      category: "Banking"
    }
  ];

  const testimonials = [
    {
      name: "Ahmed Al-Mansouri",
      position: "Operations Manager",
      company: "Fresh Foods Restaurant Chain",
      content: "Solvo transformed our delivery operations. We went from managing 15 riders internally to having a dedicated fleet of 25 professional partners. Our delivery times improved by 30% and costs reduced by 40%.",
      rating: 5,
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150"
    },
    {
      name: "Sarah Johnson",
      position: "CEO",
      company: "Dubai Electronics Hub",
      content: "The scalability Solvo offers is incredible. During Ramadan, we scaled from 8 to 20 riders seamlessly. Their professional training shows in every delivery - our customer satisfaction scores have never been higher.",
      rating: 5,
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150"
    },
    {
      name: "Mohammed Hassan",
      position: "Franchise Owner",
      company: "Healthy Bites Pharmacy",
      content: "Solvo's riders are incredibly reliable for our medical deliveries. They understand the importance of timely medication delivery and handle everything with utmost care and professionalism.",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Tell Us Your Needs",
      description: "Contact us for a free consultation to discuss your delivery volume and requirements."
    },
    {
      number: "02", 
      title: "We Deploy Your Team",
      description: "We assign trained Solvo partners and vehicles dedicated to your business."
    },
    {
      number: "03",
      title: "Manage & Grow",
      description: "Monitor your delivery operations seamlessly and scale your fleet as you grow."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-800 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
             style={{ 
               backgroundImage: 'url(https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1600)'
             }}>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Scalable Delivery Fleet,
            <span className="text-orange-400"> On Demand</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-white max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Solvo provides professional, vetted delivery partners to power your business growth across the UAE. 
            Focus on your customers, we'll handle the logistics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/for-businesses"
              className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl drop-shadow-lg"
            >
              For Businesses
            </Link>
            <Link
              to="/become-partner"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105 backdrop-blur-sm"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Streamline Your Deliveries, Not Your Payroll
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Tired of the challenges of recruiting, training, and managing delivery riders? Solvo is your strategic partner. 
                We provide a dedicated, outsourced fleet of delivery professionals, tailored to your business needs. 
                Scale up during peak seasons and reduce costs during off-peak times, all without the HR overhead.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Active Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Business Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700 mb-2">99.5%</div>
                  <div className="text-sm text-gray-600">On-Time Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional delivery operations"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700">Live Tracking Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Trusted by Leading UAE Businesses
            </h2>
            <p className="text-gray-600">
              Join the growing network of successful companies that rely on Solvo
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="group text-center">
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group-hover:scale-105 mb-3">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-full h-16 object-cover rounded grayscale group-hover:grayscale-0 transition-all duration-200"
                  />
                </div>
                <div className="text-sm font-semibold text-gray-700">{partner.name}</div>
                <div className="text-xs text-gray-500">{partner.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Solvo */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose Solvo?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
            We're not just another delivery service. We're your strategic partner in building a world-class delivery operation.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-2 group border border-gray-100"
              >
                <div className="bg-blue-100 group-hover:bg-blue-200 w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-colors duration-200">
                  <feature.icon className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what business leaders across the UAE say about partnering with Solvo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 group"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-gray-100 group-hover:border-orange-200 transition-colors duration-200"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm text-blue-700 font-medium">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="relative">
                  <Quote className="h-8 w-8 text-gray-200 absolute -top-2 -left-2" />
                  <p className="text-gray-600 leading-relaxed italic pl-6">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-orange-50 opacity-30"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our streamlined onboarding process gets your delivery operations running in no time
            </p>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group relative">
                <div className="bg-white border-4 border-blue-700 group-hover:border-orange-400 group-hover:bg-orange-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-200 group-hover:scale-110 shadow-lg">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-300 to-orange-300 transform -translate-y-1/2 z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories with Images */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories Across the UAE
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From bustling Dubai streets to Abu Dhabi's business districts, our partners deliver excellence every day
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 group">
              <img
                src="https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Food delivery in Dubai"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Food Delivery Excellence</h4>
                <p className="text-sm text-gray-600">Hot meals delivered across Dubai's business districts</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 group">
              <img
                src="https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="E-commerce delivery"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">E-commerce Solutions</h4>
                <p className="text-sm text-gray-600">Fast and secure package delivery nationwide</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 group">
              <img
                src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Healthcare delivery"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Healthcare & Pharmacy</h4>
                <p className="text-sm text-gray-600">Critical medical supplies delivered with care</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 group">
              <img
                src="https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Professional team"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Professional Team</h4>
                <p className="text-sm text-gray-600">Trained partners representing your brand</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're a business looking for delivery solutions or seeking a rewarding career opportunity
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* For Businesses */}
            <div className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-200"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Optimize Your Deliveries?
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Let us build a cost-effective and reliable delivery solution for you.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=100&h=100"
                  alt="Business solutions"
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="text-sm text-gray-600">
                  <div className="font-semibold">Free Consultation</div>
                  <div>24-hour response time</div>
                </div>
              </div>
              <Link
                to="/for-businesses#quote"
                className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
              >
                Request a Free Quote
              </Link>
            </div>

            {/* For Partners */}
            <div className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-200"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Looking for a Rewarding Rider Job?
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Join a professional team with great benefits and flexible hours.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=100&h=100"
                  alt="Career opportunities"
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="text-sm text-gray-600">
                  <div className="font-semibold">Competitive Benefits</div>
                  <div>Flexible schedules available</div>
                </div>
              </div>
              <Link
                to="/become-partner"
                className="inline-block bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;